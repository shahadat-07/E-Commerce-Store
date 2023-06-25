import Image from "next/image";

const NewsCard = (item) => {
  const { image, date, title, description, brand } = item.item;
  return (
    <div className="flex flex-col md:flex-row gap-5 border border-tertiary rounded-xl p-5 hover:cursor-grab	">
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={image}
          alt="News Image"
          width={500}
          height={300}
          className="rounded-xl object-contain"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-primary text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">
          <span className="text-primary border border-tertiary rounded-xl text-xs px-4 py-1">
            {date}
          </span>
        </p>
        <p className="text-primary mb-4 text-sm">{description}</p>
        <p className="text-primary text-sm">{`By ${brand}`}</p>
      </div>
    </div>
  );
};

export default NewsCard;
