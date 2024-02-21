import { Metadata } from "next";
import data from "@/data/data";
import PropertyCard from "@/components/property-card";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Ikbal Arslan's portfolio of projects.",
};

const PortfolioPage = () => {
  return (
    <main className="flex flex-col min-h-screen items-center bg-stone-300">
      <h1 className=" my-4 text-2xl text-stone-600">Portfolio</h1>
      <div className=" mx-2  ">
        {data.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
};

export default PortfolioPage;
