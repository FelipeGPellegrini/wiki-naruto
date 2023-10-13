import './style.css'

const index = ({ Infos }) => {
    return (
        <div>
            <div className='containerName'>
                <h2>{Infos?.name}</h2>
            </div>
            <div className='containerImage'>
                <img src={Infos?.images[0]} alt="" />
            </div>
            <div className='personalInfos'>
                <h3>Data de aniversário: {Infos.personal?.birthdate}</h3>
                <h3>Sexo: {Infos.personal?.sex}</h3>
                <h3>Clan: {Infos.personal.clan?.map((clan, index) => (
                    <span key={clan} className='itemClan'>
                        {clan}
                        {index < Infos.personal?.clan.length - 1 ? ', ' : ''}
                    </span>
                ))}
                </h3>
            </div>
            <div className='containerParents'>
                <h3>Pai: {Infos.family?.father}</h3>
                <h3>Mãe: {Infos.family?.mother}</h3>
            </div>
        </div>
    )
}

export default index