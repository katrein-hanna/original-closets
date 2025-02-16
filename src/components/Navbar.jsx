import logo from "../assets/logo2.png";

export default function Navbar() {
  return (
    <nav className="sticky mt-5 border-b-2 border-blue-900 px-3.5 flex justify-between items-center w-full  mx-auto">
      <div className="w-7xl mx-auto">
        <div className="flex justify-end p-2 gap-4 text-blue-900 text-2xl">
          <h2 dir="rtl" className="">
            (416) 901-2567
          </h2>
          <h2>| </h2>
          <h2>Contact</h2>
        </div>
        <div className="flex justify-between items-center ">
          <div className="">
            <img src={logo} className="w-90 pb-3 mt-[-30px]" alt="" />
          </div>
          <div></div>
          <div className=" text-xl">
            <ul className="flex justify-center items-center gap-10 text-blue-900 ">
              <li>home</li>
              <li>services</li>
              <li>about us</li>
            </ul>
          </div>
          {/* <div className="mr-10">
            <button className="mb-1 bg-blue-900 text-white text-xl border-2 p-2 rounded-2xl">
              Contact us
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
