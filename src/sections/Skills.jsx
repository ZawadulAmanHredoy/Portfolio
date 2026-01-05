const skills = {
  Frontend: [
    { name: "React", level: 85 },
    { name: "JavaScript (ES6+)", level: 80 },
    { name: "Tailwind CSS", level: 75 },
    { name: "HTML5 & CSS3", level: 85 },
    { name: "React Router", level: 75 },
  ],
  Backend: [
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 70 },
    { name: "REST API", level: 70 },
  ],
  "Database & Auth": [
    { name: "MongoDB", level: 65 },
    { name: "Firebase Auth", level: 70 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 75 },
    { name: "Firebase Hosting", level: 70 },
    { name: "Postman", level: 65 },
  ],
};

function Bar({ value }) {
  return (
    <div className="w-full rounded-full bg-gray-100">
      <div
        className="h-2.5 rounded-full bg-indigo-600"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        <p className="mt-2 text-gray-600">
          Core technologies used to build modern MERN applications.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{group}</h3>
              <div className="mt-5 space-y-4">
                {list.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-800">{s.name}</span>
                      <span className="text-gray-500">{s.level}%</span>
                    </div>
                    <div className="mt-2">
                      <Bar value={s.level} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
