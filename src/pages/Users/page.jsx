import { useEffect, useState } from "react";

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Input, Button } from '@nextui-org/react'

import PaginationComponent from "../../components/Pagination/page"
import ModalComponent from "../../components/Modal/page";
import TableComponent from "../../components/Table/page";

import { useAuth } from '../../context/AuthContext';

import useUsersHook from "./hook";

import './style.css'

function Users() {

  const { user, token } = useAuth();

  const {
    getUsersFunc,
    users,
    total,
    page,
    setPage,
    limit,
    handleDeleteUser,
    createUserHandle,
    editUserHanddler,
  } = useUsersHook({ user, token })

  useEffect(() => {
    getUsersFunc()
  }, [page])

  //?variables de estado
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [nombre, setNombre] = useState('');
  const [salario, setSalario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [rol, setRol] = useState('')

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  let data = users;
  let colums = ['Nombre', 'Email', 'Salario', 'Rol', 'Acciones']

  const handleActionClick = (action, user, title, id) => {
    setModalContent({ action, user, title, id });
    onOpen();
  };

  const handleConfirm = () => {
    if (modalContent?.action === 'borrar') {
      handleDeleteUser(modalContent?.id)
    }
    onClose();
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modalContent?.action === 'crear') {
      createUserHandle({ nombre, salario, email, password, rol })
      onClose();
    }

    if (modalContent?.action === 'editar') {

      let data = {};

      if(nombre !== '') data.nombre = nombre
      if(salario !== '') data.salario = +salario
      if(email !== '') data.email = email
      if(rol !== '') data.rol = rol

      editUserHanddler(data, modalContent?.id)
      onClose();

    }

  };

  const ModalContent = () => {

    const title = modalContent?.title
    const action = modalContent?.action

    return <div>
      <h2>{title}</h2>
      {['editar', 'crear'].includes(action) && (
        <div className="content-form-new">
          <span>Aquí puedes editar la información del usuario.</span>
          <div className="content-editUser" >
            <form className="form-editUser" onSubmit={handleSubmit}>
              <Input
                type="text"
                label="Nombre:"
                name="nombre"
                placeholder="Ingrese su nombre"
                className="custom-input"
                style={{ width: "80%", height: "30px" }}
                labelClassName="custom-label"
                onChange={(e) => setNombre(e.target.value)}
              />
              <br />
              <Input
                type="number"
                label="Salario:"
                name="salario"
                placeholder="Ingrese su salario"
                className="custom-input"
                style={{ width: "80%", height: "30px" }}
                labelClassName="custom-label"
                onChange={(e) => setSalario(e.target.value)}
              />
              <br />
              <Input
                type="email"
                label="Email:"
                name="email"
                placeholder="Ingrese su email"
                className="custom-input"
                style={{ width: "80%", height: "30px" }}
                labelClassName="custom-label"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <Input
                type="password"
                label="Contraseña:"
                name="password"
                placeholder="Ingrese su contraseña"
                className="custom-input"
                style={{ width: "80%", height: "30px" }}
                labelClassName="custom-label"
                onChange={(e) => setPassword(e.target.value)}
                disabled={action === 'editar' ? true : false}
              />
              <br />
              <div className="select-item">
              <label htmlFor="role" >Rol:</label>
              <select
                id="rol"
                name="rol"
                style={{ width: "80%", height: "30px" }}
                onChange={(e) => setRol(e.target.value)}
                value={rol}
              >
                <option value="" disabled>Seleccione su rol</option>
                <option value="empleado">Empleado</option>
                <option value="admin">Admin</option>
              </select>
              </div>
              <br />
              <Button className="btn-singIn" type="submit" color="primary">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      )}
      {action === 'borrar' && (
        <div>¿Estás seguro de que deseas borrar este usuario?</div>
      )}
      {action == 'borrar' && <button onClick={handleClose}>Cancelar</button>}
      <button onClick={handleConfirm}>
        {action === 'borrar' && 'Borrar'}
      </button>
    </div>
  }

  const acciones = [
    {
      name: 'editar',
      icon: <FaRegEdit />,
      title: 'Editar usuario'
    },
    {
      name: 'borrar',
      icon:<MdDeleteOutline />,
      title: 'Borrar usuario'
    },
  ];

  return <div className="userPage-container">
    <TableComponent colums={colums} data={data} acciones={acciones} handleActionClick={handleActionClick} />
    <PaginationComponent total={total} page={page} setPage={setPage} limit={limit} />
    <ModalComponent
      isOpen={isOpen}
      onClose={onClose}
      modalContent={modalContent}
      onConfirm={handleConfirm}
    >{ModalContent()}
    </ModalComponent>
  </div>

}

export default Users