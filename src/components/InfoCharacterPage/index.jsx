import './style.css'
import { Link } from 'react-router-dom'


const index = ({ Infos }) => {

    return (
        <div className='containerInfos'>
            <div className='containerName'>
                <h2>{Infos?.name}</h2>
            </div>
            <div className='containerImage'>
                <img src={Infos?.images[0]} alt="" />
            </div>
            <div className='personalInfos'>
                <h3>Data de aniversário: {Infos.personal?.birthdate}</h3>
                <h3>Sexo: {Infos.personal?.sex}</h3>
                {Infos.personal.clan && (
                    <div>
                        {Array.isArray(Infos.personal.clan) ? (
                            <h3 className='itemClan'>Clans: {Infos.personal.clan.join(', ')}</h3>
                        ) : (
                            <h3 className='itemClan'>Clan: {Infos.personal.clan}</h3>
                        )}
                    </div> )}
            </div>
            <div className='containerParents'>
                {Infos.family?.father ? <h3>Pai: {Infos.family?.father}</h3> : null}
                {Infos.family?.mother ? <h3>Mãe: {Infos.family?.mother}</h3> : null}
            </div>
            <Link className='btnLink' to="/">Fazer um nova pesquisa</Link>
        </div>
    )
}

export default index