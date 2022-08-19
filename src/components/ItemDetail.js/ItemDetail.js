import React from 'react';
import { Button, FloatingLabel, Form, Modal, Card } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

function ItemDetail({item}) {
  const [show, setShow] = useState(false);
  const [option, setOption] = useState();
  const [optionTwo, setOptionTwo] = useState();
  const [success, setSuccess] = useState();
  const [date, setDate] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(<div className='success_form'>
                <h1>Reserva Exitosa!</h1>
                <h4>Cantidad de adultos</h4>
                <p>{option}</p>
                <h4>Cantidad de niños</h4>
                <p>{optionTwo}</p>
                <h4>Inicio de viaje</h4>
                <p>{date}</p>
                <h5>${item.price}</h5>
              </div>)
  }

  return (
    <section className='detail_container' key={item.id}>
        <div className='detail_banner mb-5'>
            <img src={item.image} alt='paris' style={{width: '100%', height: '600px'}} />
            <h1 className='detail_title'>{item.title}</h1>
        </div>
        <div className='container detail_description d-flex my-5'>
          <div className='prom_image'>
            <img src={item.promImage} alt='madrid' />
          </div>
          <div className='prom_description mx-4 my-5'>
            <h3>{item.promTitle}</h3>
            <h4>{item.promSubTitle}</h4>
            <h1 className='mt-4'>${item.price}</h1>
            <p className='my-3'>{item.description}</p>
            <h4 className='my-3'>Días disponibles: {item.days}</h4>
            
            <Button className='btn_primary' onClick={handleShow}>Reservar Ahora</Button>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        {success ? (
                <Card className='card_success'>
                  <div className='card_body'>
                    <div className='bg_plane'>
                      <i class="fa-solid fa-plane-departure"></i>
                    </div>
                    <div className='form_div'>
                      {success}
                      <Link to={'/'}><Button className='btn_primary'>Finalizar</Button></Link>
                    </div>
                  </div>           
              </Card>
              ) : (
                <div>
            <Modal.Header closeButton>
                    <Modal.Title>Formulario de Reserva</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingInput" label="Elegir Fecha" className="mb-3">
                    <Form.Control type="date" id="start" name="trip-start" min="2018-01-01" max="2022-12-31" value={date} onChange={(e) => setDate(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Adultos (Cantidad maxima 10)" className="mb-3">
                    <Form.Select value={option} onChange={(e) => setOption(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Niños (Cantidad maxima 10)" className="mb-3">
                <Form.Select value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Form.Select>
                </FloatingLabel>
                <div className='d-flex flex-wrap justify-content-around'>
                    <Button className='btn_primary' type='submit'>Completar Reserva</Button>
                    <h4>Total ${item.price}</h4>
                </div>
              </form>
            </Modal.Body>
            </div>
              )}
        </Modal>
    </section>
  )
}

export default ItemDetail;