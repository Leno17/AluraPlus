import Notebook from '../img/Notebook.png'

function PageFour() {
  return ( 
    <div className="pg2__container">
      <div>
        <img src={Notebook}></img>
      </div>
      <div className='pg2__text'>
        <h1 className='pg__h1'>Baixe seus cursos</h1>
        <h3>Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet.</h3>
      </div>
    </div>
   );
}

export default PageFour;