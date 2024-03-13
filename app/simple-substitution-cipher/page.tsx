'use client'

import { useState } from 'react'
import { z } from 'zod'

import { Accordion } from '@/components/ui/accordion'
import { InputForm, type formSchema } from './components/input-form'
import { FrequencyAnalysis } from './components/frequency-analysis'
import { CombinationyAnalysis } from './components/combination-analysis'
import { Substitute } from './components/substitute'

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
          <CombinationyAnalysis value="item-2" ciphertext={ciphertext} />
          <Substitute value="item-3" ciphertext={ciphertext} />
        </Accordion>
      )}
    </section>
  )
}
