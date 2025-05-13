import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-[#0a1930] text-white py-2 text-center text-sm">
        Our highest yielding opportunity to-date is live now on Stake Saudi!
        <Link href="/invest" className="text-green-400 ml-1 hover:underline">
          Invest now
        </Link>
      </div>

      {/* Navigation */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-[#0a1930]">
              stake
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Investments</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center gap-1">
                <span>Automation</span>
                <span className="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded">NEW</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Visa Programs</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Sell</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Learn</span>
                <ChevronDown size={16} />
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>English</span>
              <ChevronDown size={16} />
            </div>
            <Button variant="outline" className="hidden md:inline-flex">
              Login
            </Button>
            <Button className="bg-[#0a1930] hover:bg-[#152a4a]">Sign up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm mb-6">
              <span className="h-2 w-2 bg-green-400 rounded-full"></span>
              <span>10.1% average investor returns in 2024</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1930] mb-6">
              Build your wealth <br />
              through <span className="text-green-400">real estate</span>
            </h1>

            <p className="text-gray-700 mb-8 max-w-lg">
              Thousands of investors all over the world are using Stake to access income generating real estate deals in
              high growth markets, from only AED 500
            </p>

            <div className="flex gap-4">
              <Link href="https://apps.apple.com" target="_blank">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-10"
                />
              </Link>
              <Link href="https://play.google.com" target="_blank">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-10"
                />
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Stake App Screenshots"
              width={500}
              height={600}
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>

        {/* Featured Section */}
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-500 mb-8">We've been featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Forbes", "CNN", "Bloomberg", "TechCrunch", "Arab News", "TIME"].map((brand) => (
              <div key={brand} className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-xl font-bold">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
