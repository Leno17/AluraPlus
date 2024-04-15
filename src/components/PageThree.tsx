import Telas from '../img/Telas.png'

function PageThree() {
  return ( 
    <div className="pg2__container">
      <div className='pg3__text'>
        <h3 className='pg3__desc'>Só o Combo+ oferece Alura+ e Alura Língua juntos para você ter acesso a<br/> cursos de diversas áreas da tecnologia e aprender inglês ou espanhol, onde e<br/> como quiser.</h3>
        <a href='www.alura.com.br' className='pg3__btn'>Assine o Combo+</a>
      </div>
        <img src={Telas} className='Telas'></img>
      
    </div>
   );
}

export default PageThree;