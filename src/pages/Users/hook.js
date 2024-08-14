import { useState } from "react"
import {  getUsers, createUser, deleteEmpleadoById, updateEmpleadoById } from "../../components/services/userService"
import {getEmpleados } from "../../components/services/userService"

const useUsersHook = ({ user, token }) => {

    const [users, setUsers] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)

    const limit = 6

    const transformData = async (data) => {

        return data.map((e) => {
            return {
                'id':e.id,
                'Nombre': e.nombre,
                'Email': e.email,
                'Salario': e.salario,
                'Rol': e.rol
            }
        })
    }

    const handleDeleteUser = async (id) => {

       const response = await deleteEmpleadoById({token, user, id})

       if(!response) return alert('No se puede eliminar este usuario')

       return response

    }

    const createUserHandle = async (data) => {

        const response = await createUser({token, user, data})

        if(!response) return alert('Error al crear el usuario')

        window.location.href = '/'; 

    }

    const editUserHanddler = async (data, id) => {

        const response = await updateEmpleadoById({token, user, id, data})

        if(!response) return alert('Error al editar el usuario')

        return response
    }

    const getUsersFunc = async () => {

        const query = {limit, page}

        const response = await getUsers({ user, token, query })

        const usersFormat = await transformData(response.users)

        setUsers(usersFormat)

        setTotal(response.count)

        return usersFormat
    }



    return { getUsersFunc, setPage, page, total, users, limit, handleDeleteUser, createUserHandle, editUserHanddler }

}


export default useUsersHook