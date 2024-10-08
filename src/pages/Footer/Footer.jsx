import call from '../../assets/Icon/Call.svg';
import message from '../../assets/Icon/Message.svg';
import location from '../../assets/Icon/location.svg';

const Footer = () => {
  const companyLinks = ["Home", "About", "Blog", "Pages"];
  const helpLinks = [
    "Customer Support",
    "Terms & Conditions",
    "Privacy Policy",
  ];

  return (
    <footer className="w-full bg-zinc-900 mt-10">
      <div className="flex overflow-hidden flex-col justify-center md:px-20 lg:px-10 px-36 py-20 max-md:px-5 mt-20 max-w-[1140px] mx-auto">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start w-full max-md:mt-10">
                {/* Logo and Contact Info */}
                <h2 className="text-2xl font-bold tracking-tighter text-white">
                  GetPay
                </h2>
                
                <div className="flex gap-4 self-stretch mt-11 max-md:mt-10">
                  <div className="flex flex-col my-auto">
                    <img
                      loading="lazy"
                      src={call}
                      alt=""
                      className="object-contain w-6 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src={message}
                      alt=""
                      className="object-contain mt-12 w-6 aspect-square max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col items-start text-base font-medium text-white">
                    <div className="tracking-tight">Phone</div>
                    <div className="mt-1.5 text-sm text-neutral-400">
                      (219) 555-0114
                    </div>
                    <div className="mt-5 tracking-tight">Email</div>
                    <div className="self-stretch mt-1.5 text-sm text-neutral-400">
                      getpay@example.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
              <div className="grow mt-4 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {/* Company Links */}
                  <nav className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                    <h3 className="self-stretch text-base tracking-tight text-white">
                      Company
                    </h3>
                    <ul className="flex flex-col grow items-start text-sm font-medium whitespace-nowrap text-neutral-400 max-md:mt-10">
                      {companyLinks.map((link, index) => (
                        <li key={index} className={index > 0 ? "mt-5" : "mt-7"}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Help Links */}
                  <nav className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                    <h3 className="self-stretch text-base tracking-tight text-white">
                      Help
                    </h3>
                    <ul className="flex flex-col grow items-start text-sm font-medium whitespace-nowrap text-neutral-400 max-md:mt-10">
                      {helpLinks.map((link, index) => (
                        <li key={index} className={index > 0 ? "mt-5" : "mt-7"}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Newsletter */}
                  <section className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start text-sm text-white max-md:mt-10">
                      <h3 className="self-stretch text-xl font-bold leading-relaxed">
                        Subscribe to our newsletter
                      </h3>
                      <p className="mt-2 font-medium leading-6 text-neutral-400">
                        The latest insights, resources, expert opinions and
                        company news.
                      </p>
                      <form className="mt-4">
                        <label htmlFor="subscribe-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="subscribe-email"
                          placeholder="Enter your email"
                          className="px-7 py-1.5 font-semibold tracking-tight leading-8 text-center whitespace-nowrap rounded-[40px] max-md:px-5"
                          required
                        />
                        <button
                          type="submit"
                          className="px-7 py-1.5 mt-4 font-semibold tracking-tight leading-8 text-center whitespace-nowrap rounded-[40px] max-md:px-5"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="flex flex-wrap gap-10 mt-2 max-w-full font-medium w-[500px]">
          <div className="flex flex-auto gap-4">
            <img
              loading="lazy"
              src={location}
              alt=""
              className="object-contain shrink-0 my-auto w-6 aspect-square"
            />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
              <h4 className="self-start text-base tracking-tight text-white">
                Address
              </h4>
              <p className="mt-1.5 text-sm text-neutral-400">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
          </div>
          <div className="my-auto text-sm text-neutral-400">Contact</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
