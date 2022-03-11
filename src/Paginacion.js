import React from 'react';

const Paginacion = (props) =>{
    return(
        <div className='py-3 d-flex justify-content-center'>
            <button onClick={props.paginaAnterior} type='button' className='btn btn-info m-2'>Anterior &larr;</button>
            <button onClick={props.paginaSiguiente} type='button' className='btn btn-info m-2'>Siguiente &rarr;</button>
        </div>
    )

}
export default Paginacion;