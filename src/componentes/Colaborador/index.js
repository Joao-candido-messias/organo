import Time from '../Time';
import './colaborador.css'
import { IoCloseCircle } from "react-icons/io5";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {

    return (<div className="colaborador">
        <IoCloseCircle size={25} className='deletar' onClick={() => aoDeletar(colaborador.id)}/>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador