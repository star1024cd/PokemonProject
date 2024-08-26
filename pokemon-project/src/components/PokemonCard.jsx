import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
  }
`;
export const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: rgb(171, 171, 171);
  color: rgb(255, 255, 255);
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgb(227, 50, 50);
  }
`;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
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
            onRemove(pokemon);
          }}
        >
          해제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
