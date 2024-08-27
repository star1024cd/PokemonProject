import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../pages/Dex";
import { Button, Card } from "./Style";

function PokemonCard({ pokemon, isSelected }) {
  const { addPokemon, removePokemon } = useContext(PokemonContext);

  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/pokemonDetail/${pokemon.id}`);
      }}
    >
      <img src={pokemon.img_url} alt={"pokemon.korean_name"} />
      <p>{pokemon.korean_name}</p>
      <p>No.{pokemon.id}</p>

      {isSelected ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            removePokemon(pokemon);
          }}
        >
          해제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            addPokemon(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
