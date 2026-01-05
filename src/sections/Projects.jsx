import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <p className="mt-2 text-gray-600">Selected work with live demos and details.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <img src={p.image} alt={p.name} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <Link
                    to={`/projects/${p.id}`}
                    className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    View Details
                  </Link>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:border-indigo-200 hover:text-indigo-700"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
