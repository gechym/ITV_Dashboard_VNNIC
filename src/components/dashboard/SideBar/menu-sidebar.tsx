"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ListMenuItem } from "@/constants";
import Link from "next/link";

export function SidebarMenuItems() {
  return (
    <SidebarGroup>
      <SidebarGroupContent
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="pb-4"
      >
        <SidebarMenu>
          {ListMenuItem.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="hover:bg-primary/10 hover:text-primary p-5 mb-2"
              >
                <Link href={item.path}>
                  {item.icon}
                  <span className="text-[16px]">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
