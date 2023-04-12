import Header from "./components/Header";
import Quotes from "./components/Quotes";
import type { ReactNode } from "react";

export default function App() {
  return (
    <div className="bg-hero-zig-zag">
      <main className="font-jost hyphens-manual">
        <Page marginSide={"r"}>
          <Header />
          <Quotes />
        </Page>
        <Page marginSide={"l"}></Page>
      </main>
    </div>
  );
}

function Page({ children, marginSide }: PageProps) {
  return <div className={`p-3 m${marginSide}-0 mx-auto my-6 bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 w-letter rounded-2xl print:bg-white`}>{children}</div>;
}

interface PageProps {
  children?: ReactNode | ReactNode[];
  marginSide?: string;
}

