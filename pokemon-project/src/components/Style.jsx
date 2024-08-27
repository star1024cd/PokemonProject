import React from "react";
import styled from "styled-components";

// Dex.jsx
export const MainContainer = styled.div`
  font-size: 62.5%;
  box-sizing: border-box;
`;
// Home.jsx
export const HomeStyle = styled.div`
  background-color: rgb(255, 190, 59);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

// Dashboard.jsx
export const DashboardContainer = styled.div`
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

export const DashDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

// PokemonDetail.jsx
export const DetailDiv = styled.div`
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

export const TypeImg = styled.img`
  width: 30px;
  border-radius: 3px;
`;

// PokemonList
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(221, 221, 221);
  padding: 20px;
  border-radius: 10px;
`;

// PokemonCard

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
