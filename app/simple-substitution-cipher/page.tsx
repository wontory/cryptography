'use client'

import { useState } from 'react'
import { z } from 'zod'

import { InputForm, type formSchema } from './components/input-form'
import { Accordion } from '@/components/ui/accordion'
import { FrequencyAnalysis } from './components/frequency-analysis'

export default function SubstitionCipher() {
  const [ciphertext, setCiphertext] = useState('')
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setCiphertext(values.ciphertext)
    setShowResult(true)
  }

  return (
    <section className="flex flex-col gap-4">
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Simple Substitution Cipher
      </h1>
      <InputForm onSubmit={handleSubmit} />
      {showResult && (
        <Accordion type="multiple" className="mt-8 w-full">
          <FrequencyAnalysis value="item-1" ciphertext={ciphertext} />
        </Accordion>
      )}
    </section>
  )
}
