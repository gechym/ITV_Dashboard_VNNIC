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
        a: "domain 1",
        b: "abc",
        c: "$250.00",
        d: "Credit Card",
        e: "zxczxczxc",
        f: "domain 1",
        g: "Paid",
        h: "$250.00",
        i: "Credit Card",
        j: "zxczxczxc",
        k: "Credit Card",
        l: "zxczxczxc",
    },
    {
        a: "domain 1",
        b: "zxc",
        c: "$250.00",
        d: "Credit Card",
        e: "zxczxczxc",
        f: "domain 1",
        g: "Paid",
        h: "$250.00",
        i: "Credit Card",
        j: "zxczxczxc",
        k: "Credit Card",
        l: "zxczxczxc",
    },
];


export default function UserTable() {
    return (
        <div>
            <Table>
                <TableCaption>Danh sách user</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Tên miền</TableHead>
                        <TableHead className="font-bold">Nhãn</TableHead>
                        <TableHead className="font-bold">Thể loại trang web</TableHead>
                        <TableHead className="font-bold">Entropy</TableHead>
                        <TableHead className="font-bold">Tỉ lệ chữ số</TableHead>
                        <TableHead className="font-bold">Độ dài</TableHead>
                        <TableHead className="font-bold">Kí tự đặc biệt</TableHead>
                        <TableHead className="font-bold">Chứa từ nhạy cảm</TableHead>
                        <TableHead className="font-bold">Meta-data</TableHead>
                        <TableHead className="font-bold">Tên miền chính thống</TableHead>
                        <TableHead className="font-bold">Ghi chú</TableHead>
                        <TableHead className="font-bold">Last update</TableHead>
                        <TableHead></TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.a}>
                            <TableCell>{invoice.a}</TableCell>
                            <TableCell className="p-2">
                                <span
                                    className={`inline-block px-1 rounded-lg ${invoice.b === 'abc'
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {invoice.b}
                                </span>
                            </TableCell>



                            <TableCell>{invoice.c}</TableCell>
                            <TableCell>{invoice.d}</TableCell>
                            <TableCell>{invoice.e}</TableCell>
                            <TableCell>{invoice.f}</TableCell>
                            <TableCell>{invoice.g}</TableCell>
                            <TableCell>{invoice.h}</TableCell>
                            <TableCell>{invoice.i}</TableCell>
                            <TableCell>{invoice.j}</TableCell>
                            <TableCell>{invoice.k}</TableCell>
                            <TableCell>{invoice.l}</TableCell>
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
