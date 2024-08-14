import { makeRequest } from '../../config/apiConfig'

const getAllRequests = async ({query, token}) =>{

    const limit = query.limit || 100;
    const page = query.page || 1

    const fetchConfig = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: {}
      };

      const response = await makeRequest(`solicitudes?limit=${limit}&&page=${page}` , fetchConfig)
      return response

}

const getRequestsByUser = async ({query, token, user}) =>{

    try {

    const limit = query.limit || 100;
    const page = query.page || 1
    const userId = user.id

    const fetchConfig = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: {}
      };

      const response = await makeRequest(`solicitud/${userId}?limit=${limit}&&page=${page}` , fetchConfig)

      return response

    } catch (error) {
        console.log(error)
    }

}

const getRequestById = async ({query, token, user, id}) =>{
    const body ={}

    const limit = query.limit || 100;
    const page = query.page || 1

    const fetchConfig = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(body)
      };


      const response = await makeRequest(`solicitudes/:${id}?limit=${limit}&&page${page}` , fetchConfig)

      return response

}

const deleteRequestById = async ({ token,  id}) =>{

    const fetchConfig = {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: {}
      };

      const response = await makeRequest(`solicitud/${id}` , fetchConfig)

      return response

}

const updateRequestById = async ({ token, id, data}) =>{

    const fetchConfig = {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: data
      };


      const response = await makeRequest(`solicitud/${id}` , fetchConfig)

      return response

}

const createRequest = async ({ token, data}) =>{
  
    const fetchConfig = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: data
      };


      const response = await makeRequest(`solicitud` , fetchConfig)

      return response

}


export {
    getAllRequests,
    getRequestById,
    getRequestsByUser,
    deleteRequestById,
    updateRequestById,
    createRequest
}