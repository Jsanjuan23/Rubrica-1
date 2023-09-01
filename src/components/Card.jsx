import PropTypes from 'prop-types';

const Card = (props) => {
  const { titulo, imagen, cuerpo, isDestacada, onClicEstrella } = props;

  return (
    
    <div class="col-sm-3">
        <div class="card" id="targ">
        <div className="card-header">
          <h2>{titulo}</h2>
        </div>
        <div className="card-body">
          <img src={imagen} class="img-fluid" />
        </div>
        <div className="card-body">
          <p className="card-text">{cuerpo}</p>
        </div>
        <div className="card-footer mt-auto">
          <button
            onClick={onClicEstrella}
            className={`btn ${isDestacada ? 'btn-warning' : 'btn-outline-secondary'}`}
          >
            <span role="img" aria-label="Estrella">{isDestacada ? '⭐️' : '☆'}</span>{' '}
            {isDestacada ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
          </button>
        </div>
      </div>
    </div>
    
    
  );
};

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  cuerpo: PropTypes.string.isRequired,
  isDestacada: PropTypes.bool.isRequired,
  onClicEstrella: PropTypes.func.isRequired,
};

export default Card;
