'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, MessageCircle, Star, DollarSign } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from 'next/image'

export function BaliFAQ() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  return (
    <div className="min-h-screen font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <Card className="w-full max-w-md mx-auto bg-white shadow-lg border-none rounded-none">
        <CardHeader className="text-center p-4">
          <CardTitle className="text-2xl font-bold text-green-800">Bali Photoshoot</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Main Feature */}
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/portfolio-image.jpg"
              alt="Bali Photoshoot"
              width={400}
              height={300}
              layout="responsive"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h2 className="text-xl font-bold">Professional Photography in Paradise</h2>
              <p>Create Lasting Memories in 2 Hours for US $100</p>
            </div>
          </div>

          {/* Key Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Camera className="w-5 h-5 text-green-600" />
              <span className="text-sm">Private session</span>
            </div>
            <div className="flex items-center space-x-2 justify-end">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm">100+ happy clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/profile-page.jpg"
                alt="Aidan Torrence"
                width={20}
                height={20}
                className="rounded-full"
              />
              <a href="https://www.aidantorrence.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">By Aidan Torrence</a>
            </div>
            <div className="flex items-center space-x-2 justify-end">
              <DollarSign className="w-5 h-5 text-purple-600" />
              <span className="text-sm">Money-back guarantee</span>
            </div>
          </div>

          {/* About the Photographer */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-blue-800 mb-2">About Aidan Torrence</h3>
              <p className="text-sm text-blue-700">
                With 3+ years of professional experience, Aidan brings expertise and vision to every shoot in beautiful Bali.
              </p>
            </CardContent>
          </Card>

          {/* What You'll Get */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-green-800 mb-2">What You'll Get</h3>
              <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                <li>2 hours of professional photography</li>
                <li>30 expertly edited high-resolution photos</li>
                <li>Online gallery for easy sharing</li>
                <li>Print release for personal use</li>
                <li>Photo delivery within 1 week</li>
              </ul>
            </CardContent>
          </Card>

          {/* Testimonial */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Testimonials</h3>
              <p className="text-sm italic text-gray-700">
                "HOLY FREAKING MOLY DUDE THESE ARE AWESOME"
              </p>
              <p className="text-sm italic text-gray-700">
                "YOU ARE SO TALENTED"
              </p>
              <p className="text-sm italic text-gray-700">
                "IM STOKED"
              </p>
              <p className="text-right text-sm font-medium text-gray-600 mt-2">- Oat</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Booking Request Sent!</DialogTitle>
            <DialogDescription>
              Thank you for your interest in a Bali photoshoot with Aidan. We've received your request and will get back to you soon to confirm the details.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowConfirmation(false)}>Close</Button>
        </DialogContent>
      </Dialog>

      {/* WhatsApp Button */}
      <Button
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg"
        onClick={() => window.open(`https://wa.me/64273597185`, '_blank')}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
