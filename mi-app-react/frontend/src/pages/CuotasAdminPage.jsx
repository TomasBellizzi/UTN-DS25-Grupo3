import '../styles/CuotasAdmin.css';
import Header from '../components/Header';
import { useState } from 'react';
import CuotaCard from '../components/CuotaCard';
import { Container, Navbar, Nav, Image, Form, Button } from 'react-bootstrap';
import logo from '../assets/Logo.png';

function CuotasAdminPage() {
  const [filtro, setFiltro] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  const [cuotas, setCuotas] = useState([
    { id: 1, nombre: 'Usuario 1', estado: 'Aprobada', avatar: true },
    { id: 2, nombre: 'Usuario 2', estado: 'Rechazada', avatar: false },
    { id: 3, nombre: 'Usuario 3', estado: 'Pendiente', avatar: false },
    { id: 4, nombre: 'Usuario 4', estado: 'Aprobada', avatar: true },
    { id: 5, nombre: 'Usuario 5', estado: 'Pendiente', avatar: false },
    { id: 6, nombre: 'Usuario 6', estado: 'Aprobada', avatar: false },
    { id: 7, nombre: 'Usuario 7', estado: 'Rechazada', avatar: false },
    { id: 8, nombre: 'Usuario 8', estado: 'Pendiente', avatar: false },
  ]);

  const cambiarEstado = (id, nuevoEstado) => {
    setCuotas(cuotas.map(c =>
      c.id === id ? { ...c, estado: nuevoEstado } : c
    ));
  };

  const cuotasFiltradas = cuotas.filter(c => {
    const coincideEstado = filtro === 'Todas' || c.estado === filtro;
    const coincideBusqueda = c.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideEstado && coincideBusqueda;
    });
  
     return (
    <div className="cuotas-page">
      <Header />
      <div className="cuotas-contenido">
        <h4 className="mb-4">CuotasADMIN</h4>
    
        <div className="filtros">
          <Form.Control
            type="text"
            placeholder="Buscar usuario..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {["Todas", "Aprobada", "Pendiente", "Rechazada"].map((estado) => (
            <Button
              key={estado}
              variant={filtro === estado ? "dark" : "outline-secondary"}
              onClick={() => setFiltro(estado)}
            >
              {estado}
            </Button>
          ))}
        </div>
        
        <div className="tarjetas">
          {cuotasFiltradas.map((cuota) => (
            <CuotaCard
              key={cuota.id}
              cuota={cuota}
              onEstadoChange={cambiarEstado}
            />
          ))}
        </div>
      </div>
    </div>
  );
  
  

}

export default CuotasAdminPage;
