import Tooltip from "./utils/Tooltip";

export default function Hobbies() {
  return (
    <section className="pb-4 mt-4 first:mt-0">
      <div className="break-inside-avoid">
        <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">HOBBIES</h2>
        <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
          <ul className="list-inside pr-7">
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:">
              <div className="group tooltip">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">•</span>
                Reading
                <Tooltip>Drummond is a someone who really enjoys reading. He not only reads to relax, he also read newspapers to enlarge his knowledge about everything in the world.</Tooltip>
              </div>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:">
              <div className="group tooltip">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">•</span>
                Going on walks
                <Tooltip>Henry Drummond, as a calm and collected person, likes to go on long walk observing the beauties of nature.</Tooltip>
              </div>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:">
              <div className="group tooltip">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">•</span>
                Listening to Radio
                <Tooltip>Drummond likes to listen to the radio to listen to the opinion of other people so he can build his own opinions upon them.</Tooltip>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
