"use client";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";

interface Props {
  link: string;
}

export const CloseModalButton = ({ link }: Props) => {
  return (
    <Link
      href={link}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
    >
      ✕
    </Link>
  );
};
