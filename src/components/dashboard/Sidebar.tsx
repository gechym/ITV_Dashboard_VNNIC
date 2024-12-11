import React from "react";
import { ListMenuItem } from "@/constants";
import MenuItem from "./MenuItem";
import { ModeToggle } from "../toggle-theme";

const Sidebar = () => {
  return (
    <div className="relative border-muted border-r-2 p-5 h-screen">
      <h1 className="font-bold text-3xl text-primary mb-10">Study with me</h1>
      <ul className="pl-6">
        {ListMenuItem.map((item, index) => {
          return <MenuItem key={index} {...item} />;
        })}
      </ul>

      {/* ModeToggle at bottom-right */}
      <div className="absolute bottom-5 right-5">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
