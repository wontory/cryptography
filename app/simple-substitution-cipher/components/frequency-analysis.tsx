'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FrequencyCountTable } from './frequency-count-table'

export function FrequencyAnalysis({
  value,
  ciphertext,
}: {
  value: string
  ciphertext: string
}) {
  const [frequencyMap, setFrequencyMap] = useState<Map<string, number>>(
    new Map(),
  )

  useEffect(() => {
    const trimmedCiphertext = ciphertext.replace(/[^A-Z]/g, '')

    const frequency = new Map<string, number>()
    for (const char of trimmedCiphertext)
      frequency.set(char, frequency.has(char) ? frequency.get(char)! + 1 : 1)

    setFrequencyMap(frequency)
  }, [ciphertext])

  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Step 1. Frequency Analysis
        </h2>
      </AccordionTrigger>
      <AccordionContent>
        <div className="relative mt-6 h-80">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/English_letter_frequency_%28alphabetic%29.svg"
            alt="English letter frequency chart"
            draggable={false}
            fill
          />
        </div>
        <FrequencyCountTable frequencyMap={frequencyMap} className="my-6" />
        <h3 className="text-2xl font-semibold tracking-tight">
          Top 5 most frequent characters
        </h3>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          {Array.from(frequencyMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map((x, index) => (
              <li key={index}>
                {x[0]}: {x[1]}
              </li>
            ))}
        </ol>
      </AccordionContent>
    </AccordionItem>
  )
}
