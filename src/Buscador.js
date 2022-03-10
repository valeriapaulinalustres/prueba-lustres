import React, { Component, Fragment } from 'react';




class Buscador extends Component {

    busquedaRef = React.createRef();

    buscarSesion = (e) => {
        e.preventDefault();
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino)
    }

    render() {

        return (
            <Fragment>

                <form onSubmit={this.buscarSesion}>
                    <div className='row' >
                        <div className='form-group col-md-8'>
                            <input type="text" placeholder="ingrese su búsqueda" ref={this.busquedaRef} className="form-control form-control-lg"></input>

                        </div>
                        <div className='form-group col-md-4'>
                            <input type="submit" value="Buscar" className='btn btn-lg btn-danger btn-block'></input>

                        </div>
                    </div>






                </form>
                {/*recibe prop desde App
                <p>{this.props.mensaje}</p>*/}

            </Fragment>

        )
    }
}
export default Buscador;