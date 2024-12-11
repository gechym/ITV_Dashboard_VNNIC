import AppSidebar from "@/components/dashboard/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <main>
        <div className="grid h-screen grid-cols-[auto_1fr] bg-background">
          <AppSidebar />
          <div>{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
}
