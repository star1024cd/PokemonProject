import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeStyle = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNLjj6d6WkCuS_wHY4BE9raoHGKE-X29B6Q&s");
  /* https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/tcg/sun-moon-cosmic-eclipse-01.mp4 */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 10px;
  border-radius: 5px;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeStyle>
      <h1>포켓몬 도감</h1>
      <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
    </HomeStyle>
  );
}

export default Home;
