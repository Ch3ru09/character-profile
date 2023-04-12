import Header from "./Header";

export default function App() {
  return (
    <div className="bg-hero-zig-zag">
      <main className="font-jost hyphens-manual">
        <Page />
        <Page />
      </main>
    </div>
  );
}
function Page() {
  return (
    <div className="max-w-3xl p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
      <Header />
    </div>
  );
}
