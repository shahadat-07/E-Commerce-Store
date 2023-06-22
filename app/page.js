import {
  HeroCarousel,
  CategoryCarousel,
  Testimonials,
  Features,
  Sponsored,
} from "@/components";

export default function Home() {
  return (
    <main className="">
      <HeroCarousel />
      <CategoryCarousel />
      <Features />
      <Testimonials />
      <Sponsored />
    </main>
  );
}
