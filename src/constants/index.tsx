import {
  TextSelectIcon,
  UserIcon,
  Tags,
  CheckCircle2,
  Redo2,
  XCircle,
} from "lucide-react";

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
  {
    title: "Gán nhãn dữ liệu",
    path: "/dashboard/data",
    icon: <Tags className="size-5" />,
  },
];

const LABEL_OPTIONS: TOptionItem[] = [
  {
    value: " ",
    label: <div className="px-3 py-1">Chọn nhãn</div>,
  },
  {
    value: "Bình thường",
    label: (
      <span className="bg-green-600/10 text-green-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Bình thường
      </span>
    ),
  },
  {
    value: "Tín nhiệm thấp",
    label: (
      <span className="bg-red-600/10 text-red-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Tín nhiệm thấp
      </span>
    ),
  },
];

const TYPE_OPTIONS: TOptionItem[] = [
  {
    value: " ",
    label: <div className="px-3 py-1">Chọn thể loại</div>,
  },
  {
    value: "Báo chí, tin tức",
    label: (
      <span className="bg-blue-600/10 text-blue-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Báo chí, tin tức
      </span>
    ),
  },
  {
    value: "Nội dung khiêu dâm",
    label: (
      <span className="bg-red-600/10 text-red-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Nội dung khiêu dâm
      </span>
    ),
  },
  {
    value: "Cờ bạc, cá độ, vay tín dụng ,lừa đảo",
    label: (
      <span className="bg-indigo-600/10 text-indigo-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Cờ bạc, cá độ, vay tín dụng ,lừa đảo
      </span>
    ),
  },
  {
    value: "Tổ chức (đơn vị nhà nước, trường học)",
    label: (
      <span className="bg-teal-600/10 text-teal-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Tổ chức (đơn vị nhà nước, trường học)
      </span>
    ),
  },
  {
    value: "Chưa xác định",
    label: (
      <span className="bg-slate-200 text-black/70 text-[13px] px-3 py-1 rounded-lg font-bold">
        Chưa xác định
      </span>
    ),
  },
];

const REASON_OPTIONS: TOptionItem[] = [
  {
    value: " ",
    label: <div className="px-3 py-1">Chọn lý do</div>,
  },
  {
    value: "Tên miền bình thường",
    label: (
      <span className="bg-green-600/10 text-green-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Tên miền bình thường
      </span>
    ),
  },
  {
    value: "Meta và tên miền bình thường",
    label: (
      <span className="bg-green-600/10 text-green-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Meta và tên miền bình thường
      </span>
    ),
  },
  {
    value: "Vi phạm: Từ khóa có trong tên miền",
    label: (
      <span className="bg-red-600/10 text-red-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Vi phạm: Từ khóa có trong tên miền
      </span>
    ),
  },
  {
    value: "Vi phạm: Meta web chứa nội dung vi phạm",
    label: (
      <span className="bg-red-600/10 text-red-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Vi phạm: Meta web chứa nội dung vi phạm
      </span>
    ),
  },
  {
    value: "Vi phạm: Nội dung",
    label: (
      <span className="bg-red-600/10 text-red-600 text-[13px] px-3 py-1 rounded-lg font-bold">
        Vi phạm: Nội dung
      </span>
    ),
  },
];

const STATUS_OPTIONS: TOptionItem[] = [
  {
    value: " ",
    label: <div className="px-3 py-1">Chọn trạng thái</div>,
  },
  {
    value: "Hoạt động",
    label: (
      <div className="bg-green-600/10 text-green-600 text-[13px] px-3 py-1 rounded-lg font-bold flex gap-1 justify-center items-center">
        Hoạt động <CheckCircle2 className="inline size-3" />
      </div>
    ),
  },
  {
    value: "Trang redirect",
    label: (
      <div className="bg-yellow-600/10 text-yellow-600 text-[13px] px-3 py-1 rounded-lg font-bold flex gap-1 justify-center items-center">
        Trang redirect <Redo2 className="inline size-3" />
      </div>
    ),
  },
  {
    value: "Không hoạt động",
    label: (
      <div className="bg-red-600/10 text-red-600 text-[13px] px-3 py-1 rounded-lg font-bold flex gap-1 justify-center items-center">
        Không hoạt động <XCircle className="inline size-3" />
      </div>
    ),
  },
];

export {
  ListMenuItem,
  LABEL_OPTIONS,
  REASON_OPTIONS,
  STATUS_OPTIONS,
  TYPE_OPTIONS,
};
