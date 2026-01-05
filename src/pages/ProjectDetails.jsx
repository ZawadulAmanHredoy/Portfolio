import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-14">
        <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
        <Link to="/" className="mt-4 inline-block text-indigo-600 hover:text-indigo-700">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24">
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <Link to="/" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
          ← Back
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">{project.name}</h1>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <img src={project.image} alt={project.name} className="h-64 w-full object-cover md:h-96" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-gray-900">Brief description</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>

            <h2 className="mt-8 text-xl font-bold text-gray-900">Challenges faced</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h2 className="mt-8 text-xl font-bold text-gray-900">Future plans</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
              {project.futurePlans.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Live project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-gray-200 px-4 py-2 text-center text-sm font-semibold text-gray-800 hover:border-indigo-200 hover:text-indigo-700"
              >
                GitHub repository (client)
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
