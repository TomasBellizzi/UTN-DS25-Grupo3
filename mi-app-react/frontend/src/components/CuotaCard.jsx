import '../styles/CuotaCard.css';
import { Button, Badge, Image } from 'react-bootstrap';
import avatarDefault from '../assets/react.svg'; // Cambialo por el que quieras

function CuotaCard({ cuota, onEstadoChange }) {
  const estadoColor = {
    Aprobada: 'success',
    Rechazada: 'danger',
    Pendiente: 'secondary',
  };

    return (
    <div className="cuota-card">
      <div className="usuario">
        <Image
          src={cuota.avatar ? avatarDefault : 'https://via.placeholder.com/40x40.png?text=A'}
          alt="avatar"
        />
        <strong>{cuota.nombre}</strong>
      </div>
    
      <Badge bg={estadoColor[cuota.estado]}>{cuota.estado}</Badge>
    
      {cuota.estado === 'Pendiente' && (
        <div className="acciones">
          <Button variant="success" onClick={() => onEstadoChange(cuota.id, 'Aprobada')}>
            Aprobar
          </Button>
          <Button variant="danger" onClick={() => onEstadoChange(cuota.id, 'Rechazada')}>
            Rechazar
          </Button>
        </div>
      )}
    </div>
  );

}

export default CuotaCard;
