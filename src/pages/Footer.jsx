import React from 'react'
import logo from "../assets/buyer_images/linkedin.png"
import logo2 from "../assets/buyer_images/twitter.png"
import logo3 from "../assets/buyer_images/risposta.png"

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                 <img src={logo3} alt="logo" className="h-8" />
                            </div>
                            <p className="text-gray-400 text-sm mb-4">
                                Plot No - 712, NBK Building
                                <br />
                                Rd Number 36, Jubilee Hills, Hyderabad, Telangana Pin: 500033
                                <br />
                                India
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Useful Link</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Demand Forecasting
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Promotion & Ads
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Fulfillment
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Press
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <div className="flex items-center space-x-2 ">
                                <h3 className="font-semibold mb-4">Our Social Networks</h3>

                            </div>
                            <p className='text-sm text-gray-400'>here you can get more information about us</p>
                            <div className='flex space-x-5 mt-2'>
                                <img src={logo} alt="logo" className="h-8" />
                                <img src={logo2} alt="logo" className="h-8" />

                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-400 mb-4 md:mb-0">
                            © {new Date().getFullYear()} rispost Software. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-sm text-gray-400 hover:text-white">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-gray-400 hover:text-white">
                                Terms of Service
                            </a>
                            <a href="#" className="text-sm text-gray-400 hover:text-white">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
