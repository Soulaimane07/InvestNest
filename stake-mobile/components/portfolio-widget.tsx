"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

export function PortfolioWidget() {
  const [portfolioValue, setPortfolioValue] = useState(306500)
  const [targetValue, setTargetValue] = useState(500000)
  const progress = (portfolioValue / targetValue) * 100

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Portfolio Value</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-3xl font-bold">AED {portfolioValue.toLocaleString()}</span>
          <span className="text-sm text-green-500">+12.4%</span>
        </div>

        <Progress value={progress} className="h-2 mb-2" />

        <div className="flex justify-between text-sm text-gray-500">
          <span>Target: AED {targetValue.toLocaleString()}</span>
          <span>{progress.toFixed(0)}%</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="text-sm text-gray-500">Invested</div>
            <div className="font-medium">AED 250,000</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Returns</div>
            <div className="font-medium">AED 56,500</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Properties</div>
            <div className="font-medium">8</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
