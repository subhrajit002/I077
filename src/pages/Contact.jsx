"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, MapPin, Phone, Mail, Clock, Globe, Send } from "lucide-react"
import { Link } from "react-router-dom";
import ceoLogo from "../assets/buyer_images/ceo.png"

export default function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted")
    }

    return (
        <div className="flex flex-col min-h-screen">


            <main className="flex-1">
                <section className="w-full py-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid md:grid-cols-2 items-center gap-8">

                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Get in Touch
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl">
                                    Have questions about our supply chain solutions? Our team is here to help you optimize your
                                    operations.
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src={ceoLogo}
                                    alt="CEO Sai"
                                    className="w-64 h-64 object-cover rounded-full shadow-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-700">CEO & Founder</h3>
                                <p className="text-gray-500">Sai Mudigonda</p>
                            </div>

                        </div>
                    </div>
                </section>



                <section className="w-full py-12 md:py-24 bg-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-10 lg:grid-cols-2">
                            <div>
                                <Card>
                                    <CardContent>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div className="space-y-2">
                                                    <label htmlFor="first-name" className="text-sm font-medium">
                                                        First name
                                                    </label>
                                                    <Input id="first-name" placeholder="Subhrajit" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="last-name" className="text-sm font-medium">
                                                        Last name
                                                    </label>
                                                    <Input id="last-name" placeholder="Barman" required />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="company" className="text-sm font-medium">
                                                    Company name
                                                </label>
                                                <Input id="company" placeholder="Your Company Ltd." required />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">
                                                    Email
                                                </label>
                                                <Input id="email" type="email" placeholder="subhrajitbarman@gmail.com" required />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium">
                                                    Phone number
                                                </label>
                                                <Input id="phone" type="tel" placeholder="+91 00000 00000   " />
                                            </div>



                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium">
                                                    Message
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Please describe how we can help you..."
                                                    className="min-h-[120px]"
                                                    required
                                                />
                                            </div>



                                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                                <Send className="mr-2 h-4 w-4" />
                                                Send Message
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-4">
                                            <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                                            <div>
                                                <h3 className="font-medium">Headquarters</h3>
                                                <p className="text-gray-500">
                                                    Plot No - 712, NBK Building
                                                    <br />
                                                    Rd Number 36, Jubilee Hills, Hyderabad, Telangana 500033
                                                    <br />
                                                    India
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <Phone className="h-5 w-5 text-blue-600 mt-1" />
                                            <div>
                                                <h3 className="font-medium">Phone</h3>
                                                <p className="text-gray-500">
                                                    +91-40-23540357
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <Mail className="h-5 w-5 text-blue-600 mt-1" />
                                            <div>
                                                <h3 className="font-medium">Email</h3>
                                                <p className="text-gray-500">
                                                    info@rispostacrop.com
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <Clock className="h-5 w-5 text-blue-600 mt-1" />
                                            <div>
                                                <h3 className="font-medium">Business Hours</h3>
                                                <p className="text-gray-500">
                                                    Monday - Friday: 9:30 AM - 6:30 PM (IST)
                                                    <br />
                                                    Saturday - Sunday: Closed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main>

        </div>
    )
}
