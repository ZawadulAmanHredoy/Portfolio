import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-28 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-indigo-600">Portfolio</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            MD Zawadul Aman Hredoy
          </h1>
          <p className="mt-3 text-lg font-semibold text-gray-800">
            MERN Stack Developer
          </p>
          <p className="mt-4 text-gray-600">
            Building scalable, responsive web applications with clean UI and reliable backend integration.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-800 hover:border-indigo-200 hover:text-indigo-700"
            >
              View Projects
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://github.com/ZawadulAmanHredoy"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-indigo-600"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/hredoy11189/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-indigo-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.facebook.com/zawadul.aman.hredoy"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-indigo-600"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/profile.jpg"
            alt="MD Zawadul Aman Hredoy"
            className="h-80 w-72 rounded-3xl object-cover shadow-md md:h-[420px] md:w-[360px]"
          />
        </div>
      </div>
    </section>
  );
}
