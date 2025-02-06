"use client";
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <h3 className='text-center mb-3  text-gray-400'>Working on it 😊😊</h3>
        <Card className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea placeholder="Your message" rows={6} />
            </div>
            <Button className="w-full" disabled>Send Message</Button>
          </form>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default Contact