import PropTypes from 'prop-types';

const Card = (props) => {
  const { titulo, imagen, cuerpo, isDestacada, onClicEstrella } = props;

  return (
    
    <div class="col-sm-3">
        <div class="card" id="targ">

              <div className="card-header" style={{backgroundColor:"#005056"}}>
                <h3>{titulo}</h3>
              </div>
        
        <div className="card-body">
          <img src={imagen} class="img-fluid" />
        </div>
        <div className="card-body" aling="center">
          <p className="card-text" >{cuerpo} </p>
          <button onClick={onClicEstrella}
            className={`btn ${isDestacada ? 'btn-warning' : 'btn-outline-secondary'}`}>
            <span role="img" aria-label="Estrella">{isDestacada ? '⭐️' : '☆'}</span>{' '}
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

