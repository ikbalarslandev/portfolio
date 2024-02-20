import { MetadataRoute } from "next";
// import { getAllProperties } from "@/data/property";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  //   const properties = await getAllProperties();
  //   const titleArray =
  //     properties &&
  //     properties.map((property) => property.title.split(" ").join("-"));

  //   const postEntries = titleArray
  //     ? titleArray?.map((title) => ({
  //         url: `${process.env.NEXT_PUBLIC_APP_URL}discover/${title}`,
  //       }))
  //     : [];

  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/portfolio`,
    },
  ];
}
