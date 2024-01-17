import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";

async function filterJobs() {
  "use server";
}

export default async function JobForm() {
  return (
    <div className="">
      <form action={filterJobs} className="space-y-4">
        <div className="mt-6">
          <Label htmlFor="q" className="text-lg">
            Search Jobs
          </Label>
          <Input id="q" name="q" type="text" placeholder="Search Jobs..." />
        </div>
        <div>
          <Select />
        </div>
      </form>
    </div>
  );
}
