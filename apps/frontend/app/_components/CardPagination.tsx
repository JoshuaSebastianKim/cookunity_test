"use client";

import { useContext } from "react";
import { CardContext } from "../_providers/CardProvider";
import Pagination from "./Pagination";

export default function CardPagination() {
  const { cards, meta, page, handleSetPage } = useContext(CardContext);

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
