import Image from "next/image";

const Sponsored = () => {
  const logos = [
    { src: "/logo1.png", alt: "Logo 1" },
    { src: "/logo2.png", alt: "Logo 2" },
    { src: "/logo3.png", alt: "Logo 3" },
    { src: "/logo4.png", alt: "Logo 4" },
    { src: "/logo5.png", alt: "Logo 5" },
  ];

  return (
    <section className="bg-primary-light mb-section-gap py-8">
      <div className="container mx-auto flex gap-2 md:gap-4 lg:gap-8 justify-around place-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="w-1/5 text-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={75}
              className="object-contain md:w-40 2xl:w-48"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsored;
