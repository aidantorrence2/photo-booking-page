'use client'

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Instagram, Camera, Loader2, Globe, MessageCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export function GiliT() {
  const [date, setDate] = useState<string>("")
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [instagram, setInstagram] = useState<string>("")
  const [whatsapp, setWhatsapp] = useState<string>("")
  const [style, setStyle] = useState<string>("beach")
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [comment, setComment] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    const formData = { name, instagram, whatsapp, date, timeSlot, style, comment }
    
    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowConfirmation(true)
        // Reset form fields
        setName("")
        setInstagram("")
        setWhatsapp("")
        setDate("")
        setTimeSlot("")
        setStyle("")
        setComment("")
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-6xl mx-auto bg-white shadow-none border-none">
        <CardHeader className="text-center p-1">
          <CardTitle className="text-3xl font-bold text-green-800">Bali Photoshoot</CardTitle>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-100 p-4 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-2">Your Photographer: Aidan Torrence</h3>
                <div className="flex items-center space-x-3 mb-2">
                  <img
                    src="/profile-page.jpg"
                    alt="Aidan Torrence"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="text-sm text-blue-600">
                    With 3+ years of professional fashion and portrait photography experience around the world, Aidan brings expertise and vision to every shoot. 
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center text-blue-500 space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-1" />
                    <a href="https://www.instagram.com/madebyaidan" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                      @madebyaidan
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    <a href="https://www.aidantorrence.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                      www.aidantorrence.com
                    </a>
                  </div>
                </div>
              </div>
<div className="aspect-video rounded-xl overflow-hidden">
  <div className="flex gap-4 h-full p-4">
    <img
      src="/portfolio-image.jpg"
      alt="portfolio-image"
      className="w-[calc(50%-0.5rem)] object-cover object-top rounded-xl"
    />
    <img
      src="/portfolio-image-2.jpg"
      alt="portfolio-image"
      className="w-[calc(50%-0.5rem)] object-cover object-top rounded-xl"
    />
  </div>
</div>
              <p className="text-sm text-gray-600">
                Make your dream photoshoot come true in Bali.
              </p>
              <div className="bg-green-100 p-4 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-2">October Special - Don't Miss Out!</h3>
                <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                  <li>2 hours shooting time</li>
                  <li>30 edited photos of your selection</li>
                  <li>Lowest price ever <span className="line-through">$300</span> <span className="font-bold">$100</span> (Save $200!)</li>
                  <li>Inquire about special deals</li>
                </ul>
              </div>
              
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="What should we call you?" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram" className="font-bold">Instagram Handle</Label>
                  <div className="relative">
                    <Instagram className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                    <Input 
                      id="instagram" 
                      placeholder="@yourinsta" 
                      className="pl-9" 
                      required 
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="style" className="font-bold">Shoot Style</Label>
                  <RadioGroup id="style" value={style} onValueChange={setStyle}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beach" id="beach" />
                      <Label htmlFor="beach">Beach</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="outdoor" id="outdoor" />
                      <Label htmlFor="outdoor">Outdoor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="villa" id="villa" />
                      <Label htmlFor="villa">Villa/Apartment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment" className="font-bold">Additional Comments <span className="font-normal">(optional)</span></Label>
                  <Textarea
                    id="comment"
                    placeholder="Any additional inquiry, comments, or requests?"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 mb-4" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Photo Shoot"
                  )}
                </Button>
<Button
  type="button"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out"
  onClick={() => window.open(`https://wa.me/6427359718`, '_blank')}
  aria-label="Contact via WhatsApp"
>
  <MessageCircle className="h-6 w-6" />
</Button>
              </form>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500 mt-6">
          Questions? Message on instagram @madebyaidan or WhatsApp +64 27 359 7185
        </CardFooter>
      </Card>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Booking Request Sent!</DialogTitle>
            <DialogDescription>
              Thank you for your interest in a nature photoshoot with Aidan. We've received your request and will get back to you soon to confirm the details.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowConfirmation(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
