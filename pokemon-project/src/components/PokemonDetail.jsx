import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mok";
import { DetailDiv, TypeImg } from "./Style";
import PokemonType from "./PokemonType";

function PokemonDetail() {
  const params = useParams();
  const pokemonId = Number(params.id);
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }
  return (
    <DetailDiv>
      <img src={pokemon.img_url} alt={pokemon.korean_name} width={"150px"} />
      <h2>{pokemon.korean_name}</h2>
      <div key={pokemon.id}>
        {pokemon.types.map((type) => (
          <TypeImg src={PokemonType(type)} />
        ))}
      </div>
      <p>{pokemon.description}</p>
      <button
        onClick={() => {
          goBack();
        }}
      >
        뒤로 가기
      </button>
    </DetailDiv>
  );
}

export default PokemonDetail;
