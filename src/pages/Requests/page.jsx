import { act, useEffect, useState } from "react";
import TableComponent from "../../components/Table/page";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import PaginationComponent from "../../components/Pagination/page"
import ModalComponent from "../../components/Modal/page";

import { Input, Button } from '@nextui-org/react'


import { useAuth } from '../../context/AuthContext';
import useRequestHook from "./hook";

//import './style.css'

function Requests() {

  const { user, token } = useAuth();

  const { 
    getRequest, 
    requests, 
    setPage, 
    page, 
    total, 
    limit, 
    createRequestHandle, 
    deleteRequest, 
    getEmpleadosPag, 
    empleadosList 
  } = useRequestHook({ user, token })

  useEffect(() => {
    getRequest()
    getEmpleadosPag()
  }, [page])

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [codigo, setCodigo] = useState('');
  const [resumen, setResumen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [empleado, setEmpleado] = useState(null)

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);


  let data = requests;
  let colums = ['Código', 'Descripción', 'Resumen', 'Empleado', 'Acciones']

  const handleActionClick = (action, user, title, id) => {
    setModalContent({ action, user, title, id });
    onOpen();
  };

  const handleConfirm = () => {
    if (modalContent?.action === 'borrar') {
      deleteRequest(modalContent?.id)
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
      createRequestHandle({ codigo, descripcion, resumen, id_empleado: empleado?.id || 14})
      onClose();

    }

    if (modalContent?.action === 'editar') {

      let data = {};

      if(codigo !== '') data.codigo = codigo
      if(resumen !== '') data.resumen = resumen
      if(descripcion !== '') data.descripcion = descripcion

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
          <span>Aquí puedes editar la información de la solicitud.</span>
          <div className="content-editUser" >
            <form className="form-editUser" onSubmit={handleSubmit}>
              <Input
                type="text"
                label="Código:"
                name="codigo"
                placeholder="Ingrese el código"
                className="custom-input"
                style={{ width: "80%", height: "30px" }}
                labelClassName="custom-label"
                onChange={(e) => setCodigo(e.target.value)}
              />
              <br />
              <Input
                type="text"
                label="Descripción:"
                name="descripcion"
                placeholder="Ingrese una breve descripción"
                className="custom-input"
                style={{ width: "80%", height: "30px" }}
                labelClassName="custom-label"
                onChange={(e) => setDescripcion(e.target.value)}
              />
              <br />
              <Input
                type="resumen"
                label="Resumen:"
                name="resumen"
                placeholder="Ingrese un resumen"
                className="custom-input"
                style={{ width: "80%", height: "30px" }}
                labelClassName="custom-label"
                onChange={(e) => setResumen(e.target.value)}
              />             
              <br />
              <div className="select-item">
              <label htmlFor="empleado" >Empleado:</label>
              <select
                id="empleado_id"
                name="empleado"
                style={{ width: "80%", height: "30px" }}
                onChange={(e) => setEmpleado(e.target.value)}
                value={empleado}
                disabled={action=== 'editar' ? true : false}
              >
                <option value="" disabled>Seleccione el empleado</option>
                {
                  empleadosList.map((e, ind)=>(
                    <option key={ind} value={e.id}>{e.nombre}</option>
                  ))
                }
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
        <div>¿Estás seguro que deseas borrar esta solicitud?</div>
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
      title: 'Editar solicitud'
    },
    {
      name: 'borrar',
      icon:<MdDeleteOutline />,
      title: 'Borrar solicitud'
    },
  ];

  return <div className="">
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

export default Requests