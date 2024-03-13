'use client'

import { useEffect, useState } from 'react'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { KeyTable } from './key-table'

export function Substitute({
  value,
  ciphertext,
}: {
  value: string
  ciphertext: string
}) {
  const [keys, setKeys] = useState<string[]>(
    Array.from(Array(26), (_, i) => ''),
  )
  const [plaintext, setPlaintext] = useState(ciphertext)

  useEffect(() => {
    setPlaintext(
      ciphertext
        .split('')
        .map((char) => keys[char.charCodeAt(0) - 65] || char)
        .join(''),
    )
  }, [ciphertext, keys])

  const handleKeyChange = (index: number, value: string) => {
    setKeys((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }

  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Step 3. Substitute
        </h2>
      </AccordionTrigger>
      <AccordionContent>
        <KeyTable keys={keys} onChange={handleKeyChange} className="my-6" />
        <h3 className="text-2xl font-semibold tracking-tight">
          Decrypted Plaintext
        </h3>
        <p className="mt-2 text-lg">{plaintext}</p>
      </AccordionContent>
    </AccordionItem>
  )
}
