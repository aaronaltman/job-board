type Props = {
  distinctLocations: string[];
};

export default function Select({ distinctLocations }: Props) {
  return (
    <div>
      <label
        htmlFor="location"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Location
      </label>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="All Locations"
      >
        {distinctLocations.map((location) => (
          <option key={location}>{location}</option>
        ))}
      </select>
    </div>
  );
}
