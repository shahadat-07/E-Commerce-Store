import { HeroCarousel, CategoryCarousel, Testimonials } from "@/components";

export default function Home() {
  return (
    <main className="">
      {/* <LandingPage /> */}
      <HeroCarousel />
      <CategoryCarousel />
      <Testimonials />
    </main>
  );
}
