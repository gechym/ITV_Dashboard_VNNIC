import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const invoices = [
    {
        a: "INV001",
        b: "Paid",
        c: "$250.00",
        d: "Credit Card",
        e: "zxczxczxc",
    },
    {
        a: "INV001",
        b: "Paid",
        c: "$250.00",
        d: "Credit Card",
        e: "zxczxczxc",
    },
];

export default function UserTable() {
    return (
        <div>
            <Table>
                <TableCaption>Danh sách user</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">ID User</TableHead>
                        <TableHead className="font-bold">Tên Đăng Nhập</TableHead>
                        <TableHead className="font-bold">Mật Khẩu</TableHead>
                        <TableHead className="font-bold">Họ và Tên</TableHead>
                        <TableHead className="font-bold">Quyền Hạn</TableHead>
                        <TableHead></TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.a}>
                            <TableCell className="font-medium">{invoice.a}</TableCell>
                            <TableCell>{invoice.b}</TableCell>
                            <TableCell>{invoice.c}</TableCell>
                            <TableCell>{invoice.d}</TableCell>
                            <TableCell>{invoice.e}</TableCell>
                            <TableCell>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-blue-500 rounded"
                                >
                                    Edit
                                </button>
                            </TableCell>
                            <TableCell>
                                <button
                                    type="button"
                                    className="px-4 py-2 text-white bg-red-500 rounded"
                                >
                                    Delete
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Floating "Thêm User" button */}
            <button
                type="submit"
                className="fixed bottom-4 right-4 px-4 py-2 text-white bg-green-500 rounded shadow-lg"
            >
                Thêm User
            </button>
        </div>
    );
}
