import React, { Component } from 'react'
import '../scss/agregarCitas.scss';
import PropTypes from 'prop-types'
import uuid from 'uuid';

const stateInicial = {
   cita: {
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
   },
   error: false
}

export default class AgregarCita extends Component {

   state = { ...stateInicial }

   handleChange = (e) => {
      e.preventDefault();

      this.setState({
         cita: {
            ...this.state.cita,
            [e.target.name]: e.target.value
         }
      })
   }

   handleSubmit = (e) => {
      e.preventDefault();

      const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

      if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
         this.setState({
            error: true
         });

         return;
      }

      const nuevaCita = { ...this.state.cita };
      nuevaCita.id = uuid();

      this.props.crearCita(nuevaCita);

      this.setState({
         ...stateInicial
      });
   }

   render() {

      const { error } = this.state;

      return (
         <div className="card mt-5">
            <div className="card-body">
               <h2 className="card-title text-center mb-5">Agregar las citas aquí</h2>

               {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}

               <form onSubmit={this.handleSubmit}>
                  <div className="form-group row">
                     <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                     <div className="col-sm-8 col-lg-10">
                        <input type="text" name="mascota" onChange={this.handleChange} value={this.state.cita.mascota} className="form-control" placeholder="Nombre Mascota" />
                     </div>
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                     <div className="col-sm-8 col-lg-10">
                        <input type="text" name="propietario" onChange={this.handleChange} value={this.state.cita.propietario} className="form-control" placeholder="Nombre Dueño de la Mascota" />
                     </div>
                  </div>

                  <div className="form-group row">
                     <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                     <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                        <input type="date" name="fecha" onChange={this.handleChange} value={this.state.cita.fecha} className="form-control" />
                     </div>

                     <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                     <div className="col-sm-8 col-lg-4">
                        <input type="time" name="hora" onChange={this.handleChange} value={this.state.cita.hora} className="form-control" />
                     </div>
                  </div>

                  <div className="form-group row">
                     <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                     <div className="col-sm-8 col-lg-10">
                        <textarea name="sintomas" onChange={this.handleChange} value={this.state.cita.sintomas} className="form-control"></textarea>
                     </div>
                  </div>
                  <div className="form-group row justify-content-end">
                     <div className="col-sm-3">
                        <button type="submit" className="btn btn-success w-100">Agregar</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      )
   }
}

AgregarCita.propTypes = {
   crearCita: PropTypes.func.isRequired
}
