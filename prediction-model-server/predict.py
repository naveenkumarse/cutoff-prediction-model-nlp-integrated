from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import numpy as np
import xgboost as xgb
import joblib
from fastapi.middleware.cors import CORSMiddleware
from sklearn.model_selection import train_test_split
# Load your pre-trained XGBoost model
xgb_regressor = joblib.load('xgb_regressor_model.pkl')

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Define a request model to accept input data
class PredictionInput(BaseModel):
    year: float
    quota: str
    dept: str
    difficulty_level: str
    job_sector: str

df = pd.read_excel("cutoff_predict.xlsx", engine='openpyxl')
df["cutoff"].astype(float)
df.isnull().sum()
one_hot_encoded_data = pd.get_dummies(df, columns = ['quota', 'dept','difficulty_level','job_demand'])
x = one_hot_encoded_data.drop(columns=['cutoff'])
y = one_hot_encoded_data['cutoff']


x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, train_size=0.8,random_state=0)

@app.post("/predict/")
async def predict_cutoff(data: PredictionInput):
    # Create a DataFrame from the input data
    print(data.year)
    input_data = pd.DataFrame(columns=x.columns)
    input_data.loc[0] = 0
    input_data['year'] = float(data.year)
    input_data[f'quota_{data.quota}'] = 1
    input_data[f'dept_{data.dept}'] = 1
    input_data[f'difficulty_level_{data.difficulty_level}'] = 1
    input_data[f'job_demand_{data.job_sector}'] = 1
    predicted_cutoff = xgb_regressor.predict(input_data)
    # print(predict_cutoff[0].item())
    return {"predicted_cutoff": predicted_cutoff[0].item()}

# if __name__ == "__predict__":
#     import joblib
#     import xgboost as xgb
#     xgb_regressor = joblib.load('xgb_regressor_model.pkl')
#     import uvicorn

#     uvicorn.run(app, host="0.0.0.0", port=8060)