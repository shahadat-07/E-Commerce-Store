import { HeroCarousel, CategoryCarousel } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroCarousel />
      <CategoryCarousel />
    </main>
  );
}
