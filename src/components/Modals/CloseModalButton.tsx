import { useRouter } from "next/navigation";

export const CloseModalButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
    >
      ✕
    </button>
  );
};
