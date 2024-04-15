import pc from '../img/computador.png'
import tv from '../img/tv.png'
import celular from '../img/celular.png'


function PageFive() {
  return ( 
    <div>
      <h1 className="pg5__header">Disponível nos seus dispositivos favoritos</h1>
      <ul className="pg5__container">
        <li>
          <img src={tv} className='pg5__img'></img>
          <p className='itemDesc'>TV</p>
        </li>
        <li>
          <img src={pc} className='pg5__img'></img>
          <p className='itemDesc'>Computadores</p>
        </li>
        <li>
          <img src={celular} className='pg5__img'></img>
          <p className='itemDesc'>Celulares e tablets</p>
        </li>
      </ul>
    </div>
   );
}

export default PageFive;