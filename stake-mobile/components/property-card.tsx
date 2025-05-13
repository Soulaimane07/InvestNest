import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface PropertyCardProps {
  title: string
  location: string
  price: string
  returnRate: string
  imageUrl: string
}

export function PropertyCard({ title, location, price, returnRate, imageUrl }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-2 left-2 bg-white rounded-full px-3 py-1 text-xs flex items-center gap-1">
          <span className="h-2 w-2 bg-green-400 rounded-full"></span>
          <span>{location}</span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-semibold">{price}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Annual Return</p>
            <p className="font-semibold text-green-500">{returnRate}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
