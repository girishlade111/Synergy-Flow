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
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LayoutGrid, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SidebarContentComponent from "@/components/sidebar-content";
import ChannelView from "@/components/channel-view";
import UserProfile from "@/components/user-profile";
import type { Channel } from "@/lib/types";
import { channels } from "@/lib/data";

export default function Dashboard() {
  const [selectedChannel, setSelectedChannel] = React.useState<Channel>(
    channels[0]
  );

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
            selectedChannel={selectedChannel}
            onSelectChannel={setSelectedChannel}
          />
        </SidebarContent>
        <Separator />
        <SidebarFooter>
          <UserProfile />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        {selectedChannel ? (
          <ChannelView key={selectedChannel.id} channel={selectedChannel} />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted">
            <p>Select a channel to start</p>
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
