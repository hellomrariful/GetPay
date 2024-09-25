import image from "../../assets/Image/Group Card.png";

const LearnMore = () => {
  return (
    <section className="flex flex-col rounded-none mt-20">
      <div className="flex flex-col justify-center items-center px-16 py-16 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1141px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base leading-8 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-5xl text-start font-semibold tracking-tighter text-black leading-[72px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[64px]">
                  Earn the money and get bonuses
                </h2>
                <p className="mt-8 text-start font-medium text-neutral-400 max-md:max-w-full">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  <br />
                  Amet minim mollit non deserunt dolor do amet sint. Velit
                  officia consequat duis enim velit mollit.
                </p>
                {/* ExploreButton Button */}
                <button className="px-12 md:w-1/2 w-2/5 py-4 mt-8 font-bold tracking-tight text-center text-white bg-gradient-to-r from-[#00CDE2] to-[#0087A3] rounded-[40px] max-md:px-5">
  Explore Now
</button>
              </div>
            </div>
            <div className="flex mt-10 md:mt-0 flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img src={image} alt="" />
              <div />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
