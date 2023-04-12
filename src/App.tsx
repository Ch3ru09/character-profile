import Header from "./components/Header";

export default function App() {
  return (
    <div className="bg-hero-zig-zag">
      <main className="font-jost hyphens-manual">
        <Page>
          <Header />
        </Page>
        <Page></Page>
      </main>
    </div>
  );
}

function Page({ children }: PageProps) {
  console.log(children);

  return (
    <div className="max-w-3xl p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 w-letter rounded-2xl print:bg-white">
      {children}
    </div>
  );
}

interface PageProps {
  children?: React.ReactNode
}