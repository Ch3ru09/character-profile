export default function Header() {
  const name = "Henry Drummond";

  return (
    <header className="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-8">
      <div className="block">
        <h1 className="mb-0 text-5xl font-bold text-gray-750">{name}</h1>
        <h2 className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">Full Stack Web Development</h2>
        <h3 className="m-0 mt-2 ml-2 font-semibold text-md text-gray-550 leading-snugish">San Francisco, California</h3>
      </div>
      <div className="justify-between px-3 py-3 mt-0 mb-5 text-3xl font-bold leading-none text-gray-200 initials-container bg-gray-750 print:bg-black">
        <div className="text-center initial">H</div>
        <div className="text-center initial">D</div>
      </div>
    </header>
  );
}
