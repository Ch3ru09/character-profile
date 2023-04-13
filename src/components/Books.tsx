export default function Books() {
  return (
    <section className="pb-4 mt-4 first:mt-0">
      <div className="break-inside-avoid">
        <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">Books</h2>
        <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
          <ul className="list-inside pr-7">
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md print:">
              <div className="group tooltip hover:text-gray-700">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">&rsaquo;</span>
                <a href="https://www.marxists.org/archive/marx/works/download/pdf/Manifesto.pdf" target="_blank">
                  Manifesto of the Communist Party - Karl Marx
                </a>
                <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">↗</span>
              </div>
              <p className="mt-2 ml-4 leading-normal text-gray-700 text-md c-default">
                Drummond is a person that encourages reform and progress in society and Karl Marx's <em>Manifesto of the Communist Party</em> is one of the most influential political books of all time.
              </p>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md print:">
              <div className="group tooltip hover:text-gray-700">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">&rsaquo;</span>
                <a href="https://www.vliz.be/docs/Zeecijfers/Origin_of_Species.pdf" target="_blank">
                  On the Origin of Species - Charles Darwin
                </a>
              </div>
              <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">↗</span>
              <p className="mt-2 ml-4 leading-normal text-gray-700 text-md c-default">Drummons is someone that likes to see perspectives of everyone and then makes his mind up after thinking for himself and the origin of humans was a heated topic that he likes thinking about</p>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md print:">
              <div className="group tooltip hover:text-gray-700">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">&rsaquo;</span>
                <a href="https://cdnsm5-ss3.sharpschool.com/UserFiles/Servers/Server_4204286/Image/Grade9GT--TheBookThiefMarkusZusak.pdf" target="_blank">
                  The Book Thief - Markus Zusak
                </a>
                <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">↗</span>
              </div>
              <p className="mt-2 ml-4 leading-normal text-gray-700 text-md c-default">The Book Theif is a book about a jewish girl risking her life in nazi Germany to hopefully save a Jew from the german SS and this book shows that no one escapes death so why do we need to kill each other over what we think {"(or whether we are Jew or German)"}. It proves to himself the stupidity of humanity trying to restrict something fundamental like thinking.</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
