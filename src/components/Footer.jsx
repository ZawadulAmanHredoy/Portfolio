export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 md:flex-row">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} MD Zawadul Aman Hredoy. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">Built with React + Tailwind</p>
      </div>
    </footer>
  );
}
