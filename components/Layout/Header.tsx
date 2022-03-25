import { useState, useEffect, memo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "react-feather";

const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Products",
    url: "/",
  },
  {
    text: "About Us",
    url: "/",
  },
  {
    text: "Contact Us",
    url: "/",
  },
];

interface CustomLinkProps {
  item: { text: string; url: string };
  className?: string;
  handleClick?: () => void;
}
const CustomLink = ({ item, className }: CustomLinkProps) => {
  return (
    <Link href={item.url}>
      <a
        onClick={() => alert("clicked")}
        className={`border-b-2 px-[5px] ${className}`}
      >
        {item.text}
      </a>
    </Link>
  );
};

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsNavOpen((o) => !o);
  }, []);

  return (
    <>
      <header className="bg-primary fixed w-full h-[100px] flex">
        <div className="w-[70%] lg:w-[20%] flex items-center ">
          <Image src="/logo.jpg" alt="logo" width="100%" height={50} />
          <p className="text-white text-sm">
            <span className="uppercase">Embrald</span>
            <br />
            <span className="text-[10px] lg:text-[14px]">
              Premium Bath Fittings
            </span>
          </p>
        </div>
        <div className="w-[30%] lg:w-[80%] h-[100%]">
          <div className="w-full h-full flex justify-center items-center lg:hidden">
            <Menu color="white" size={32} onClick={toggleMenu} />
          </div>

          {/* Desktop menu start */}
          <div className="w-full h-full hidden lg:flex justify-end items-center pr-[30px] text-white">
            {links.map((item, index) => (
              <CustomLink
                className="mr-[20px] border-secondary"
                item={item}
                key={index}
              />
            ))}
          </div>
          {/* Desktop menu end */}

          {/* Mobile menu start */}
          <div
            className={`fixed top-0 ${
              isNavOpen ? "left-0" : "-left-full"
            } w-screen h-screen bg-secondaryop lg:hidden flex flex-col justify-center items-center text-primary duration-200`}
            onClick={toggleMenu}
          >
            {links.map((item, index) => (
              <CustomLink
                className="mb-[20px] border-white"
                item={item}
                key={index}
              />
            ))}
          </div>
          {/* Mobile menu end */}
        </div>
      </header>
    </>
  );
};

export default memo(Header);
