export const fetchResponse = async (message) => {
    try {
        // after depoloyment you should change the fetch URL below
        console.log(message);
        const response = await fetch('http://127.0.0.1:8000/generate_text', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: message
            })
        })
       
        const data = await response.json()
        console.log(data[0])
        return data[0]
    } catch (error) {
        console.log(error);
    }
}

export const fetchCutoff = async (message) => {
    try {
        // after depoloyment you should change the fetch URL below
        console.log(message);
        const response = await fetch('http://127.0.0.1:8060/predict/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
       
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
}
