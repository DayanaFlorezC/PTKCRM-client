import { Image } from "@nextui-org/image";

import { useAuth } from '../../context/AuthContext';

import './style.css'

function Perfil() {

  const { user } = useAuth();

  return <div className="profile-container">
    <Image
      width={200}
      alt="NextUI hero Image"
      src="/data_1770095.png"
      style={{ display: 'flex', justifyContent: 'center' }}
    />
    <div className="info-profile">
      <h2>{user.nombre}</h2>
      <span>{user.email}</span>
      <span>Salario: $ {user.salario}</span>
    </div>

  </div>

}

export default Perfil