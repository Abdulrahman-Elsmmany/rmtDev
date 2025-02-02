import { useJobItemsContext } from "../lib/hooks";
import { SortBy } from "../lib/types";

export default function SortingControls() {
  const { handleChangeSortBy, sortBy } = useJobItemsContext();
  return (
    <>
      <SortingButton
        onClick={() => handleChangeSortBy("relevant")}
        sortBy={sortBy}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingButton>
      <SortingButton
        onClick={() => handleChangeSortBy("recent")}
        sortBy={sortBy}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingButton>
    </>
  );
}

type SortingButtonProps = {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  sortBy: SortBy;
};
function SortingButton({ isActive, onClick, children }: SortingButtonProps) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>
      <button
        onClick={onClick}
        className={`sorting__button sorting__button--recent ${
          isActive && "sorting__button--active"
        }`}
      >
        {children}
      </button>
    </section>
  );
}
