"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const diff = new Date(targetDate).getTime() - Date.now()
    if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 }
    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate])

  return (
    <div className="flex items-center gap-1">
      <TimeBlock value={timeLeft.hours} label="HRS" />
      <span className="text-xs font-bold text-sale">:</span>
      <TimeBlock value={timeLeft.minutes} label="MIN" />
      <span className="text-xs font-bold text-sale">:</span>
      <TimeBlock value={timeLeft.seconds} label="SEC" />
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
