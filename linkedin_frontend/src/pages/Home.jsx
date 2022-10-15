import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";

function Home() {
  const [active, setActive] = useState("home");

  return (
    <>
      <Nav active={active} setActive={setActive}/>
    </>
  );
}

export default Home;
