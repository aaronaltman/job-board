import prisma from "@/lib/prisma";
import JobListItem from "./JobListItem";
import { TjobFilterSchema } from "@/lib/validation";
import { Prisma } from "@prisma/client";

type JobResultsProps = {
  filterValues: TjobFilterSchema;
};

export default async function JobResults({
  filterValues: { q, location, type },
}: JobResultsProps) {
  const searchString = q
    ?.split(" ")
    .filter((w) => w.length > 0)
    .join(" & ");
  const searchFilter: Prisma.JobWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } },
          { companyName: { search: searchString } },
        ],
      }
    : {};
  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      location ? { location: { contains: location } } : {},
      type ? { type: { equals: type } } : {},
    ],
  };
  const jobs = await prisma.job.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="flex-1 space-y-2 mt-6 mb-40">
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
    </div>
  );
}
