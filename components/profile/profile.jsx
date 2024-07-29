import Image from "next/image";
import avatar from "./ava.jpg";
import clsx from "clsx";

export const Profile = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "ml-auto text-teal-600  flex items-center gap-2 "
      )}
    >
      <Image
        src={avatar}
        alt="avatar"
        width={48}
        height={48}
        className="rounded-full"
      />
      <div>
        <div className="  text-lg leading-tight">Mezin24</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1234
        </div>
      </div>
    </div>
  );
};
