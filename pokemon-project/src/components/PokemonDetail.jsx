import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mok";
import { styled } from "styled-components";

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(240, 240, 240);
  img,
  h2,
  p,
  button {
    position: relative;
    margin: 5px;
  }
`;

const TypeImg = styled.img`
  width: 30px;
  border-radius: 3px;
`;

const pokemonType = (type) => {
  switch (type) {
    case "풀":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-27-56-88558-1674109676.png";
    case "불꽃":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-17-38-47338-1674109058.png";
    case "물":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-18-51-74356-1674109131.png";
    case "독":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-30-07-49159-1674109807.png";
    case "비행":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-34-30-92371-1674110070.png";
    case "벌레":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-35-59-10085-1674110159.png";
    case "노말":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-15-37-94188-1674108937.png";
    case "전기":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-28-29-69185-1674109709.png";
    case "땅":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-30-35-54553-1674109835.png";
    case "에스퍼":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-35-15-16439-1674110115.png";
    case "얼음":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-28-59-69426-1674109739.png";
    case "바위":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-39-54-28241-1674110394.png";
    case "페어리":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-43-04-50070-1674110584.png";
    case "격투":
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-29-33-26367-1674109773.png";
    default:
      return "https://data1.pokemonkorea.co.kr/newdata/2023/01/2023-01-19_15-15-37-94188-1674108937.png";
  }
};

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
      {/* <p>타입: {pokemon.types.join(", ")}</p> */}
      <div key={pokemon.id}>
        {/* {console.log(pokemon.types[0])} */}
        {pokemon.types.map((type) => (
          <TypeImg src={pokemonType(type)} />
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
