export default function Quotes() {
  return (
    <section className="pb-4 mt-4 first:mt-0">
      <div className="break-inside-avoid">
        <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">QUOTES</h2>
        <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
          <ul className="list-inside pr-7">
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:">
              <div className="group">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">{">"}</span>
                "Think for yourselves and let others enjoy the privilage to do so, too" - Voltaire
              </div>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:">
              <div className="group">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">{">"}</span>
                "Without Freedom of thought there can be no such thing as wisdom" - Benjamin Franklin
              </div>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:">
              <div className="group">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">{">"}</span>
                "Living together is an art. It's a patient art, it's a beautiful art, it's fascinating" - Pope Francis
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
