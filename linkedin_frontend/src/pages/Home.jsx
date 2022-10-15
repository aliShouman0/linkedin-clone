import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import Feed from "../components/Feed";
import Search from "../components/Search";

function Home() {
  const [active, setActive] = useState("home");

  return (
    <>
      <Nav active={active} setActive={setActive} />
      <main className="flex w-full h-screen justify-between">
        <LeftPanel />
        <Feed />
        <Search />
      </main>
    </>
  );
}

export default Home;
