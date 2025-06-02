import { Card } from "@/components/ui/card"
import { HandshakeIcon, BarChart3, Award, Check } from "lucide-react"

export default function ValuesSection() {
    const values = [
        {
            title: "Customer-Centric",
            description: "Every decision is guided by our commitment to customer success.",
            icon: HandshakeIcon,
            iconColor: "text-blue-500",
        },
        {
            title: "Data-Informed",
            description: "We rely on insights and evidence to drive smart decisions.",
            icon: BarChart3,
            iconColor: "text-blue-700",
        },
        {
            title: "Excellence",
            description: "We aim for top quality in everything we do.",
            icon: Award,
            iconColor: "text-red-500",
        },
        {
            title: "Integrity First",
            description: "We operate with honesty, transparency, and trust.",
            icon: Check,
            iconColor: "text-gray-800",
        },
    ]

    return (
        <section className="w-full pt-4 pb-12 md:pt-6 md:pb-16 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <Card key={index} className="overflow-hidden shadow-md">
                            <div className="flex flex-row h-full">
                                <div className="w-1/3 flex items-center justify-center p-4 bg-gray-50">
                                    <value.icon className={`h-16 w-16 ${value.iconColor}`} strokeWidth={1.5} />
                                </div>
                                <div className="w-2/3 p-4">
                                    <h3 className={`text-lg font-medium mb-1 ${value.iconColor}`}>{value.title}</h3>
                                    <p className="text-gray-700 text-sm">{value.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

    )
}
