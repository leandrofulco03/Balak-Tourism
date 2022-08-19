import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className='footer pt-5'>
      <div className='terms'>
      <div className='balak_section me-5 mt-3'>
          <h3>Balak</h3>
          <a href='#about'><p>Sobre Nosotros</p></a>
          <a href='#about'><p>Destinos</p></a>
          <a href='#about'><p>Blog</p></a>
          <a href='#about'><p>Referencias</p></a>
        </div>
        <div className='info_section mx-5 mt-3'>
          <h3>Información</h3>
          <a href='#about'><p>Ayuda</p></a>
          <a href='#about'><p>Contact</p></a>
          <a href='#about'><p>Políticas y Privacidad</p></a>
          <a href='#about'><p>Términos y Condiciones</p></a>
        </div>
        <div className='social_media_section mt-3'>
          <h3>Redes Sociales</h3>
          <ul className='d-flex'>
            <li><a href='#facebook'><i class="fa-brands fa-facebook"></i></a></li>
            <li className='mx-3'><a href='#twitter'><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href='#instagram'><i class="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
        <div className='text-center mt-5'>
          <h6>Ⓒ 2022 Balak Todos los derechos reservados</h6>
        </div>
    </section>
  )
}

export default Footer;