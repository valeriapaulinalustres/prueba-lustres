
import React, { Component, Fragment } from 'react';
import './bootswatch.css';
import Buscador from './Buscador';
import Resultado from './Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.arriba');
    elemento.scrollIntoView('smooth','start');
  }

  paginaAnterior = () =>{
//leer state de página actual
let pagina = this.state.pagina;
//si la página es uno no restar
if (pagina === 1) return null;
//restar uno a la página actual
pagina --
//agregar el cambio al state
this.setState({pagina},
  () => {
    this.consultarApi();
    this.scroll();
  }
  
  );
//probar
console.log(pagina)

  }
  paginaSiguiente = () =>{
    //leer state de página actual
    let pagina = this.state.pagina;
    //sumar uno a la página actual
    pagina ++
    //agregar el cambio al state
    this.setState({pagina},
      () => {
        this.consultarApi();
        this.scroll();
      }
      );
    //probar
    console.log(pagina)

  }




  consultarApi = () => {
    const imagenesPorPagina = 10;
    const key = '26064192-0694e3873a08214aeb73bf20d';
    const terminoBusqueda = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&per_page=${imagenesPorPagina}&page=${pagina}`;

    //console.log(url)

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));

  }




  datosBusqueda = (termino) => {
    console.log(termino);
    this.setState(
      {
        termino : termino,
        pagina : 1
      },//agrega al state el término y ejecuta la función
      () => { this.consultarApi() }
    )
  }


  render() {
    return (
      <div className='app container arriba'>
        
        <div className='jumbotron'>
          
        <p className='lead text-center'>Buscador de imágenes</p>
          <Buscador
            //envía prop desde App a Buscador
            //mensaje = "envía prop de App a Buscador";
            datosBusqueda={this.datosBusqueda}

          />
        </div>

        <div className='row justify-content-center'>
          <Resultado

            imagenes={this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}
          />
        </div>

        {/*para probar que funciona lo que se ingresa en el input de buscador, viaja a app, cambia el estado y se imprime acá */}
        {/*this.state.termino*/}
      </div>

    )
  }
}


export default App;
