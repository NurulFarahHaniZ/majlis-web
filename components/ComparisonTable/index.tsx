
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function ComparisonTable() {
  return (
    <div className="flex flex-col gap-4 p-4 mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-50"></TableHead>
            <TableHead>Product A</TableHead>
            <TableHead>Product B</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        <TableRow>
            <TableCell className="bg-slate-100">Photo</TableCell>
            <TableCell>500</TableCell>
            <TableCell>540</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-slate-100">Capacity</TableCell>
            <TableCell>500</TableCell>
            <TableCell>540</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-slate-100">Rental Duration</TableCell>
            <TableCell>4 hours</TableCell>
            <TableCell>6 hours</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-slate-100">Food included</TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
