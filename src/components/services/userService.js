
import { makeRequest } from '../../config/apiConfig'

const getUsers = async ({ token, query }) => {

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


  const response = await makeRequest(`users?limit=${limit}&&page=${page}`, fetchConfig)

  return response


}

const getEmpleados = async ({ token, user, query }) => {

  const body = {}

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


  const response = await makeRequest(`empleados?limit=${limit}&&page${page}`, fetchConfig)

  return response


}

const getEmpleadoById = async ({ token, user, id }) => {

  const body = {}

  const fetchConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(body)
  };


  const response = await makeRequest('empleado/:' + id, fetchConfig)

  return response

}


const deleteEmpleadoById = async ({ token, id }) => {

  const fetchConfig = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: {}
  };


  const response = await makeRequest('empleados/' + id, fetchConfig)

  return response

}

const updateEmpleadoById = async ({ token, id, data }) => {

  const fetchConfig = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: data
  };


  const response = await makeRequest('empleados/' + id, fetchConfig)

  return response

}

const loginUser = async ({ data }) => {

  const fetchConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data
  };


  const response = await makeRequest('login', fetchConfig)

  return response

}

const createUser = async ({ token, data }) => {

  const fetchConfig = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: data
  };


  const response = await makeRequest('empleados', fetchConfig)

  return response

}


export {
  getUsers,
  getEmpleadoById,
  getEmpleados,
  updateEmpleadoById,
  deleteEmpleadoById,
  loginUser,
  createUser
}