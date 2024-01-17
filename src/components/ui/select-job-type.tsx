import { jobTypes } from "@/lib/job-types";

export default function SelectJobType() {
  return (
    <div>
      <label
        htmlFor="job-type"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Job Types
      </label>
      <select
        id="job-type"
        name="job-type"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="All Job Types"
      >
        {jobTypes.map((jobType) => (
          <option key={jobType}>{jobType}</option>
        ))}
      </select>
    </div>
  );
}
