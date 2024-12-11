"use client";

import { Sidebar, SidebarContent, useSidebar } from "@/components/ui/sidebar";
import { SidebarHeader } from "@/components/dashboard/SideBar/header-sidebar";
import { SidebarMenuItems } from "@/components/dashboard/SideBar/menu-sidebar";
import { FooterSidebar } from "@/components/dashboard/SideBar/footer-sidebar";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent
        onClick={() => {
          toggleSidebar();
        }}
      >
        <SidebarHeader />
        <SidebarMenuItems />
      </SidebarContent>
      <FooterSidebar />
    </Sidebar>
  );
}
