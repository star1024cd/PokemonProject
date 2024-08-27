import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../pages/Dex";
import { Button, Card, DashboardContainer, DashDetail } from "./Style";

const Dashboard = () => {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);
  const navigate = useNavigate();
  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <DashDetail>
          {selectedPokemon.map((pokemon) => (
            <Card
              key={pokemon.id}
              onClick={() => {
                navigate(`/pokemonDetail/${pokemon.id}`);
              }}
            >
              <img src={pokemon.img_url} alt={"pokemon.korean_name"} />
              <p>{pokemon.korean_name}</p>
              <p>No.{pokemon.id}</p>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  removePokemon(pokemon.id);
                }}
              >
                삭제
              </Button>
            </Card>
          ))}
        </DashDetail>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
