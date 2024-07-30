import Image from "next/image";
import ava from "./ava.jpg";
import clsx from "clsx";

export const Profile = ({ className, name, rating, avatar = ava }) => {
  return (
    <div
      className={clsx(
        className,
        "ml-auto text-teal-600  flex items-center gap-2 "
      )}
    >
      <Image
        priority={true}
        src={avatar}
        alt="avatar"
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="overflow-hidden">
        <div className="  text-lg leading-tight text-ellipsis overflow-hidden">
          {name}
        </div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
};
