import document from "../../assets/Icon/Document.svg";
import plus from "../../assets/Icon/Plus.svg";
import tick from "../../assets/Icon/Tick Square.svg";

const HowitWorks = () => {
  return (
    <section>
      <h1 className="text-black text-5xl font-semibold my-16">How it Works</h1>
      <div className="grid md:grid-cols-3 justify-center md:space-x-4 md:space-y-0 space-y-6">
        <div className="max-w-[328px]">
          <div className="grid grid-cols-1 pl-7 py-12 w-full bg-rose-50 rounded-3xl">
            <img
              loading="lazy"
              src={document}
              alt=""
              className="object-contain w-16 aspect-square"
            />
            <h1 className="mt-7 text-start text-3xl font-semibold tracking-tight text-zinc-900">
              Register
            </h1>
            <p className="mt-2 text-start text-base font-medium text-neutral-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>

        <div className="max-w-[328px]">
          <div className="grid grid-cols-1 pl-7 py-12 w-full bg-[#F5EBF2] rounded-3xl">
            <img
              loading="lazy"
              src={plus}
              alt=""
              className="object-contain w-16 aspect-square"
            />
            <h1 className="mt-7 text-start text-3xl font-semibold tracking-tight text-zinc-900">
              Add New Card
            </h1>
            <p className="mt-2 text-start text-base font-medium text-neutral-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>

        <div className="max-w-[328px]">
          <div className="grid grid-cols-1 pl-7 py-12 w-full bg-[#EBFCFF] rounded-3xl">
            <img
              loading="lazy"
              src={tick}
              alt=""
              className="object-contain w-16 aspect-square"
            />
            <h1 className="mt-7 text-start text-3xl font-semibold tracking-tight text-zinc-900">
              Success
            </h1>
            <p className="mt-2 text-start text-base font-medium text-neutral-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
