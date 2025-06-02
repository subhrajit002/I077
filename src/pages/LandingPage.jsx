import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Truck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Tags,
  Megaphone,
} from "lucide-react"
import { Link } from "react-router-dom";

export default function SupplyChainLanding() {
  return (
    <div className="flex flex-col min-h-screen">



      <main className="flex-1">

        <section className=" w-full pt-6 pb-12 md:pt-12 md:pb-24 lg:py-15 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">

                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Optimize Your Supply Chain with <span className="text-blue-600">risposta</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Transform your logistics operations with real-time visibility, predictive analytics, and automated
                    workflows.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <img
                    alt="Supply Chain Dashboard"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                    height={400}
                    width={600}
                    src="https://sloanreview.mit.edu/wp-content/uploads/2020/04/GEN-Simchi-Levy-Global-Supply-Chain-Recovery-1290x860-1.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="features" className="w-full py-12 md:py-24 lg:py-3 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Complete Supply Chain Visibility</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empower your supply chain with intelligent planning, dynamic pricing, smart promotions, and efficient fulfillment.
                </p>
              </div>
            </div>

            <div className="mx-auto grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle>Demand Forecasting</CardTitle>
                  <CardDescription>
                    Predict demand using historical data and AI to avoid stockouts and overstocking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> AI-based analysis</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Inventory planning</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Sales trend detection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-2">
                    <Tags className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>Pricing</CardTitle>
                  <CardDescription>
                    Optimize pricing with real-time data and competitor insights to stay profitable and competitive.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Dynamic pricing</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Margin control</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Competitive analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-2">
                    <Megaphone className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle>Promotion & Ads</CardTitle>
                  <CardDescription>
                    Plan campaigns, track how they’re doing, and get better results using smart tools.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Campaign planning</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Channel optimization</li>
                  </ul>
                </CardContent>
              </Card>



              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                    <Truck className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Fulfillment</CardTitle>
                  <CardDescription>
                    Ensure accurate and timely delivery with streamlined order processing and logistics tools.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Warehouse management</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Order tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Delivery updates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Supply Chain?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Multiple of companies already optimizing their operations with risposta Software.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                  <Button type="submit" variant="secondary">
                    Get Started
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      

    </div>
  )
}
