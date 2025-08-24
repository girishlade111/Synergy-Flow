"use client";

import * as React from "react";
import ChannelView from "@/components/channel-view";
import { channels } from "@/lib/data";
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const channelId = searchParams.get('channel') || channels[0].id;
  
  const selectedChannel = React.useMemo(
    () => channels.find((c) => c.id === channelId),
    [channelId]
  );

  return (
    <>
      {selectedChannel ? (
        <ChannelView key={selectedChannel.id} channel={selectedChannel} />
      ) : (
        <div className="flex h-full items-center justify-center bg-muted">
          <p>Select a channel to start</p>
        </div>
      )}
    </>
  );
}
