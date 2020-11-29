import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luenyo</title>
      </Head>
      <main id="Trabalhos">
        <header className="main-nav">
            <div className="logo"><img src="/logoLuenyo.svg" alt="Logo Luenyo"/></div>
            <ul className="nav-links">
                <li><a href="#Trabalhos">Trabalhos</a></li>
                <li><a href="#QuemSomos">Quem Somos</a></li>
                <li><a href="#Equipe">Equipe</a></li>
                <li><a href="#Serviços">Serviços</a></li>
                <li><a href="#Contato">Contato</a></li>
                <li><a href="#Clientes">Clientes</a></li>
          </ul>
          <div onClick={nav} className="burger">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
          </div>
        </header>
        <nav className="carrossel">
          <div className="box">
              <span className="celular"><img src="/01_cel.svg" alt="Celular"/></span>
              <span className="celular"><img src="/02_cel.svg" alt="Celular"/></span>
              <span className="celular"><img src="/03_cel.svg" alt="Celular"/></span>
              <span className="celular"><img src="/04_cel.svg" alt="Celular"/></span>
              <span className="celular"><img src="/05_cel.svg" alt="Celular"/></span>
              <span className="celular"><img src="/06_cel.svg" alt="Celular"/></span>
              <span className="celular"><img src="/07_cel.svg" alt="Celular"/></span>
              <span className="celular"><img src="/08_cel.svg" alt="Celular"/></span>
          </div>
        </nav>
        <nav id="Contato" className="vw">
          teste
        </nav>
      </main>
    </div>
  )
  function nav(){
    const nav = document.querySelector('.main-nav');
        nav.classList.toggle('show')
  }
}
