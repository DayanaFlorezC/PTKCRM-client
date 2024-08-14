import { useState } from "react"

import { getRequestsByUser, getAllRequests, deleteRequestById, createRequest, updateRequestById } from "../../components/services/requestService"

import { getEmpleados } from "../../components/services/userService"
const useRequestHook = ({ user, token }) => {

    const [requests, setRequest] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [empleadosList, setEmpleadoList] = useState([])

    const limit = 6

    const transformData = async (data) => {

        console.log(data, 'auauua')

        return data.map((e) => {
            let nameUser = e.id
            if (user.role === 'empleado') nameUser = user.nombre
            return {
                'id': e.id,
                'Código': e.codigo,
                'Descripción': e.descripcion,
                'Resumen': e.resumen,
                'Empleado': nameUser
            }

        })

    }

    const getRequestByUserFunc = async () => {

        const query = { limit, page }

        const response = await getRequestsByUser({ user, token, query })

        const requestFormat = await transformData(response.solicitudes)

        setRequest(requestFormat)
        setTotal(response.total)

        return requestFormat
    }

    const getAllRequestsFunc = async () => {

        const query = { limit, page }

        const response = await getAllRequests({ user, token, query })

        const requestFormat = await transformData(response.solicitudes)

        setRequest(requestFormat)

        return requestFormat

    }

    const deleteRequest = async (id) => {

        const query = {}

        const response = await deleteRequestById({ query, token, user, id })

        if(!response) return alert('No se pudo eliminar la solicitud')

        return response

    }


    const getRequest = async () => {

        if (user.rol === 'admin') {
            getAllRequestsFunc()
        } else {
            getRequestByUserFunc()
        }

    }


    const createRequestHandle = async (data) => {

        console.log(data, 'sile')

        const response = await createRequest({ token, user, data })

        if (!response) return alert('No se pudo crear la solicitud')

        return response

    }

    const updateRequestHandler = async () => {

        return alert('TODO')
        const response = await updateRequestById({token, user, id})
    }

    const getEmpleadosPag = async () =>{

        const query ={page: 1, limit: 1000}

        const response = await getEmpleados({token, user, query })

        console.log(response, 'xd')

        setEmpleadoList(response.users)

        return response

    }

    return { getRequest, requests, setPage, page, total, limit, deleteRequest, createRequestHandle, getEmpleadosPag, empleadosList }

}


export default useRequestHook