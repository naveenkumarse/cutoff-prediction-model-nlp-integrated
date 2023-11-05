import React from 'react';
import {  Route, Routes, HashRouter } from 'react-router-dom';
import ChatBot from './chatbot';
import PredictForm from './predict_form';

// Define your components for different pages


const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<ChatBot />} />
                <Route path="/predictCutoff" element={<PredictForm />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
