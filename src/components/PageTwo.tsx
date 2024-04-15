import Plataforma from '../img/Plataformas.png'

function PageTwo() {
  return ( 
    <div className='pg2__container'>
      <div>
        <img src={Plataforma}></img>
      </div>
      <div className='pg2__text'>
        <h1 className='pg__h1'>Assista do seu jeito</h1>
        <h3>Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros<br/> aparelhos. Nossa seleção de cursos não para de crescer. </h3>
      </div>
      
    </div>
   );
}

export default PageTwo;