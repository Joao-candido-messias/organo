import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.5) }}>
            <input value={time.cor} type='color' className='input-cor' onChange={evento => mudarCor(evento.target.value, time.id)}/>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) =>{
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar = {aoDeletar} aoFavoritar={aoFavoritar}/>

                })}
            </div>
        </section>

    )
}

export default Time