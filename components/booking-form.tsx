'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Loader2, Mail } from "lucide-react"

export function BookingForm() {
  const [email, setEmail] = useState<string>("")
  const [instagram, setInstagram] = useState<string>("")
  const [style, setStyle] = useState<string>("beach")
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [comment, setComment] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [budget, setBudget] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    const formData = { email, instagram, style, comment, location, budget }

    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowConfirmation(true)
      } else {
        console.error('Submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (showConfirmation) {
    return (
      <Card className="w-full max-w-md mx-auto bg-white shadow-lg border-none rounded-none">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Thank you for your booking request!</h2>
          <p>We'll get back to you soon to confirm the details.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg border-none rounded-none">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-bold">Email</Label>
            <div className="relative">
              <Mail className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
              <Input 
                id="email" 
                type="email"
                placeholder="Your email address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-9"
              />
            </div>
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
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location" className="font-bold">Location</Label>
            <Input 
              id="location" 
              placeholder="e.g. Amed, Ubud, Canggu, Uluwatu"
              required 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget" className="font-bold">Budget</Label>
            <Input 
              id="budget" 
              type="number" 
              placeholder="Your budget in USD"
              required 
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment" className="font-bold">Additional Comments</Label>
            <Textarea
              id="comment"
              placeholder="Any additional requests?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-black hover:bg-gray-900 text-white py-4 text-lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Booking...
              </>
            ) : (
              "REQUEST BOOKING"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
