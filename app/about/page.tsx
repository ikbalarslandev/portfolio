import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "Ikbal Arslan's personal background and interests.",
};

const AboutPage = () => {
  return (
    <main className="flex flex-col sm:flex-row items-center min-h-screen">
      <div className="flex-1 w-full relative flex items-end sm:items-start sm:pt-5 justify-center sm:h-screen">
        <Image
          src="/profile.jpg"
          alt="Ikbal Arslan"
          className="object-cover -z-10"
          layout="fill"
        />
        <h1 className="text-white text-3xl mb-2">About Ikbal</h1>
      </div>

      <div className="flex-1 flex items-center bg-stone-300 sm:h-screen">
        <div className="flex-1  text-center px-20">
          <p>
            Ikbal Arslan became a paid freelance developer by the age of 19. He
            became well versed with basic HTML, CSS, Wordpress. After high
            school, He went on to enroll in Digital Game Design. while studying
            game design He learned web technologies such as React and Nodejs
            After working with local businesses such as Manu Startup House and
            IKI Tech , He decided to pursue a career in web development. He
            currently works as a freelance developer and is open to new
            opportunities.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
