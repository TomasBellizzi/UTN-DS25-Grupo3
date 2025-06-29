import Header from '../components/Header';
import '../styles/HomePage.css';
import { Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

function HomePage() {
  const opciones = [
    { texto: 'Cuotas', ruta: '/cuotas-admin' },
    { texto: 'Canchas', ruta: '/canchas' },
    { texto: 'Eventos', ruta: '/eventos' },
    { texto: 'Actividades', ruta: '/actividades' },
  ];

  return (
    <div>
      <Header />
      <div className="home-triangle"></div>

      <div className="home-container">
        <h3 className="home-title">Home</h3>

        <Row className="g-3">
          {opciones.map(opcion => (
            <Col key={opcion.texto} xs={12}>
              <div className="home-card">
                <strong>{opcion.texto}</strong>
                <Button variant="dark" className="rounded-circle" href={opcion.ruta}>
                  <ArrowRight size={20} />
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
