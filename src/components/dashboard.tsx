"use client";

import * as React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  Tooltip,
} from "@/components/ui/tooltip";
import { LayoutGrid, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SidebarContentComponent from "@/components/sidebar-content";
import UserProfile from "@/components/user-profile";
import type { Channel } from "@/lib/types";
import { channels } from "@/lib/data";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [selectedChannelId, setSelectedChannelId] = React.useState<string>(
    channels[0].id
  );
  
  const handleSelectChannel = React.useCallback((channel: Channel) => {
    setSelectedChannelId(channel.id);
  }, []);

  return (
    <SidebarProvider>
      <Sidebar
        variant="inset"
        className="border-r"
      >
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-2 flex items-center justify-center">
              <LayoutGrid className="text-primary-foreground h-6 w-6" />
            </div>
            <h1 className="text-xl font-semibold">SynergyFlow</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarContentComponent
            channels={channels}
            selectedChannelId={selectedChannelId}
            onSelectChannel={handleSelectChannel}
          />
        </SidebarContent>
        <Separator />
        <SidebarFooter>
          <UserProfile />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
