import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ItemListContainer from '../components/ItemListContainer.js/ItemListContainer';
import './Home.css';

function Home() {
  return (
    <>
    <section className='home_container'>
        <div className='banner d-flex flex-column justify-content-center align-items-center py-5 text-center'>
          <h5>DESCUBRI EL MUNDO</h5>
            <h1 className='my-3 animate__fadeInDown'><span>BALAK</span> ADVENTURES</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
               fermentum massa sed diam dignissim, vel accumsan 
               leo cursus. Sed porta.
            </p>
            <Button className='btn_primary mt-4'>DESCUBRE AHORA</Button>
        </div>
        
        <div className='item_list_container my-5 d-flex flex-wrap justify-content-center' id='destiny'>
           <h2>ULTIMOS DESTINOS</h2>
           <ItemListContainer />
        </div>
        <div className='info d-flex flex-column justify-content-center align-items-center text-center'>
            <h1>VISITA SUIZA</h1>
            <Button className='btn_primary my-4'>DESCUBRE AHORA</Button>
            <div className='info-cards d-flex flex-row flex-wrap'>
              <Card style={{ width: '18rem' }} className='mx-5 my-3'>
                <Card.Body className='d-flex justify-content-center align-items-center flex-column text-center'>
                  <Card.Title><i class="fa-solid fa-hotel"></i></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className='mx-5 my-3'>
                <Card.Body className='d-flex justify-content-center align-items-center flex-column text-center'>
                  <Card.Title><i class="fa-solid fa-person-skiing"></i></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', height: '15rem' }} className='mx-5 my-3'>
                <Card.Body className='d-flex justify-content-center align-items-center flex-column text-center'>
                  <Card.Title><i class="fa-solid fa-briefcase"></i></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        </div>
        <div className='slog_description d-flex justify-content-center align-items-center flex-wrap my-5'>
          <h2 className='my-5'>¿POR QUÉ SOMOS DIFERENTES?</h2>
          <div className='icons_promotion d-flex justify-content-center p-3'>
            <div className='d-flex flex-column justify-content-center align-items-center text-center'>
              <i class="fa-solid fa-map-pin"></i>
              <h4 className='my-2'>Catálogo de viajes ampliado</h4>
              <p className='p-4'>
                  Pellentesque posuere nec sem eget venenatis. Pellentesque at pharetra tellus. Cras sagittis purus iaculis tempor ullamcorper. Etiam gravida augue id erat sagittis, 
                  et sollicitudin dui dignissim. Impsun.
              </p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center text-center'>
              <i class="fa-solid fa-dollar-sign"></i>
              <h4 className='my-2'>Low cost asegurado</h4>
              <p className='p-4'>
                  Pellentesque posuere nec sem eget venenatis. Pellentesque at pharetra tellus. Cras sagittis purus iaculis tempor ullamcorper. Etiam gravida augue id erat sagittis, 
                  et sollicitudin dui dignissim. Impsun.
              </p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center text-center'>
              <i class="fa-solid fa-chart-simple"></i>
              <h4 className='my-2'>Tendencia en el mercado</h4>
              <p className='p-4'>
                  Pellentesque posuere nec sem eget venenatis. Pellentesque at pharetra tellus. Cras sagittis purus iaculis tempor ullamcorper. Etiam gravida augue id erat sagittis, 
                  et sollicitudin dui dignissim. Impsun.
              </p>
            </div>        
          </div>
        </div>
        <div className='japan_prom'>
          <div className='discount mx-5 pt-4'>
            <p className='me-3'>30% OFF</p>
            <p>OSAKA/JAPÓN</p>
          </div>
          <div className='discount_desc mx-5 my-5'>
            <h1 className=''>Vive la temporada de los Cerezos</h1>
            <h4>Aprovecha y vive la experiencia por un 30% off</h4>
          </div>
        </div>
        <div className='contact_container d-flex justify-content-center flex-column align-items-center text-center my-5'>
            <h1>Ponte en contacto con nosotros</h1>
            <p>Donec sit amet lectus ac urna vulputate egestas. Nunc eget vestibulum nisl. Morbi ultricies diam in ullamcorper lacinia. Mauris eu aliquam tellus, vitae molestie nulla. Nunc eget vestibulum nisl. Morbi ultricies diam in ullamcorper lacinia</p>
            <Button className='btn_primary'>Contáctanos</Button>
        </div>
        <div className='email_input d-flex text-center justify-content-center align-items-center flex-column'>
          <h2 className='my-5'>SUSCRIBETE AL PORTAL DE NOVEDADES</h2>
          <input type='email' placeholder='Ingresa tu email' />
          <Button className='btn_primary my-3'><i class="fa-solid fa-paper-plane"></i></Button>
        </div>
    </section>
    </>
  )
}

export default Home;