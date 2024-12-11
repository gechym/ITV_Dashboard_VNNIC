import { ListOrderedIcon, UserIcon } from "lucide-react";

const ListMenuItem: TMenuItem[] = [
  {
    title: "Doanh mục 1",
    path: "/user",
    icon: <UserIcon className="size-4" />,
  },
  {
    title: "Doanh muc 2",
    path: "/order",
    icon: <ListOrderedIcon className="size-4" />,
  },
];

export { ListMenuItem };
