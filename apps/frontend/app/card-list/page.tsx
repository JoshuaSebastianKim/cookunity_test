import CardFilters from "../_components/CardFilters";
import CardList from "../_components/CardList";
import CardPagination from "../_components/CardPagination";

export default function Search() {
  return (
    <main>
      <div>
        <h1>Pokémon App</h1>

        <CardFilters />
        <CardList />
        <CardPagination />
      </div>
    </main>
  );
}
