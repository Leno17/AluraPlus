import aluraLogo from '../img/AluraLogo.png'

function HomePage() {
  return (
      <div className='cnt1'>
        <div>
          <h1 className='mainText'>Com o Combo+, você pode aproveitar a Alura+ <br></br> e o Alura Língua por um preço único.</h1>
          <img src={aluraLogo} className='aluraImg'></img>
          <a href='www.alura.com.br' className='botao__container'>Assine por 12x de R$ 120,00*</a>
          <a href='www.alura.com.br' className='botao__container2'>Assine por 12x de R$ 120,00*</a>
          <p className='disclaimer'>*O preço pode variar caso a assinatura seja feita em outros planos.</p>
        </div>
        
      </div>
   );
}

export default HomePage;