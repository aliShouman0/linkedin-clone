import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import Feed from "../components/Feed";
import Search from "../components/Search";
import Notification from "../components/Notification";
import Profile from "../components/Profile";

function Home() {
  const [active, setActive] = useState("home");

  return (
    <>
      <Nav active={active} setActive={setActive} />
      <main className="flex w-full  justify-between">
        <LeftPanel />
        {active === "home" ? <Feed /> : ""}
        {active === "notification" ? <Notification /> : ""}
        {active === "profile" ? <Profile /> : ""}

        <Search />
      </main>
    </>
  );
}

export default Home;
