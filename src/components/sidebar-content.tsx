"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Home,
  Users,
  Folder,
  Settings,
  PlusCircle,
  Hash,
} from "lucide-react";
import type { Channel } from "@/lib/types";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarContentProps {
  channels: Channel[];
  selectedChannelId: string | null;
  onSelectChannel: (channel: Channel) => void;
}

export default function SidebarContentComponent({
  channels,
  selectedChannelId,
  onSelectChannel,
}: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4">
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" passHref>
              <SidebarMenuButton tooltip="Home" isActive={pathname === '/'}>
                <Home />
                Home
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/team" passHref>
              <SidebarMenuButton tooltip="Team" isActive={pathname === '/team'}>
                <Users />
                Team
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/projects" passHref>
              <SidebarMenuButton tooltip="Projects" isActive={pathname === '/projects'}>
                <Folder />
                Projects
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/settings" passHref>
              <SidebarMenuButton tooltip="Settings" isActive={pathname === '/settings'}>
                <Settings />
                Settings
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Channels</SidebarGroupLabel>
        <SidebarMenu>
          {channels.map((channel) => (
            <SidebarMenuItem key={channel.id}>
              <Link href={`/?channel=${channel.id}`} passHref>
                <SidebarMenuButton
                  onClick={() => onSelectChannel(channel)}
                  isActive={selectedChannelId === channel.id && pathname === '/'}
                  tooltip={channel.name}
                >
                  <Hash />
                  {channel.name}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton variant="outline">
              <PlusCircle />
              Create Channel
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </div>
  );
}
