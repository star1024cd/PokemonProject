import React from "react";
import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [goldMedal, setGoldmedal] = useState("0");
  const [silverMedal, setSilverMedal] = useState("0");
  const [bronzeMedal, setBronzeMedal] = useState("0");

  //추가
  const add = (e) => {
    const findCountry = countries.find((data) => {
      return data.country === country;
    });

    if (findCountry) {
      alert("이미 등록된 국가입니다!");
      return;
    }

    if (country.trim() === "") {
      alert("국가 이름을 입력해주세요!");
      return;
    }

    const newContries = {
      country: country,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
      id: Math.floor(Math.random() * 100),
    };

    const newContriesArr = [...countries, newContries];

    setCountries(newContriesArr.sort((a, b) => b.goldMedal - a.goldMedal));
    setCountry("");
    setGoldmedal("0");
    setSilverMedal("0");
    setBronzeMedal("0");
    alert("추가완료");

    console.log(newContriesArr);
  };

  //업데이트
  const update = (e) => {
    const findCountry = countries.find((data) => {
      return data.country === country;
    });

    if (!findCountry) {
      alert("먼저 국가를 추가해주세요");
      return;
    }

    const updateArr = countries.map((b) =>
      b.country === country
        ? {
            ...b,
            country: country,
            goldMedal: goldMedal,
            silverMedal: silverMedal,
            bronzeMedal: bronzeMedal,
          }
        : b
    );

    setCountries(updateArr.sort((a, b) => b.goldMedal - a.goldMedal));
    setCountry("");
    setGoldmedal("0");
    setSilverMedal("0");
    setBronzeMedal("0");
    alert("수정되었습니다.");
  };

  //삭제
  const deleteCountry = (id) => {
    setCountries(countries.filter((it) => it.id !== id));
    alert("삭제완료");
  };

  const inputCountry = (e) => {
    setCountry(e.target.value);
  };
  const inputGold = (e) => {
    setGoldmedal(e.target.value);
  };
  const inputSilver = (e) => {
    setSilverMedal(e.target.value);
  };
  const inputBronze = (e) => {
    setBronzeMedal(e.target.value);
  };

  return (
    <>
      <div>
        <header>올림픽</header>
        <div className="inputContainer">
          <div>
            <label>국가</label>
            <input type="text" onChange={inputCountry} value={country} />
          </div>
          <div>
            <label>금메달</label>
            <input type="text" onChange={inputGold} value={goldMedal} />
          </div>
          <div>
            <label>은메달</label>
            <input type="text" onChange={inputSilver} value={silverMedal} />
          </div>
          <div>
            <label>동메달</label>
            <input type="text" onChange={inputBronze} value={bronzeMedal} />
          </div>
          <div>
            <button onClick={add}>국가추가</button>
            <button onClick={update}>업데이트</button>
          </div>
        </div>
        <table className="medalList">
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((item) => (
              <tr key={item.id}>
                <td>{item.country}</td>
                <td>{item.goldMedal}</td>
                <td>{item.silverMedal}</td>
                <td>{item.bronzeMedal}</td>
                <td>
                  <button onClick={() => deleteCountry(item.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
