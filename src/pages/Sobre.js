import "../styles/Sobre.css";
import Tabs from "../components/Tabs";
import Logo from "../assets/logo.png";

function Sobre(){
  return(
    <div>
      <div className="sobretitle">
        <h1>O que é a Liga Brasileira de Xadrez Feminino (LBXF)?</h1>
      </div>
      <div className="descricao">
        <div className="sobretexto">
          <p>A <span className="sobredestaque">LBXF</span> nasce em 2013 como uma Comunidade do Facebook dedicada a
          <span className="sobredestaque2"> divulgar</span>, <span className="sobredestaque2">promover</span> e
          <span className="sobredestaque2"> agregar </span> as mulheres enxadristas e envolvidas com xadrez no Brasil.
          Atualmente conta com <span className="sobredestaque2"> 263 participantes </span> (Atualização 04/02/2023).</p>
        </div>
        <div>
          <img src={Logo} alt='' />
        </div>
      </div>
      <div>
        <Tabs/>
      </div>
    </div>
  )

}

export default Sobre;