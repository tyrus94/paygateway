"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle, Globe, Shield, Zap, MessageCircle, MapPin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PaymentGatewayLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    country: "",
    message: "",
  })

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Account for sticky header
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = `New Lead: ${formData.company} - ${formData.industry}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Industry: ${formData.industry}
Target Country: ${formData.country}
Message: ${formData.message}
    `.trim()

    const mailtoLink = `mailto:tyrus@unitedpay.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handleTelegramContact = () => {
    window.open("https://t.me/champan", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PG</span>
              </div>
              <span className="text-xl font-bold text-gray-900">PayGateway</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("regions")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Regions
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Desktop Contact Button */}
            <Button onClick={handleTelegramContact} className="hidden md:flex bg-blue-600 hover:bg-blue-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => {
                    scrollToSection("features")
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    scrollToSection("regions")
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  Regions
                </button>
                <button
                  onClick={() => {
                    scrollToSection("industries")
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  Industries
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact")
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  Contact
                </button>
                <Button
                  onClick={() => {
                    handleTelegramContact()
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-blue-600 hover:bg-blue-700 w-full mt-4"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              High-Risk Payment Solutions for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Emerging Markets
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Enable seamless payments for forex, lending, gaming, and streaming businesses across India, Bangladesh,
              Pakistan, Kenya, Brazil, and more. Support local e-wallets and USDT - no card payments needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent"
                onClick={handleTelegramContact}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Payment Gateway?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for high-volume, high-risk businesses in emerging markets with local payment expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">High-Risk Friendly</CardTitle>
                <CardDescription>
                  Specialized in forex, lending, gaming, and streaming businesses with tailored risk management.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Local Payment Methods</CardTitle>
                <CardDescription>
                  Support for MPesa, Nagad, and other popular e-wallets in your target markets.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">USDT Support</CardTitle>
                <CardDescription>Seamless cryptocurrency payments with USDT for global transactions.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Serving High-Growth Markets</h2>
            <p className="text-xl text-gray-600">
              Expanding across emerging economies with localized payment solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { country: "India", wallet: "UPI, Paytm, PhonePe" },
              { country: "Bangladesh", wallet: "Nagad, bKash" },
              { country: "Pakistan", wallet: "JazzCash, Easypaisa" },
              { country: "Kenya", wallet: "M-Pesa, Airtel Money" },
              { country: "Brazil", wallet: "PIX, PicPay" },
              { country: "Egypt", wallet: "Vodafone Cash, Orange Money" },
              { country: "Thailand", wallet: "TrueMoney, Rabbit LINE Pay" },
              { country: "Tanzania", wallet: "M-Pesa, Tigo Pesa" },
              { country: "Vietnam", wallet: "MoMo, ZaloPay" },
              { country: "Philippines", wallet: "GCash, PayMaya" },
            ].map((region, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-lg">{region.country}</h3>
                  </div>
                  <p className="text-gray-600">{region.wallet}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized solutions for high-volume, high-risk business sectors</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Forex Trading", description: "Currency exchange platforms and trading services" },
              { name: "Lending", description: "P2P lending, microfinance, and loan platforms" },
              { name: "Gaming", description: "Online gaming, esports, and gaming platforms" },
              { name: "Streaming", description: "Live streaming, content platforms, and media services" },
            ].map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{industry.name}</CardTitle>
                  <CardDescription className="text-gray-600">{industry.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600">Contact us today to discuss your payment processing needs</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry">Industry *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="forex">Forex Trading</SelectItem>
                            <SelectItem value="lending">Lending</SelectItem>
                            <SelectItem value="gaming">Gaming</SelectItem>
                            <SelectItem value="streaming">Streaming</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="country">Target Country *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, country: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select target market" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="bangladesh">Bangladesh</SelectItem>
                            <SelectItem value="pakistan">Pakistan</SelectItem>
                            <SelectItem value="kenya">Kenya</SelectItem>
                            <SelectItem value="brazil">Brazil</SelectItem>
                            <SelectItem value="egypt">Egypt</SelectItem>
                            <SelectItem value="thailand">Thailand</SelectItem>
                            <SelectItem value="tanzania">Tanzania</SelectItem>
                            <SelectItem value="vietnam">Vietnam</SelectItem>
                            <SelectItem value="philippines">Philippines</SelectItem>
                            <SelectItem value="multiple">Multiple Countries</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your business and payment processing needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Why Businesses Choose Us</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>No card payment restrictions - focus on local e-wallets and USDT</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>High-risk business friendly with competitive rates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Local market expertise in 10+ countries</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>24/7 technical support and integration assistance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Fast onboarding and same-day approvals</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-8 text-center">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Prefer to Chat?</h3>
                    <p className="mb-4 opacity-90">Get instant answers to your questions on Telegram</p>
                    <Button
                      onClick={handleTelegramContact}
                      variant="secondary"
                      className="bg-white text-blue-600 hover:bg-gray-100"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on Telegram
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PG</span>
                </div>
                <span className="text-xl font-bold">PayGateway</span>
              </div>
              <p className="text-gray-400 mb-4">
                Enabling high-risk businesses with local payment solutions across emerging markets.
              </p>
              <Button onClick={handleTelegramContact} className="bg-blue-600 hover:bg-blue-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact on Telegram
              </Button>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Forex Payments</li>
                <li>Lending Platforms</li>
                <li>Gaming Solutions</li>
                <li>Streaming Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Markets</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Asia</li>
                <li>Africa</li>
                <li>LATAM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <a
                    href="https://t.me/champan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Telegram
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <a
                    href="mailto:tyrus@unitedpay.net?subject=Support%20Request"
                    className="hover:text-white transition-colors"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 PayGateway. All rights reserved. | Specialized in high-risk payment processing for emerging
              markets.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
