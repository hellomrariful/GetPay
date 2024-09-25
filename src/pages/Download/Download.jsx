
const Download = () => {
  return (
    <div className=" container mx-auto">
      <section className="flex flex-col rounded-none mt-20">
        <div className="flex flex-col justify-center items-center px-20 py-20 w-full bg-cyan-50 rounded-[32px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[649px]">
            <h2 className="ml-3.5 text-5xl font-semibold tracking-tighter leading-none text-black max-md:max-w-full max-md:text-4xl">
              Download Our Mobile App
            </h2>
            <p className="mt-4 text-base font-medium leading-8 text-center text-neutral-400 max-md:mr-2.5 max-md:max-w-full">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="flex gap-5 self-center mt-12 max-w-full w-[368px] max-md:mt-10">
              <a
                href="#"
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <img
                  loading="lazy"
                  src="https://i.postimg.cc/wB2YSv6p/image.png"
                  alt="Download on the App Store"
                  className="object-contain shrink-0 max-w-full aspect-[3.37] w-[175px]"
                />
              </a>
              <a
                href="#"
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <img
                  loading="lazy"
                  src="https://i.postimg.cc/Nj83HM2H/image.png"
                  alt="Get it on Google Play"
                  className="object-contain shrink-0 max-w-full aspect-[3.37] w-[175px]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
