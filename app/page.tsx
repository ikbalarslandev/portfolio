import Image from "next/image";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Image
        src="https://preview.redd.it/1sl7nsez7nry.png?width=960&crop=smart&auto=webp&s=7214de5636c1bdaa910f9af5991435394b8a4a29"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-10"
      />

      <div className=" pt-10 pb-3 flex flex-col items-center ">
        <Image
          src="/profile.jpg"
          alt="Picture of Ikbal Arslan"
          width={200}
          height={200}
          className="bg-gray-300 rounded-full "
        />
        <h1 className="text-4xl mt-2 text-white ">Ikbal Arslan</h1>
        <p className="mt-5 text-white text-xl">Javascript Developer</p>
      </div>
      <div className=" bg-zinc-300 py-20 flex flex-col gap-3 items-center px-8  ">
        <p className="text-xl">Hey 👋</p>
        <p className="text-lg text-center">
          Ikbal is here. I&apos;m a javascript developer with a focus on front
          end web technologies. I use the web to educate, innovate, and create.
        </p>
      </div>
      <div className=" flex-1  flex min-h-40">
        <Link
          href="https://github.com/ikbalarslann"
          className="flex-1 bg-red-900 text-white flex items-center justify-center"
        >
          <div>
            <FaGithub className="w-10 h-10 " />
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/muhammed-ikbal-arslan-674656202/"
          className="flex-1  bg-amber-700  text-blue-900 flex items-center justify-center "
        >
          <GrLinkedin className="w-10 h-10 bg-white rounded-md " />
        </Link>
      </div>
    </main>
  );
}

{
}
