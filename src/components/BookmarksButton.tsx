import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import BookmarksPopover from "./BookmarksPopover";
import { useOnClickOutside } from "../lib/hooks";

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popOverRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([buttonRef, popOverRef], () => {
    setIsOpen(false);
  });

  return (
    <section>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="bookmarks-btn"
      >
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover ref={popOverRef} />}
    </section>
  );
}
