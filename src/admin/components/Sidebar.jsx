import React from "react";
import { Card } from "./Card";
import { Profile } from "./Profile";
import { Footer } from "./Footer";

export const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <aside className="sidebar">
      <Profile />
      <Card activePage={activePage} setActivePage={setActivePage} />
      <Footer />
    </aside>
  );
};
