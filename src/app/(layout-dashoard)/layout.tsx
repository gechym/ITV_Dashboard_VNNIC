import Sidebar from "@/components/dashboard/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="grid h-screen grid-cols-[300px_1fr] bg-background h-screen">
        <Sidebar />
        <div>{children}</div>
      </div>
    </main>
  );
}
