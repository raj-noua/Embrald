import { useState, useEffect, memo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "react-feather";

export const links = [
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

const text = "We are premium quality bath fittings manufacturers";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleMenu = useCallback(() => {
    setIsNavOpen((o) => !o);
  }, []);

  useEffect(() => {
    let direction = 1;
    let interval = setInterval(() => {
      setIndex((i) => {
        if (i <= 0) direction = 1;
        else if (i === text.length) direction = -1;

        return i + direction;
      });
    }, 120);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <header className="bg-primary fixed z-[100] w-full h-[100px] flex">
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
            className={`fixed z-[99] top-50 ${
              isNavOpen ? "left-0" : "-left-full"
            } w-screen h-screen bg-primary lg:hidden flex flex-col pt-[50px] items-center text-white duration-200`}
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

        {/* Banner section start */}
        {/* Banner section end */}
      </header>
      <div className="h-[100px]"></div>
      <div
        className={`w-full h-[50vh] lg:h-screen relative`}
        style={{ clipPath: "inset(0)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="banner2.jpg"
          alt="banner"
          className="w-full h-1/2 lg:h-screen object-cover fixed t-[100px]"
        />
        <div className="absolute w-full h-full bg-[#000000AA] top-0 left-0 flex justify-center items-center text-center">
          <span className="text-white text-base px-2 lg:text-4xl font-bold">
            {text.slice(0, index)}
          </span>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
