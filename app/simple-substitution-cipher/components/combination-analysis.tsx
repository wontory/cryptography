'use client'

import { useEffect, useState } from 'react'
import { RocketIcon } from '@radix-ui/react-icons'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function CombinationyAnalysis({
  value,
  ciphertext,
}: {
  value: string
  ciphertext: string
}) {
  const [words, setWords] = useState<Map<string, number>>(new Map())

  useEffect(() => {
    const trimmedCiphertext = ciphertext
      .replace(/[^A-Z ]/g, ' ')
      .replace(/ +(?= )/g, '')

    const wordsMap = new Map<string, number>()
    for (const word of trimmedCiphertext.split(' '))
      wordsMap.set(word, wordsMap.has(word) ? wordsMap.get(word)! + 1 : 1)

    setWords(wordsMap)
  }, [ciphertext])

  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Step 2. Combination Analysis
        </h2>
      </AccordionTrigger>
      <AccordionContent>
        <Alert className="mb-3 mt-6">
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Most frequent 2 letter combinations</AlertTitle>
          <AlertDescription>
            TH, HE, IN, ER, AN, RE, ED, ON, ES, ST, EN, AT, TO, NT, HA, ND, OU,
            EA, NG, AS, OR, TI, IS, ET, IT, AR, TE, SE, HI, OF
          </AlertDescription>
        </Alert>
        <Alert className="mb-6 mt-3">
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Most frequent 3 letter combinations</AlertTitle>
          <AlertDescription>
            THE, ING, AND, HER, ERE, ENT, THA, NTH, WAS, ETH, FOR, DTH
          </AlertDescription>
        </Alert>
        <h3 className="text-2xl font-semibold tracking-tight">
          1 Letter Combinations
        </h3>
        <ul className="my-6 ml-6 list-disc">
          <li>
            {Array.from(words)
              .filter(([word]) => word.length === 1)
              .sort((a, b) => b[1] - a[1])
              .map(([word, count]) => `${word}(${count})`)
              .join(', ')}
          </li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight">
          2 Letter Combinations
        </h3>
        <ul className="my-6 ml-6 list-disc">
          <li>
            {Array.from(words)
              .filter(([word]) => word.length === 2)
              .sort((a, b) => b[1] - a[1])
              .map(([word, count]) => `${word}(${count})`)
              .join(', ')}
          </li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight">
          3 Letter Combinations
        </h3>
        <ul className="my-6 ml-6 list-disc">
          <li>
            {Array.from(words)
              .filter(([word]) => word.length === 3)
              .sort((a, b) => b[1] - a[1])
              .map(([word, count]) => `${word}(${count})`)
              .join(', ')}
          </li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight">
          4+ Letter Combinations
        </h3>
        <ul className="my-6 ml-6 list-disc">
          <li>
            {Array.from(words)
              .filter(([word]) => word.length >= 4)
              .sort((a, b) => b[1] - a[1])
              .sort((a, b) => a[0].length - b[0].length)
              .map(([word, count]) => `${word}(${count})`)
              .join(', ')}
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  )
}
