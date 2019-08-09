import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Cita extends Component {

   eliminarCita = () => {
      this.props.borrarCita(this.props.info.id);
   }

   render() {
      const { mascota, propietario, fecha, hora, sintomas } = this.props.info;

      return (
         <div className="media mt-3">
            <div className="media-body">
               <h3 className="mt-0">{mascota}</h3>
               <p className="card-text"><span>Nombre del Dueño: </span>{propietario}</p>
               <p className="card-text"><span>Fecha: </span>{fecha}</p>
               <p className="card-text"><span>Hora: </span>{hora}</p>
               <p className="card-text"><span>Sintomas: </span></p>
               <p className="card-text">{sintomas}</p>
               <button className="btn btn-danger" onClick={this.eliminarCita}>Eliminar</button>
            </div>
         </div>
      )
   }
}

Cita.propTypes = {
   borrarCita: PropTypes.func.isRequired,
   info: PropTypes.shape({
      fecha: PropTypes.string.isRequired,
      hora: PropTypes.string.isRequired,
      mascota: PropTypes.string.isRequired,
      propietario: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
   })
}
