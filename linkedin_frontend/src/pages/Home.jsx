import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import Feed from "../components/Feed";
import Applicant from "../components/Applicant";
import Company from "../components/Company";
import Search from "../components/Search";
import Notification from "../components/Notification";
import Profile from "../components/Profile";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  const [active, setActive] = useState("home");
  const [isCompany, setIsCompany] = useState(location.state.isCompany);
  console.log(isCompany, location.state.isCompany);

  return (
    <>
      <Nav active={active} setActive={setActive} isCompany={isCompany} />
      <main className="flex w-full  justify-between">
        <LeftPanel />
        {active === "home" && !isCompany ? <Feed /> : ""}
        {active === "home" && isCompany ? <Company /> : ""}
        {active === "applicant" ? <Applicant /> : ""}
        {active === "notification" ? <Notification /> : ""}
        {active === "profile" ? <Profile /> : ""}
        {!isCompany && active !== "profile" && <Search />}
      </main>
    </>
  );
}

export default Home;
