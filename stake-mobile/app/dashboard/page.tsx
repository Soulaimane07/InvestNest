import { PropertyCard } from "@/components/property-card"
import { PortfolioWidget } from "@/components/portfolio-widget"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  // Sample property data
  const properties = [
    {
      id: 1,
      title: "2 Bed Studio One Tower",
      location: "Dubai",
      price: "AED 1,234,000",
      returnRate: "+8.4%",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Boulevard Point Downtown",
      location: "Dubai",
      price: "AED 2,450,000",
      returnRate: "+10.4%",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Marina Arcade",
      location: "Dubai",
      price: "AED 1,850,000",
      returnRate: "+9.2%",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <PortfolioWidget />
        </div>
        <div>
          <Button className="w-full mb-3 bg-[#0a1930] hover:bg-[#152a4a]">Deposit</Button>
          <Button variant="outline" className="w-full">
            Withdraw
          </Button>
        </div>
      </div>

      <Tabs defaultValue="available" className="mb-8">
        <TabsList>
          <TabsTrigger value="available">Available Properties</TabsTrigger>
          <TabsTrigger value="my-investments">My Investments</TabsTrigger>
          <TabsTrigger value="funds">Funds</TabsTrigger>
        </TabsList>
        <TabsContent value="available" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my-investments">
          <p className="text-center py-8 text-gray-500">Your investment portfolio will appear here</p>
        </TabsContent>
        <TabsContent value="funds">
          <p className="text-center py-8 text-gray-500">Available funds will appear here</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
