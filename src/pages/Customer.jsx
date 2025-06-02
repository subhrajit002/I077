"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Users,
    Shield,
    BookOpen,
    MessageCircle,
    Phone,
    MonitorDot,
    HandshakeIcon
} from "lucide-react"
import logo from "../assets/buyer_images/11.jpg"
import ValuesSection from "./Values"
export default function CustomerSuccessPage() {


    return (
        <div className="flex flex-col min-h-screenv ">

            <section className="w-full py-0">
                <img
                    src={logo}
                    alt="Banner"
                    className="w-full h-auto object-cover"
                />
            </section>

            <section className="w-full py-12 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <p className="text-gray-600 text-justify leading-relaxed max-w-4xl mx-auto">
                        Customer Success at Risposta plays a crucial role in monitoring and ensuring the smooth execution of batch jobs within organizations. One of our key clients, Clicks — a South Africa–based company — leverages the BY SCPO suite to manage demand forecasting, pricing, fulfillment, and promotional planning. Risposta supports Clicks by managing and optimizing SCPO operations, ensuring all processes run efficiently and reliably. In the event of any failures, our team promptly takes corrective actions to maintain business continuity and operational excellence.
                    </p>
                </div>
            </section>
            <ValuesSection />




            <section className="w-full py-12 md:py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Meet Our Success Team</h2>
                        <p className="text-gray-500 max-w-[600px] mx-auto">
                            Our dedicated customer success professionals are here to ensure your success.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-10 w-10 text-blue-600" />
                                </div>
                                <h3 className="font-bold mb-2">Solution Architect</h3>
                                <p className="text-gray-500 text-sm mb-4">
                                    Bridges pre-sales insights with technical planning by documenting client requirements and forecasting the project’s strategic evolution.
                                </p>
                                <Badge variant="secondary">Strategic Planning</Badge>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6 text-center">
                                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="font-bold mb-2">Technical Support Specialist</h3>
                                <p className="text-gray-500 text-sm mb-4">
                                    Expert technical assistance for implementation and troubleshooting.
                                </p>

                                <Badge className="mt-3" variant="secondary">Technical Expertise</Badge>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6 text-center">
                                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                                    <MonitorDot className="h-10 w-10 text-purple-600" />
                                </div>
                                <h3 className="font-bold mb-2">Batch Monitoring</h3>
                                <p className="text-gray-500 text-sm mb-4">
                                    Ensures the reliable execution of batch processes and addressing system failures to maintain uninterrupted operations.
                                </p>
                                <Badge variant="secondary">Job Health</Badge>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>




        </div>
    )
}
