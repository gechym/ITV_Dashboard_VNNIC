import { TextSelectIcon, UserIcon } from "lucide-react";

const ListMenuItem: TMenuItem[] = [
  {
    title: "Quản lý user",
    path: "/dashboard/user",
    icon: <UserIcon className="size-5" />,
  },
  {
    title: "Quản lý domain",
    path: "/dashboard/domain",
    icon: <TextSelectIcon className="size-5" />,
  },
];

export { ListMenuItem };
