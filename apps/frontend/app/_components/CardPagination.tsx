"use client";

import { useContext } from "react";
import { CardsContext } from "../_providers/CardsProvider";
import Pagination from "./Pagination";

export default function CardPagination() {
  const { cards, meta, page, handleSetPage } = useContext(CardsContext);

  if (!cards || !meta) {
    return null;
  }

  return (
    <Pagination
      totalCount={meta.total}
      currentPage={page}
      onPageChange={(page) => handleSetPage(page)}
      pageSize={meta.perPage}
    />
  );
}
