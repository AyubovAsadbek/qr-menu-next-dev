import SearchWrapper from "@/components/SearchWrapper";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <>
      <div className="pb-20 sm:pb-0">
        {/* Search Wrapper */}
        <div className="container">
          <SearchWrapper />
        </div>

        {/* CaTegories */}
        <Categories />
      </div>
    </>
  );
}
