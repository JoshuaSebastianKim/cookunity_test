import CardFilters from "../_components/CardFilters";
import CardList from "../_components/CardList";
import CardPagination from "../_components/CardPagination";

export default function Search() {
  return (
    <main className="container mx-auto px-4 py-6">
      <CardFilters />
      <div className="mt-6">
        <CardList />
        <CardPagination />
      </div>
    </main>
  );
}
