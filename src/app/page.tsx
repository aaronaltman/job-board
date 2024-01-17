import JobFilterSidebar from "@/components/JobFilterSidebar";
import HeaderMain from "@/components/header-main";
import JobResults from "@/components/job-results";
import { TjobFilterSchema } from "@/lib/validation";

type PageProps = {
  searchParams: {
    q?: string;
    location?: string;
    type?: string;
    remote?: string;
  };
};

export default async function Home({
  searchParams: { q, location, type, remote },
}: PageProps) {
  const filterValues: TjobFilterSchema = {
    q: q || "",
    location: location || "",
    type: type || "",
  };
  return (
    <main className="max-w-5xl m-auto">
      <HeaderMain />
      <div className="flex flex-col md:flex-row gap-6">
        <JobFilterSidebar />
        <JobResults filterValues={filterValues} />
      </div>
    </main>
  );
}
