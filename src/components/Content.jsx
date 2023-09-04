import { useState } from "react";
import { useDeportesContext } from '../context/DeportesContext';

const Content = () => {
  const { deportes } = useDeportesContext();  
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");

  const deportesFiltrados =  filtroCategoria === "Todos"
    ? deportes
    : deportes.filter(deporte => deporte.categoria === filtroCategoria);

  return (
    <div>
      <div className="mb-3" align="right">
        <label>Filtrar por Categoría:</label>
        <span>   </span>
    
        <select
          id="filtroCategoria"
          className="form-select form-select-lg"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Mesa">Mesa</option>
          <option value="Equipos">Equipos</option>
          <option value="Carreras">Carreras</option>
        </select>
      </div>
      <div class="container">
      <div className="row">
        {deportesFiltrados.map((deporte) => (
          <div class="col-sm-4" key={deporte.id}>
            <div className="card" id="targ">
            

              
              <img src={deporte.imagen} alt={`Imagen de ${deporte.titulo}`} className="img-fluid" style={{maxWidth:"100%", maxHeight:"33%"}}/>
              
              <div className="card-body">
                <h5 className="card-title">{deporte.titulo}</h5>
                <p className="card-text">{deporte.descripcion}</p>
                <p className="card-text"><strong>Categoría:</strong> {deporte.categoria}</p>
                <p className="card-text"><strong>Equipo:</strong></p>
                    <p >
                      {deporte.equipo.nombre}
                    <br />     
                    <a href={deporte.equipo.urlsitio} target="_blank" rel="noopener noreferrer">
                        {deporte.equipo.urlsitio}
                    </a>
                    </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Content;