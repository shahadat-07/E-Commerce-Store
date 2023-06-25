import {
  HeroCarousel,
  CategoryCarousel,
  Testimonials,
  Features,
  Sponsored,
  PopularProducts,
  LatestNews,
  Promotion,
} from "@/components";

export default function Home() {
  return (
    <main className="">
      <HeroCarousel />
      <CategoryCarousel />
      <Promotion />
      {/* <PopularProducts /> */}
      <Features />
      <Testimonials />
      <Sponsored />
      <LatestNews />
    </main>
  );
}
