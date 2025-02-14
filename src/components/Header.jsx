import logo from "../assets/ModeliseMe_Logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between mx-[calc(0.5em+6vw)] font-poppins font-[400] pt-[2.5rem]">
      <div className="flex md:mx-[1.5rem] items-center">
        <img
          src={logo}
          className="mr-[0.5em] size-[48px] md:size-[60px] sm:mr-[1.5rem] font-extrabold"
        />
        <div className="text-white">ModeliseMe</div>
      </div>
    </div>
  );
};

export default Header;
