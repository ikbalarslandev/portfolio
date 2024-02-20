import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}): Promise<Metadata> {
  const title = params.title.split("-").join(" ");

  return {
    title: title,
  };
}

const ProjectPage = ({ params }: { params: { title: string } }) => {
  return (
    <main>
      <h1>{params.title}</h1>
      <p>Project description</p>
    </main>
  );
};

export default ProjectPage;
