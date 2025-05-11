import './style.css';
import { Link } from 'react-router-dom';

const Index = ({ Infos }) => {
  return (
    <div className='containerInfos'>
      <div className='card'>
        <h2 className='characterName'>{Infos?.name}</h2>

        {Infos?.profile_image && (
          <div className='imageWrapper'>
            <img src={Infos.profile_image} alt={`Foto de ${Infos.name}`} className='characterImage' />
          </div>
        )}

        <div className='infoSection'>
          <h3>Resumo</h3>
          <p>{Infos.summary || "Sem descrição disponível."}</p>
        </div>

        <div className='infoSection'>
          <h3>Informações Básicas</h3>
          <p><strong>Vila:</strong> {Infos.village?.name || "Desconhecida"}</p>
          <p><strong>Rank:</strong> {Infos.rank || "Desconhecido"}</p>
          <p><strong>Poder:</strong> {Infos.power || "Desconhecido"}</p>
        </div>

        <div className='infoSection'>
          <h3>Família</h3>
          <p><strong>Pai:</strong> {Infos.father || "Não informado"}</p>
          <p><strong>Mãe:</strong> {Infos.mother || "Não informado"}</p>
        </div>

        <div className='infoSection'>
          <h3>Jutsus Conhecidos</h3>
          {Infos.jutsus && Infos.jutsus.length > 0 ? (
            <ul>
              {Infos.jutsus.map((jutsu) => (
                <li key={jutsu.id}>
                  <strong>{jutsu.name}</strong> — {jutsu.description} (Poder: {jutsu.power})
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum jutsu listado.</p>
          )}
        </div>

        <Link className='btnLink' to="/">🔙 Nova Pesquisa</Link>
      </div>
    </div>
  );
};

export default Index;
