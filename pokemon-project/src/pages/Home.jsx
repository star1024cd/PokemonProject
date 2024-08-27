import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HomeStyle } from "../components/Style";

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
