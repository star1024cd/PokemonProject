import React from "react";
import styled from "styled-components";
import { Card } from "./PokemonCard";
import { Button } from "./PokemonCard";
import { useNavigate } from "react-router-dom";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(221, 221, 221);
  margin-bottom: 20px;
  border-radius: 10px;

  h2 {
    font-size: 50px;
    margin-bottom: 15px;
    margin-top: 0px;
  }
`;

const DashDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
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
                  onRemovePokemon(pokemon.id);
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
