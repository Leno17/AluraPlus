import aluraLogo from '../img/Logo.png'

function Footer() {
  return ( 
    <div className='footer__container'>
      <img src={aluraLogo} alt='AluraLogo' className='aluraLogo'></img>
      <ul className="list1">
        <li>
          <a href="www.alura.com.br" className="listItem1">Idioma</a>
        </li>
        <li>
          <a href="www.alura.com.br" className="listItem1">Dispositivos compatíveis</a>
        </li>
        <li>
          <a href="www.alura.com.br" className="listItem1">Contrato de assinatura</a>
        </li>
        <li>
          <a href="www.alura.com.br" className="listItem1">Politica de privacidade</a>
        </li>
        <li>
          <a href="www.alura.com.br" className="listItem1">Proteção de dados no Brasil</a>
        </li>
        <li>
          <a href="www.alura.com.br" className="listItem1">Anuncios personalizados</a>
        </li>
        <li>
          <a href="www.alura.com.br" className="listItem1">Ajuda</a>
        </li>
      </ul>
      <h4>® 2021 Alura, Alura+ e Alura Língua. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.</h4>
      <h4 className='finalDesc'>Alura+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Alura+ é comercializado por Aovs Sistemas de Informática S.A., Rua Vergueiro, 3185 - Liberdade, São Paulo - SP, 04101-300, Brasil e CNPJ 05.555.382/0001-33</h4>
    </div>
   );
}

export default Footer