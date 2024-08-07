import CardFilters from "../_components/CardFilters";
import CardList from "../_components/CardList";
import CardPagination from "../_components/CardPagination";
import { CardsProvider } from "../_providers/CardsProvider";

export default function CardListPage() {
  return (
    <CardsProvider>
      <main className="container mx-auto px-4 py-6">
        <CardFilters />
        <div className="mt-6">
          <CardList />
          <CardPagination />
        </div>
      </main>
    </CardsProvider>
  );
}
