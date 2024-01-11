import { Input } from "./ui/input";
import { Label } from "./ui/label";

async function filterJobs() {
  "use server";
}

export default async function JobForm() {
  return (
    <div>
      <form action={filterJobs}>
        <div className="space-y-4">
          <Label htmlFor="q">Search Jobs</Label>
          <Input id="q" name="q" type="text" placeholder="Search Jobs" />
        </div>
      </form>
    </div>
  );
}
