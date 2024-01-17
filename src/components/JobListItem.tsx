import { Job } from "@prisma/client";
import Image from "next/image";
import React from "react";

type JobListItemProps = {
  job: Job;
};

export default function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) {
  return (
    <article className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden pl-4 justify-center py-4">
      <div className="flex flex-wrap items-center space-x-6">
        <Image
          src="/next.svg"
          width={100}
          height={100}
          alt={`${companyName} logo`}
        />
        <div>
          <h2 className="text-xl">{title}</h2>
          <p className="font-bold">{type}</p>
          <p>{location}</p>
        </div>
      </div>
    </article>
  );
}
