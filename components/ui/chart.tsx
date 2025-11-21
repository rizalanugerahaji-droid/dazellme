"use client"

import * as React from "react"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

export type ChartConfig = {
  label: string
  color: string
}

export function ChartContainer({ children }: { children: React.ReactElement }) {
  return <div className="w-full h-[300px]">{children}</div>
}

export function ChartTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border bg-white px-3 py-2 shadow-md">
        <p className="text-sm font-medium">{payload[0].payload.name}</p>
        <p className="text-sm text-pink-600">{payload[0].value} sales</p>
      </div>
    )
  }
  return null
}

export function ChartTooltipContent({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="text-xs">
      <p className="font-medium">{label}</p>
      <p className="text-pink-500">{value}</p>
    </div>
  )
}

// ✅ Tambahkan komponen Chart
const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 200 },
  { name: "Mei", sales: 600 },
]

export function Chart() {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltip />} />
          <Line type="monotone" dataKey="sales" stroke="#ec4899" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
