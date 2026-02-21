"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

function getTimeLeft(targetDate: string) {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 }
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate))
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const display = timeLeft ?? { hours: 0, minutes: 0, seconds: 0 }

  return (
    <div className="flex items-center gap-1">
      <TimeBlock value={display.hours} label="HRS" />
      <span className="text-xs font-bold text-foreground">:</span>
      <TimeBlock value={display.minutes} label="MIN" />
      <span className="text-xs font-bold text-foreground">:</span>
      <TimeBlock value={display.seconds} label="SEC" />
    </div>
  )
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded bg-secondary px-2 py-1">
      <span className="text-sm font-bold tabular-nums text-foreground">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] uppercase text-muted-foreground">{label}</span>
    </div>
  )
}
