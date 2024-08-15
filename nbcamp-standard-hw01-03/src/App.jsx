import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Status from "./components/Status";
import Counter from "./components/Counter";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const title = "카운트 연습";
  const year = 2050;

  return (
    <div>
      <Header title={title} />
      <div>
        <Counter count={count} />
        <Content increment={increment} />
      </div>
      <Status count={count} />
      <Footer year={year} />
    </div>
  );
}

export default App;
