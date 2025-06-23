import type React from "react";
import { HashLink } from "react-router-hash-link";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <HashLink
      className="rounded-md bg-amber-500 px-10 py-2 hover:bg-red-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      to={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </HashLink>
  );
};

export default ActionButton;
