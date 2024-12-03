'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const stories = [
  {
    id: 1,
    title: "Bem-vindo ao nosso Web Story",
    content: "Deslize para explorar mais!",
    image: "/placeholder.svg?height=600&width=400"
  },
  {
    id: 2,
    title: "Descubra Novidades",
    content: "Fique por dentro das últimas tendências",
    image: "/placeholder.svg?height=600&width=400"
  },
  {
    id: 3,
    title: "Interaja Conosco",
    content: "Participe de nossas enquetes e questionários",
    image: "/placeholder.svg?height=600&width=400"
  },
  {
    id: 4,
    title: "Compartilhe",
    content: "Espalhe a palavra para seus amigos!",
    image: "/placeholder.svg?height=600&width=400"
  }
]

export default function WebStory() {
  const [currentStory, setCurrentStory] = useState(0)

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden relative aspect-[9/16]">
      <CardContent className="p-0 h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={stories[currentStory].image} 
            alt={stories[currentStory].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6">
            <div className="w-full flex justify-between mb-4">
              {stories.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-1 bg-white flex-grow mx-1 rounded-full ${index === currentStory ? 'opacity-100' : 'opacity-50'}`}
                />
              ))}
            </div>
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">{stories[currentStory].title}</h2>
              <p>{stories[currentStory].content}</p>
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white"
          onClick={prevStory}
        >
          <ChevronLeft className="h-8 w-8" />
          <span className="sr-only">História anterior</span>
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
          onClick={nextStory}
        >
          <ChevronRight className="h-8 w-8" />
          <span className="sr-only">Próxima história</span>
        </Button>
      </CardContent>
    </Card>
  )
}

