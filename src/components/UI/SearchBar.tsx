"use client";

import { useEffect, useState } from "react";

const MAX_ITEM_COUNT = 5;
const DEFAULT_DEBOUNCE_DELAY = 300;

interface SearchBarProps<
  T,
  K extends keyof T,
> extends React.HTMLAttributes<HTMLInputElement> {
  data: T[];
  searchBy: K[];
  showData?: K[];
  debounceDelay?: number;
  itemCount?: number;
  action?: (item: T) => void;
}

function SearchBar<T, K extends keyof T>({
  data,
  searchBy,
  showData = searchBy,
  debounceDelay = DEFAULT_DEBOUNCE_DELAY,
  itemCount = MAX_ITEM_COUNT,
  action,
  ...inputAttr
}: SearchBarProps<T, K>) {
  const [query, setQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<T[]>([]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!query) {
        setFilteredData([]);
        return;
      }

      const filteredData = data.filter((item) =>
        searchBy.some((searchKey) =>
          String(item[searchKey])
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase()),
        ),
      );

      setFilteredData(filteredData.slice(0, 5));
    }, debounceDelay);

    return () => clearTimeout(t);
  }, [query]);

  return (
    <>
      <input
        {...inputAttr}
        type="text"
        className={`border border-black p-6 ${inputAttr.className}`}
        placeholder="Search country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="border border-black">
        {filteredData.length !== 0 &&
          filteredData.map((item, index) => (
            <div
              key={index}
              className="flex gap-4"
              onClick={() => action?.(item)}
            >
              {showData.map((key, index) => (
                <span key={index}>{String(item[key])}</span>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchBar;
