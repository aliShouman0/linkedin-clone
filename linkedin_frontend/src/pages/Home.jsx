import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import LeftPanel from "../components/LeftPanel";

function Home() {
  const [active, setActive] = useState("home");

  return (
    <>
      <Nav active={active} setActive={setActive}/>
      <main className="flex w-full h-full">
        <LeftPanel/>
      </main>
    </>
  );
}

export default Home;
