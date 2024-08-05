"use client";

import { useContext } from "react";
import { CardContext } from "../_providers/CardProvider";
import { CardType } from "@prisma/client";

export default function CardFilters() {
  const { handleSetTextFilter, handleSetTypeFilter } = useContext(CardContext);

  return (
    <div id="search-bar" className="text-black">
      <input
        type="text"
        placeholder="Search by Name"
        onChange={(event) => handleSetTextFilter(event.target.value)}
      />
      <select
        defaultValue=""
        onChange={(event) =>
          handleSetTypeFilter(event.target.value as CardType)
        }
      >
        <option value="" disabled hidden>
          Type
        </option>
        <option value="">Any</option>
        {Object.entries(CardType).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
