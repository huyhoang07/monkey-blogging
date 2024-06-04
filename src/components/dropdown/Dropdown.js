import React from "react";
import { DropDownProvider } from "./dropdown-context";

const Dropdown = ({ children, ...props }) => {
  return (
    <DropDownProvider {...props}>
      <div className="relative inline-block w-full">{children}</div>
    </DropDownProvider>
  );
};

export default Dropdown;