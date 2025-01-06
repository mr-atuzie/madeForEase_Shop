import logo from "../assets/newLogo.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-black w-full fixed top-0 left-0 z-50 overflow-hidden">
      <div className="w-[90%] lg:w-[95%] flex items-center justify-between h-[60px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 lg:gap-4">
          <img
            className=" w-10 h-10 rounded-lg object-cover"
            src={logo}
            alt=""
          />
          {/* <h1 className="tracking-wide text-yellow-500 text-xs lg:text-base font-bold uppercase">
            Made For Ease SHOP
          </h1> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
