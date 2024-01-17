import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import prisma from "@/lib/prisma";

async function filterJobs() {
  "use server";
}

export default async function JobForm() {
  const distinctLocations = (await prisma.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map((location) => location.location).filter(Boolean)
    )) as string[];

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
          <Select distinctLocations={distinctLocations} />
        </div>
      </form>
    </div>
  );
}
