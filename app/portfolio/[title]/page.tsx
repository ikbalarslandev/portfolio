const ProjectPage = ({ params }: { params: { title: string } }) => {
  return (
    <main>
      <h1>{params.title}</h1>
      <p>Project description</p>
    </main>
  );
};

export default ProjectPage;
