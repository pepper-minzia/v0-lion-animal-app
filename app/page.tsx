"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mic, MicOff, Volume2 } from "lucide-react"
import { animalDatabase } from "@/lib/animal-database"

export default function LionTeacherApp() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [lionMessage, setLionMessage] = useState("Hallo! Ich bin Leo der Löwe. Frag mich etwas über Tiere!")
  const [currentAnimal, setCurrentAnimal] = useState<string | null>(null)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.lang = "de-DE"
        recognitionRef.current.interimResults = false

        recognitionRef.current.onresult = (event: any) => {
          const speechResult = event.results[0][0].transcript
          setTranscript(speechResult)
          handleSpeechInput(speechResult)
        }

        recognitionRef.current.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error)
          setIsListening(false)
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
        }
      }
    }
  }, [])

  const handleSpeechInput = (input: string) => {
    const lowerInput = input.toLowerCase()

    // Suche nach Tiernamen in der Eingabe
    let foundAnimal = null
    for (const [animalName, animalData] of Object.entries(animalDatabase)) {
      if (lowerInput.includes(animalName.toLowerCase())) {
        foundAnimal = animalName
        break
      }
    }

    if (foundAnimal) {
      const animal = animalDatabase[foundAnimal]
      setCurrentAnimal(foundAnimal)
      const response = `${animal.greeting} ${animal.facts[Math.floor(Math.random() * animal.facts.length)]}`
      setLionMessage(response)
      speak(response)
    } else {
      const response =
        "Hmm, ich kenne dieses Tier nicht. Frag mich nach Löwen, Elefanten, Giraffen, Delfinen, Pinguinen oder Schmetterlingen!"
      setLionMessage(response)
      speak(response)
    }
  }

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "de-DE"
      utterance.rate = 0.9
      utterance.pitch = 1.1

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)

      window.speechSynthesis.speak(utterance)
    }
  }

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
    } else {
      setTranscript("")
      recognitionRef.current?.start()
      setIsListening(true)
    }
  }

  const handleAnimalClick = (animalName: string) => {
    const animal = animalDatabase[animalName]
    setCurrentAnimal(animalName)
    const response = `${animal.greeting} ${animal.facts[Math.floor(Math.random() * animal.facts.length)]}`
    setLionMessage(response)
    speak(response)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 via-accent/20 to-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 font-sans text-4xl font-bold text-primary md:text-6xl text-balance">Leo's Tierwelt</h1>
          <p className="text-lg text-muted-foreground md:text-xl text-pretty">
            Entdecke spannende Tiere mit Leo dem Löwen!
          </p>
        </div>

        {/* Lion Character Card */}
        <Card className="mb-6 overflow-hidden border-4 border-primary/20 bg-card shadow-2xl">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/20 p-6 md:p-8">
            <div className="mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="text-9xl md:text-[12rem]">🦁</div>
                {isSpeaking && (
                  <div className="absolute -right-4 -top-4 animate-bounce">
                    <Volume2 className="h-12 w-12 text-primary" />
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6 rounded-2xl bg-card p-6 shadow-lg">
              <p className="text-center font-sans text-xl leading-relaxed text-card-foreground md:text-2xl text-pretty">
                {lionMessage}
              </p>
            </div>

            {transcript && (
              <div className="mb-4 rounded-xl bg-accent/30 p-4">
                <p className="text-center text-lg text-accent-foreground">
                  Du hast gesagt: <span className="font-bold">{transcript}</span>
                </p>
              </div>
            )}

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={toggleListening}
                className={`h-20 w-20 rounded-full text-primary-foreground shadow-xl transition-all hover:scale-110 md:h-24 md:w-24 ${
                  isListening ? "animate-pulse bg-destructive hover:bg-destructive" : "bg-primary hover:bg-primary/90"
                }`}
              >
                {isListening ? (
                  <MicOff className="h-10 w-10 md:h-12 md:w-12" />
                ) : (
                  <Mic className="h-10 w-10 md:h-12 md:w-12" />
                )}
              </Button>
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground md:text-base">
              {isListening ? "Ich höre zu... Sprich jetzt!" : "Drücke das Mikrofon und frag mich nach einem Tier!"}
            </p>
          </div>
        </Card>

        {/* Animal Selection Grid */}
        <div className="mb-6">
          <h2 className="mb-4 text-center font-sans text-2xl font-bold text-foreground md:text-3xl">
            Oder wähle ein Tier aus:
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {Object.entries(animalDatabase).map(([name, data]) => (
              <Card
                key={name}
                className={`cursor-pointer border-4 transition-all hover:scale-105 hover:shadow-xl ${
                  currentAnimal === name ? "border-primary bg-primary/10" : "border-border bg-card"
                }`}
                onClick={() => handleAnimalClick(name)}
              >
                <div className="p-6 text-center">
                  <div className="mb-3 text-6xl md:text-7xl">{data.emoji}</div>
                  <p className="font-sans text-lg font-bold text-card-foreground md:text-xl">{name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <Card className="border-2 border-accent/50 bg-accent/10">
          <div className="p-6 text-center">
            <p className="text-base leading-relaxed text-foreground md:text-lg text-pretty">
              💡 <span className="font-bold">Tipp:</span> Sag zum Beispiel "Erzähl mir etwas über Elefanten" oder klicke
              einfach auf ein Tier!
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
