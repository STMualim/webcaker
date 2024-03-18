import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  export default function JobsBySalary() {
    return (
      <div className="my-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Salary" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="<3jt"> &lt; 3 jt </SelectItem>
            <SelectItem value="<5jt>">&lt; 5 jt</SelectItem>
            <SelectItem value="<10jt">&lt; 10 jt</SelectItem>
            <SelectItem value=">10jt">&gt; 10 jt</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  }
  