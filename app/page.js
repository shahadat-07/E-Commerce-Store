import {
  HeroCarousel,
  CategoryCarousel,
  Testimonials,
  Features,
  Sponsored,
  PopularProducts,
  LatestNews,
} from "@/components";

export default function Home() {
  return (
    <main className="">
      <HeroCarousel />
      <CategoryCarousel />
      {/* <PopularProducts /> */}
      <Features />
      <Testimonials />
      <Sponsored />
      <LatestNews />
    </main>
  );
}
