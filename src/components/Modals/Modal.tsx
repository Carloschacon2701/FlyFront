import React from "react";
import { CloseModalButton } from "./CloseModalButton";

interface Props {
  children: React.ReactNode;
  link: string;
}

export const Modal = ({ children, link }: Props) => {
  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-white">
        <CloseModalButton link={link} />
        {children}
      </div>
    </dialog>
  );
};
