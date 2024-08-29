import { CategoriesSelection } from "../components/storefront/CategorySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProducts";
import { Hero } from "../components/storefront/Hero";
import { SearchBar } from "../components/storefront/SearchBar";

export default function IndexPage() {
  return (
    <div>
      <Hero />
        <SearchBar />
      <CategoriesSelection />
      <FeaturedProducts />
    </div>
  );
}
