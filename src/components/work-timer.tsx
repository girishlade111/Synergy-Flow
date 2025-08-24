"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Clock, Play, Pause, RefreshCw } from "lucide-react";

const WORK_DURATION = 25 * 60; // 25 minutes in seconds

export default function WorkTimer() {
  const [timeLeft, setTimeLeft] = React.useState(WORK_DURATION);
  const [isActive, setIsActive] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    if (timeLeft === 0) {
      setIsActive(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(WORK_DURATION);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  if (!isClient) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Clock className="h-5 w-5" />
          <span className="sr-only">Work Block Timer</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Work Block Timer</h4>
            <p className="text-sm text-muted-foreground">
              Focus on your tasks for a set period.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg bg-muted">
            <div className="text-6xl font-bold font-mono tabular-nums">
              {formatTime(timeLeft)}
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={toggleTimer} size="lg" className="w-32">
                {isActive ? (
                  <Pause className="mr-2 h-5 w-5" />
                ) : (
                  <Play className="mr-2 h-5 w-5" />
                )}
                {isActive ? "Pause" : "Start"}
              </Button>
              <Button onClick={resetTimer} variant="secondary" size="icon">
                <RefreshCw className="h-5 w-5" />
                <span className="sr-only">Reset Timer</span>
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
