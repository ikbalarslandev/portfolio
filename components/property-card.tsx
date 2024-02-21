import Image from "next/image";
import { Button } from "@/components/ui/button";

const PropertyCard = ({ property }: any) => {
  const rolesString = property.roles.join(" / ");

  return (
    <div
      className=" my-4 h-[300px] max-w-[700px] rounded-md shadow-xl flex flex-col sm:flex-row "
      key={property.id}
    >
      <div className=" flex flex-col">
        <div className=" h-36 sm:w-80 sm:h-full relative">
          <Image
            src={property.imgUrl}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="rounded-t-md sm:rounded-l-md sm:rounded-r-none "
          />
        </div>
      </div>

      <div className="bg-white flex-1 rounded-b-md flex flex-col px-1 py-1 sm:px-4 pt-3 sm:rounded-r-md sm:rounded-l-none">
        <p className="text-sm">{rolesString}</p>
        <h1 className=" my-2 text-lg ">{property.title}</h1>
        <p className="sm:mt-4">{property.description}</p>
        <Button
          variant="link"
          className="border-2 border-stone-400 ml-auto  px-2 mt-auto  sm:mb-2"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
