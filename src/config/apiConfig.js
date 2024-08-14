const API_URL = "http://localhost:3001/api"
import axios from 'axios'

const makeRequest = async ( route, fetchConfig ) => {
    try {

        const response = await axios({
            method: fetchConfig.method || 'post',
            url: `${API_URL}/${route}`,
            data: fetchConfig.body || {},
            headers: fetchConfig.headers
        })
        
        return response.data

    } catch (error) {
        console.log(error, 'error en la peticion')
        return false
    }
}



export { makeRequest }