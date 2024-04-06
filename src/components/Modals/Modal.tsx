import React from "react";
import { CloseModalButton } from "./CloseModalButton";

interface Props {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-white">
        <CloseModalButton />
        {children}
      </div>
    </dialog>
  );
};
