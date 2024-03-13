import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function KeyTable({
  keys,
  onChange,
  className,
}: {
  keys: string[]
  onChange: (index: number, value: string) => void
  className?: string
}) {
  return (
    <Table className={className}>
      <TableCaption>Key Table</TableCaption>
      <TableHeader>
        <TableRow>
          {Array.from(Array(26), (_, i) => (
            <TableHead key={i} className="text-center">
              {String.fromCharCode(65 + i)}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {Array.from(Array(26), (_, i) => (
            <TableCell key={i} className="text-center">
              <Input
                type="text"
                maxLength={1}
                className="aspect-square p-0 text-center uppercase"
                value={keys[i]}
                onChange={(e) => onChange(i, e.target.value)}
              />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  )
}
