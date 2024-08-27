import React, { createContext, useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mok";
import Swal from "sweetalert2";
import { MainContainer } from "../components/Style";

export const PokemonContext = createContext();

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const addPokemon = (pokemon) => {
    setSelectedPokemon((prevSelectedPokemon) => {
      const existPokemon = prevSelectedPokemon.some(
        (poke) => poke.id === pokemon.id
      );

      if (existPokemon) {
        Swal.fire({
          title: "Error!",
          text: "대시보드에 이미 존재하는 포켓몬입니다.",
          icon: "error",
          confirmButtonText: "Cool",
        });
        return prevSelectedPokemon;
      }

      if (prevSelectedPokemon.length >= 6) {
        Swal.fire({
          title: "Error!",
          text: "최대 6마리까지 추가할 수 있습니다.",
          icon: "error",
          confirmButtonText: "Cool",
        });
        return prevSelectedPokemon;
      }

      Swal.fire("추가완료!😎");
      return [...prevSelectedPokemon, pokemon];
    });
  };

  const removePokemon = (id) => {
    Swal.fire({
      title: "진짜로 삭제하시나요?",
      showCancelButton: true,
      cancelButtonText: "취소",
      confirmButtonText: "삭제",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setSelectedPokemon(selectedPokemon.filter((poke) => poke.id !== id));
        Swal.fire("삭제완료!", "", "success");
      }
    });
  };
  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        addPokemon,
        removePokemon,
        pokemonList: MOCK_DATA,
      }}
    >
      <MainContainer>
        <Dashboard />
        <PokemonList />
      </MainContainer>
    </PokemonContext.Provider>
  );
}

export default Dex;
