import { useState } from "react";
import Content from "./Content";
import Create from "./Create";
import Overview from "./Overview";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMedal } from '@fortawesome/free-solid-svg-icons';


const Contenedor = () => {
  const [ubiComponente, setubiComponente] = useState(0);

  const handleButtonClick = (index) => {
    setubiComponente(index);
  };

  return (
  <div style={{padding:"60px"}}>  
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" ><FontAwesomeIcon icon={faMedal} /></a>
     
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={() => handleButtonClick(0)}>Overview</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={() => handleButtonClick(1)}>Content</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={() => handleButtonClick(2)}>Create</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="p-3">
      {ubiComponente === 0 && <Overview />}
      {ubiComponente === 1 && <Content />}
      {ubiComponente === 2 && <Create />}
  </div>
  </div>


  );
}

export default Contenedor;