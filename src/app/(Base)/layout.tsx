import Header from "@/app/(Base)/Components/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const layout = ({ children, modal }: Props) => {
  return (
    <section>
      <Header />
      {children}
      {modal}
    </section>
  );
};

export default layout;
