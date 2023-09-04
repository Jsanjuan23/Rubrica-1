import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGoogle, FaTiktok} from 'react-icons/fa';

const Pie = () => {

    return (
<div>

<footer class="text-center text-lg-start bg-white text-muted">

  
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="container text-center text-md-start mt-5">
    
      <div class="row mt-3">
     
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Website Links
          </h6>
          <p>
            Mapa de sitios
          </p>
          <p>Terminos y Condiciones de uso del sitio</p>
          <p>Aviso de Privacidad</p>
          <p>Politica de Privacidad</p>
          <p>Sobre Garnier</p>

        </div>
      
       
      
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
   
          <h6 class="text-uppercase fw-bold mb-4">
            Siguenos
          </h6>
   
          <div>
            <p><FaFacebook/></p>
            <p><FaTwitter /></p>
            <p><FaInstagram /></p>
            <p><FaGoogle /></p>
            <p><FaTiktok /></p>
          </div>
 

        </div>
    
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">Servicio Al Cliente</h6>
          <p>Para más información acerca de nuestros servicios llama de lunes a viernes de 8:00am a 5:00pm al 3022629900</p>
          <p>servicios@gmail.com</p>
        </div>
       
      </div>
   
    </div>
  </section>


  <div class="text-center p-3" style={{backgroundColor: "#005056"}}>
    
  <p  style={{color:"white"}}><strong>© 2023 Copyright Jesus Sanjuan & Yeinsón Diaz</strong></p>
  </div>
 
</footer>

</div>
    );
}

export default Pie;