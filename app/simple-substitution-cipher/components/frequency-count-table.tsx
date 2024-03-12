import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function FrequencyCountTable({
  frequencyMap,
  className,
}: {
  frequencyMap: Map<string, number>
  className?: string
}) {
  return (
    <Table className={className}>
      <TableCaption>Frequency Count Table</TableCaption>
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
              {frequencyMap.get(String.fromCharCode(65 + i)) ?? 0}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  )
}
