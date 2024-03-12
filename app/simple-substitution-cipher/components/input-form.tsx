'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export const formSchema = z.object({
  ciphertext: z.string(),
})

export function InputForm({
  onSubmit,
}: {
  onSubmit: (values: z.infer<typeof formSchema>) => void
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ciphertext: '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="ciphertext"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ciphertext</FormLabel>
              <FormControl>
                <Textarea {...field} className="h-40" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full">
          Decrypt
        </Button>
      </form>
    </Form>
  )
}
