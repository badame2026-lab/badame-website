import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart, Droplets } from "lucide-react";

export default function BadamMilkWebsite() {
  return (
    <div className="min-h-screen bg-[#FFF7E6] text-[#3A1F0F]">
      {/* Header */}
      <header className="bg-[#F6C33D] p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">🥛 Badamé</h1>
        <p className="text-center mt-2 text-[#7A4A1E]">Rich • Nutty • Creamy</p>
      </header>

      {/* Hero Section */}
      <section
        className="p-12 text-center bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,247,230,0.85), rgba(246,195,61,0.85)), url('https://images.unsplash.com/photo-1577801598261-47a3b2d7a6c3')",
        }}
      >
        {/* Steam Effect */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 bottom-10 w-32 h-32 bg-white/40 rounded-full blur-2xl animate-pulse" />
          <div className="absolute left-1/2 bottom-16 w-40 h-40 bg-white/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute left-2/3 bottom-12 w-28 h-28 bg-white/40 rounded-full blur-2xl animate-pulse" />
        </div>
        <h2 className="text-3xl font-semibold mb-4">Immerse Yourself in a Rich, Nutty Experience</h2>
        <div className="flex justify-center gap-3 mb-4">
          <span className="px-4 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-sm shadow">🔥 Hot Available</span>
          <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm shadow">❄️ Cold Available</span>
        </div>
        <p className="max-w-xl mx-auto text-lg">
          Crafted with fresh milk and premium almonds for a royal taste in every sip.
        </p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <Button className="bg-[#C4161C] hover:bg-[#A31216] text-white text-lg px-8 py-4 rounded-2xl shadow-lg">
            <ShoppingCart className="mr-2" /> Order Now
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-2xl shadow-lg">
            WhatsApp Order
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 p-10 bg-white">
        <Card className="rounded-3xl shadow-lg hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1550583724-b2692b85b150"
              alt="Fresh Milk"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg">Fresh Milk</h3>
            <p className="text-sm text-[#5A3A1E]">Pure, hygienic & sourced daily</p>
          </CardContent>
        </Card>
        <Card className="rounded-3xl shadow-lg hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1604908177522-040c1a4a2c1b"
              alt="Premium Almonds"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg">Premium Almonds</h3>
            <p className="text-sm text-[#5A3A1E]">Rich taste with real badam bits</p>
          </CardContent>
        </Card>
        <Card className="rounded-3xl shadow-lg hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1577801598261-47a3b2d7a6c3"
              alt="Hot and Cold"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg">Hot & Cold</h3>
            <p className="text-sm text-[#5A3A1E]">Perfect for every season</p>
          </CardContent>
        </Card>
      </section>

      {/* Pricing */}
      <section className="p-10 bg-gradient-to-b from-[#FFF7E6] to-[#F6C33D]">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Pricing</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <Card className="w-64 rounded-2xl shadow-lg">
            <div className="flex justify-center gap-2 pt-4">
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">🔥 Hot</span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">❄️ Cold</span>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-xl">200 ml</h3>
              <p className="text-2xl mt-2 text-[#C4161C]">₹30</p>
            </CardContent>
          </Card>
          <Card className="w-64 rounded-2xl shadow-lg">
            <div className="flex justify-center gap-2 pt-4">
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">🔥 Hot</span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">❄️ Cold</span>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-xl">500 ml</h3>
              <p className="text-2xl mt-2 text-[#C4161C]">₹70</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="p-10 text-center bg-[#F6C33D]">
        <h2 className="text-2xl font-semibold mb-3">Bulk Orders & Shop Supply</h2>
        <p className="text-[#5A3A1E]">Available for events, offices & retail shops</p>
        <Button className="mt-6 bg-[#C4161C] hover:bg-[#A31216] text-white px-8 py-4 rounded-2xl shadow-lg">
          <Phone className="mr-2" /> Call / WhatsApp Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A1F0F] text-white text-center p-4">
        <p>© 2026 Badamé | A Rich, Nutty Experience</p>
      </footer>
    </div>
  );
}
