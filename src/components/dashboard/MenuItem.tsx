import Link from "next/link";
import React from "react";

const MenuItem = ({ title, icon, path }: TMenuItem) => {
  return (
    <li className="p-2 mb-2 hover:bg-primary/10 hover:text-primary rounded-md cursor-pointer">
      <Link href={path} className="flex items-center gap-2 block">
        {icon}
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
