import Header from "@/app/(Base)/Components/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default layout;
