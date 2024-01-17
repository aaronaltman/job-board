import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobListItem from "@/components/JobListItem";
import HeaderMain from "@/components/header-main";
import prisma from "@/lib/prisma";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <main className="max-w-5xl m-auto">
      <HeaderMain />
      <div className="flex flex-col md:flex-row gap-6">
        <JobFilterSidebar />
        <div className="flex-1 space-y-2 mt-6 mb-40">
          {jobs.map((job) => (
            <JobListItem key={job.id} job={job} />
          ))}
        </div>
      </div>
    </main>
  );
}
