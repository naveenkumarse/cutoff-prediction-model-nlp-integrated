import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { fetchCutoff } from "./api";

const PredictForm = () => {

    const [year, setYear] = useState(0);
    const [quota, setQuota] = useState();
    const [dept, setDept] = useState();
    const [exam, setExam] = useState();
    const [job, setJob] = useState();
    const [predictedVal,setPredictedval] =  useState(0);
    const onPredictSubmit = async () => {
        const body = {
            "year": year,
            "quota": quota,
            "dept": dept,
            "difficulty_level": exam,
            "job_sector": job
        }
        const output = await fetchCutoff(body);
        console.log(output.predicted_cutoff);
        setPredictedval(output.predicted_cutoff);
    }
    return (
        <>
            <div className="bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between  align-middle">
                <div className="gradient-01 z-0 absolute"></div>
                <div className="gradient-02 z-0 absolute"></div>
                <div className="w-full md:w-1/2 mx-auto text-center">
                    <h1 className="text-2xl font-semibold mb-4 ">Enter the Details to predict cutoff</h1>

                    <div class="relative z-0 w-full mt-32 mb-6 group">
                        <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={year} onChange={e => setYear(e.target.value)} required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the year</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 mt-12 group">
                        <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={dept} onChange={e => setDept(e.target.value)} required />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the Department</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 mt-12 group">
                        <input type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={quota} onChange={e => setQuota(e.target.value)} required />
                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the Quota</label>
                    </div>

                    <div class="relative z-0 w-full mb-6 mt-12 group">
                        <input type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={exam} onChange={e => setExam(e.target.value)} required />
                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the difficulty level of Examination</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 mt-12 group">
                        <input type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={job} onChange={e => setJob(e.target.value)} required />
                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter the job demand for the feild</label>
                    </div>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-32" onClick={onPredictSubmit}>Predict cutoff</button>

                    <p class="mt-20">the predicted cutoff for the year : {predictedVal}</p>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default PredictForm;