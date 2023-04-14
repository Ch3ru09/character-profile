export default function Movies() {
  return (
    <section className="pb-4 mt-4 first:mt-0">
      <div className="break-inside-avoid">
        <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">MOVIES</h2>
        <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
          <ul className="list-inside pr-7">
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md print:">
              <div className="group tooltip hover:text-gray-700">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">&rsaquo;</span>
                <a href="https://www.imdb.com/title/tt0108052/" target="_blank">
                  Schindler's List - Directed by Steven Spielberg
                </a>
                <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">↗</span>
              </div>
              <p className="mt-2 ml-4 leading-normal text-gray-700 text-md c-default">Schindler's list is the story of a German saving lives of Jewish people threatened by the Holocaust in Nazi Germany. In a country that despised Jew, Schindler decides to go against that and it resonates well with Drummonds beliefs of fighting what what he thinks is right even while facing opposition.</p>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md print:">
              <div className="group tooltip hover:text-gray-700">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">&rsaquo;</span>
                <a href="https://www.imdb.com/title/tt0097165/?ref_=nv_sr_srsg_1_tt_7_nm_1_q_the%2520dead%2520poet" target="_blank">
                  Dead Poets Society - Directed by Peter Weir
                </a>
              </div>
              <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">↗</span>
              <p className="mt-2 ml-4 leading-normal text-gray-700 text-md c-default">John Keating arrives as a new English teacher at an elite boys' school and inspires his new students to break free from what society want from them and "live more in the moment"; Carpe Diem. Similarly, Henry Drummond is a person that appreciates the encouragement that Keating gave his students to pursue their dreams</p>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md print:">
              <div className="group tooltip hover:text-gray-700">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">&rsaquo;</span>
                <a href="https://www.imdb.com/title/tt0056592/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_to%2520kill%2520a%2520mo" target="_blank">
                  To Kill a Mockingbird - Directed by Robert Mulligan
                </a>
                <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">↗</span>
              </div>
              <p className="mt-2 ml-4 leading-normal text-gray-700 text-md c-default">
                Similiarly to his{"[Drummond]"} own trial, Atticus Finch from <em>To Kill a Mockingbird</em> fought against something that he deemed unfair: a black man being falsely accused of raping a white woman. Futhermore, he does this regardless of what the society around him thought of it. Both Atticus and Drummond fought to defend someone that they felt were wronged by their own society. Thus, Drummond like watching this movie for the values that Atticus and himself share.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
