import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../pages/Dex";
import { ListContainer } from "./Style";

const PokemonList = () => {
  const { addPokemon, pokemonList } = useContext(PokemonContext);
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={{
            id: pokemon.id,
            korean_name: pokemon.korean_name,
            img_url: pokemon.img_url,
          }}
          onAdd={() => {
            addPokemon(pokemon);
          }}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
