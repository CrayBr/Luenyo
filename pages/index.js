import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luenyo</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <main id="Trabalhos">
        <header className="main-nav">
            <nav className="logo"><a href="#Trabalhos"><img src="/logoLuenyo.svg" alt="Logo Luenyo"/></a></nav>
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
        <nav id="QuemSomos" className="confQuemSomos">
          <div className="containerQuemSomos">
            <nav className="logoLuenyo"><img src="/logoLuenyo.svg" alt="Logo Luenyo"/></nav>
            <a className="textoQuemSomos">
              A marca a princípio foi criada para trazer entretenimento por meio do youtube.<br/> 
              Mas pela afinidade, a marca começou a trabalhar com o desenvolvimento de flyers 
              e vídeos empresariais. Com isso, veio a Luenyo em cor amarela (descontração, 
              otimismo e alegria) a cor simboliza a felicidade, inspira e desperta a criatividade, 
              estimula as atividades mentais e o raciocínio, vermelho (lembrando "YouTube" 
              e "REC" e o triângulo representa o "Play") ela representa energia e amor,
              e o branco representa cada trabalho realizado, tranquilidade e paz.<br/> 
              Tudo pensado para você!<br/>
              O propósito é criar o que as pessoas sonham, com muita rapidez e qualidade.<br/>
              <br/>
              Quando o cliente diz que gosta dos nossos serviços, é algo indescritível e que 
              melhora o nosso dia. Ações como essa nos incentiva a continuar e inovar 
              cada vez mais. O atributo mais importante da empresa é a rapidez na entrega 
              dos materiais. Além da qualidade e de um atendimento em qualquer hora do día, 
              a empresa se atualiza constantemente e melhora métodos tanto para os seus 
              funcionários como para os seus clientes. Responsabilidade, agilidade e honestidade
              representam bem a empresa.
            </a>
          </div>
        </nav>
        <nav id="Equipe" className="confEquipe">
          <section className="containerEquipe">
              <div className="pessoas">
                  <div className="pessoa">
                      <div className="pessoaImg luen"></div>
                      <span className="pessoaTt">LUENGHEL REDER</span>
                      <span className="pessoaTxt">
                        Fundador da LuenYo.<br/>
                        Com os 14 anos já trabalhava no meio digital e aos 18 anos começou a desenvolver a LuenYo.<br/>
                        <br/>
                        Formado em Publicidade e Propaganda na faculdade UDC.<br/>
                      </span>
                  </div>
                  <div className="pessoa">
                      <div className="pessoaImg milena"></div>
                      <span className="pessoaTt">MILENA MACHADO</span>
                      <span className="pessoaTxt">
                        Diretora de arte.<br/>
                        Entrou na equipe com 19 anos de idade.<br/>
                        <br/>
                        Atualmente está cursando Mídias Digitais na faculdade Uniamérica.
                      </span>
                  </div>
                  <div className="pessoa">
                      <div className="pessoaImg cray"></div>
                      <span className="pessoaTt">CLAUDINEI MIRANDA</span>
                      <span className="pessoaTxt">
                        Editor de video.<br/>
                        Entrou na empresa para promover as suas habilidades e para fazer parte do time LuenYo.<br/>
                        <br/>
                        Estuda em todas as áreas por conta própria e muita dedicação.
                      </span>
                  </div>
              </div>
          </section>
        </nav>
        <nav id="Serviços" className="confServiços">
          <div className="containerServiços">
            <div className="boxServiços">
              <div className="boxServiçosCima">
                <h1 className="TtServiços">Design</h1>
                <la className="TxtServiços">
                  <li>Criação de Flyers</li>
                  <li>Edição de Motion Flyer</li>
                  <li>Edição de Vídeos</li>
                  <li>Criação de Logos</li>
                  <li>Criação de Filtros para Instagram</li>
                  <li>Criação de Figurinhas para Whatsapp</li>
                  <li>Identidade visual</li>
                </la>
              </div>
              <div className="boxServiçosBaixo">
                <h1 className="TtServiços">Gestão em Mídias</h1>
                <la className="TxtServiços">
                  <li>Administração de redes sociais (instagram e facebook)</li>
                </la>
              </div>
            </div>
            <div className="boxServiços2">
              <div className="boxServiçosCima">
                <h1 className="TtServiços">Produção</h1>
                <la className="TxtServiços">
                  <li>Fotografía</li>
                  <li>Filmagem</li>
                </la>
              </div>
              <div className="boxServiçosBaixo">
                <h1 className="TtServiços">Oferecemos</h1>
                <la className="TxtServiços">
                  <li>Serviços Indiviuais</li>
                  <li>Planos mensais</li>
                  <li>Planos por campanha</li>
                </la>
              </div>
            </div>
          </div>
        </nav>
        <nav id="Contato" className="confContato">
          <div className="container50pDireita">
              <input className="boxContato" placeholder="NOME" type="text"></input>
              <input className="boxContato" placeholder="E-MAIL" type="mail"></input>
              <input className="boxContato" placeholder="ASSUNTO" type="text"></input>
              <textarea className="boxContato" placeholder="TEXTO" type="text" rows="8"></textarea>
          </div>
          <div className="container50pEsquerda">
              <p className="txtContato">OU PELO NOSSO WHATSAPP</p>
              <a href="https://api.whatsapp.com/send?phone=595983331831&text=Olá!" target="_blank"><img className="logoWhatsContato" src="/logoWhats.svg" alt="Logo Whatsapp"/></a>
          </div>
        </nav>
        <nav id="Clientes" className="confClientes">
          <div className="logosClientes"><img src="/logosClientes.svg" alt="Logos dos Clientes"/></div>
        </nav>
      </main>
    </div>
  )
  function nav(){
    const nav = document.querySelector('.main-nav');
        nav.classList.toggle('show')
  }
}
