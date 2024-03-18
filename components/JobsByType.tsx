import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function JobsByType() {
  return (
    <div className="my-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Tipe Pekerjaan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="fulltime">Fulltime</SelectItem>
          <SelectItem value="dark">Paruh Waktu</SelectItem>
          <SelectItem value="kontrak">Kontrak</SelectItem>
          <SelectItem value="pekerja-lepas">Pekerja Lepas</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
