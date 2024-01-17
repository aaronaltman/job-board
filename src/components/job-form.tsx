import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import prisma from "@/lib/prisma";
import SelectJobType from "./ui/select-job-type";
import CheckList from "./ui/checklist";
import { Button } from "./ui/button";
import { jobFilterSchema } from "@/lib/validation";
import { redirect } from "next/navigation";

async function filterJobs(formdata: FormData) {
  "use server";
  const values = Object.fromEntries(formdata.entries());
  const { q, type, location, remote } = jobFilterSchema.parse(values);
  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
  });
  redirect(`/jobs?${searchParams.toString()}`);
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
        <div className="">
          <Label
            htmlFor="q"
            className="block text-sm font-medium leading-6 text-gray-900 pb-2"
          >
            Search Jobs
          </Label>
          <Input
            className=""
            id="q"
            name="q"
            type="text"
            placeholder="Search Jobs..."
          />
        </div>
        <div className="space-y-4">
          <Select distinctLocations={distinctLocations} />
          <SelectJobType />
          <CheckList />
          <Button type="submit">Search</Button>
        </div>
      </form>
    </div>
  );
}
