"use client";
import { ChevronUp, LogOut, Moon, Sun, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export function FooterSidebar({
  username,
  avatar,
}: {
  username?: string;
  avatar?: string;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
              <SidebarMenuButton className="h-[60px] flex items-center gap-3 hover:bg-accent rounded-md transition-colors">
                <Avatar className="h-7 w-7">
                  <AvatarImage
                    src={avatar ?? "https://github.com/shadcn.png"}
                    alt="Avatar"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0">
                  <p className="text-sm font-medium leading-none truncate">
                    {username ?? "Siêu nhân"}
                  </p>
                  <p className="text-xs text-muted-foreground">Staff</p>
                </div>
                <ChevronUp className="ml-auto h-4 w-4 text-muted-foreground shrink-0" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Moon /> : <Sun />}
                <span>Change {theme === "dark" ? "light" : "dark"}</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User2 className="mr-2 h-4 w-4" />
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
