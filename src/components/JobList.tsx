import { useActiveIdContext } from "../lib/hooks";
import { jobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type jobListProps = {
  jobItems: jobItem[];
  isLoading: boolean;
};
export function JobList({ jobItems, isLoading }: jobListProps) {
  const { activeId } = useActiveIdContext();
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  );
}

export default JobList;
