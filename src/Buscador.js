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

                <form className='container' onSubmit={this.buscarSesion}>
                    <div className='d-flex flex-row justify-content-center' >


                        <div className='form-group col-md-10 m-2'>
                            <input type="text" placeholder="ingrese su búsqueda" ref={this.busquedaRef} className="m-2 form-control form-control-lg"></input>

                        </div>
                        <div className='form-group col-md-2 m-2 '>
                            <input type="submit" value="Buscar" className='m-2 btn btn-lg btn-danger align-items-center'></input>

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