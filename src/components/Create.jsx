import { useFormik } from "formik";
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { useDeportesContext } from '../context/DeportesContext';

const Create = () => {
  

  const { deportes, addDeporte } = useDeportesContext();

  const formik = useFormik({
    initialValues: {
      titulo: "",
      descripcion: "",
      categoria: "",
      nombre: "",
      imagen: "",
      urlsitio: "",

    },
    validationSchema:Yup.object({
      titulo:Yup.string()
      .required('Ingrese el titulo del deporte')
      .max(20,"Maximo 20 caracteres")
      .min(3,'Minimo 3 caracteres'),

       descripcion:Yup.string()
      .required('Información referente al deporte')
      .max(200,"Maximo 200 caracteres")
      .min(50,'Minimo 50 caracteres'),

      categoria:Yup.string()
      .required('Ingrese la categoria correspondiente al deporte'),
      
      nombre:Yup.string()
      .required('Ingrese el nombre del equipo')
      .max(15,"Maximo 15 caracteres")
      .min(3,'Minimo 3 caracteres'),

      imagen:Yup.string()
      .required('Ingrese la url de la imagen del deporte')
      .max(300,"Maximo 300 caracteres")
      .min(10,'Minimo 10 caracteres'),

    }),

    onSubmit: (values) => {
     
        const { titulo, descripcion, categoria, nombre, imagen, urlsitio } = values
        const newDeporte = {
          id: deportes.length + 1,
          titulo,
          descripcion,
          categoria,
          equipo:{ nombre, urlsitio },
          imagen
        };
      addDeporte(newDeporte);
      formik.resetForm();
      Swal.fire({
        icon: 'success',
        title: 'Card agregada correctamente!',
        showConfirmButton: false,
        timer: 1500
      })

    },
  });

  return (
    <div className="container mt-4">
      <div  class="btn btn-info">
          <h2 >AGREGAR UN NUEVO DEPORTE</h2>
      </div>
    <br /><br />
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.titulo}
          />
          {formik.errors.titulo && <div><small style={{color:"#005056"}}><em>{formik.errors.titulo}</em></small></div>}
        </div>
        <div className="mb-3">
          
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.descripcion}
          />
          {formik.errors.descripcion && <div><small style={{color:"#005056"}}><em>{formik.errors.descripcion}</em></small></div>}
        </div>
        <div className="mb-3">
          
          <label htmlFor="categoria" className="form-label">Categoría</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.categoria}
          />
          {formik.errors.categoria && <div><small style={{color:"#005056"}}><em>{formik.errors.categoria}</em></small></div>}
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Equipo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.nombre}
          />
          {formik.errors.nombre && <div><small style={{color:"#005056"}}><em>{formik.errors.nombre}</em></small></div>}
        </div>
        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">URL de la Foto del Deporte</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.imagen}
          />
          {formik.errors.imagen && <div><small style={{color:"#005056"}}><em>{formik.errors.imagen}</em></small></div>}
        </div>
       
          <div className="mb-3" >
            <label htmlFor='urlsitio' className="form-label">URL del Equipo</label>
            <input
              type="text"
              id='urlsitio'
              name='urlsitio'
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.urlsitio}
            />
          </div>
        
        <button type="submit" className="btn btn-success">Agregar Deporte</button>
      </form>
    </div>
  );
}

export default Create;