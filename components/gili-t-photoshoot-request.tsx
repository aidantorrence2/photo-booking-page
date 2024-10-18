'use client'

import { useState } from "react"
import { Card, CardContent, CardFooter, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Phone, Camera } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function GiliTPhotoshootRequest() {
  const [date, setDate] = useState<string>("")
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [instagram, setInstagram] = useState<string>("")
  const [whatsapp, setWhatsapp] = useState<string>("")
  const [style, setStyle] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = { name, instagram, whatsapp, date, timeSlot, style }
    
    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your request has been sent! We'll get back to you soon.");
        // Reset form fields here if needed
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("There was an error submitting your request. Please try again.");
    }
  }

  const timeSlots = [
    "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-blue-300 to-teal-400 p-4 flex items-center justify-center">
      <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-green-800">Gili T Nature Photoshoot</CardTitle>
          <CardDescription className="text-lg text-green-600">Capture the beauty of nature and yourself</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lsaSUyMHRyYXdhbmdhbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Gili T Nature"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-600">
              Ready to connect with nature in Gili T? Let's create magic together! Our photoshoot experience blends the island's 
              natural beauty with your unique spirit, resulting in photos that capture the essence of you and the stunning surroundings.
            </p>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">October Special - Don't Miss Out!</h3>
              <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                <li>2 hours of nature photography</li>
                <li>30 edited photos of your selection</li>
                <li><span className="line-through">$300</span> <span className="font-bold">$250</span> (Save $50!)</li>
                <li>Inquire about special deals</li>
              </ul>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Your Photographer: Aidan Torrence</h3>
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src="/profile-page.jpg"
                  alt="Aidan Torrence"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="text-sm text-blue-600">
                  With 3+ years capturing beauty around the world, Aidan brings expertise and vision to every shoot.
                </p>
              </div>
              <div className="flex items-center text-blue-500">
                <Camera className="w-4 h-4 mr-1" />
                <a href="https://www.instagram.com/aidantorrencephoto" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                  @madebyaidan
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name" 
                placeholder="What should we call you?" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram Handle</Label>
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
              <Label htmlFor="whatsapp">WhatsApp Number</Label>
              <div className="relative">
                <Phone className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                <Input 
                  id="whatsapp" 
                  placeholder="+62 your number" 
                  className="pl-9" 
                  required 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Shoot Date</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeslot">Time Slot</Label>
              <Select onValueChange={setTimeSlot} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="style">Your Nature Vibe</Label>
              <Textarea
                id="style"
                placeholder="Beach explorer? Jungle adventurer? Tell us your dream nature shoot!"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Request Your Nature Shoot
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          Questions? Message on instagram @madebyaidan or WhatsApp +64 27 359 7185
        </CardFooter>
      </Card>
    </div>
  )
}