import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";

export const BackLink = () => {
  return (
    <Link
      href="#"
      className="text-teal-600 flex items-center gap-2 text-xl leading-tight"
    >
      <ArrowLeftIcon />
      На главную
    </Link>
  );
};
