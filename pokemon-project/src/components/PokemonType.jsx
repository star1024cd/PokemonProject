import React from "react";

const PokemonType = (type) => {
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

export default PokemonType;
