import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Ikbal Arslan's portfolio of projects.",
};

const PortfolioPage = () => {
  return (
    <main>
      <h1>Portfolio</h1>
      <p>Welcome to my portfolio</p>
    </main>
  );
};

export default PortfolioPage;
