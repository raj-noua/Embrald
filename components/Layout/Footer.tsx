import Link from "next/link";
import { links } from "./Header";

const Footer = () => {
  return (
    <footer className="mt-[20px] bg-primary">
      <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3 px-[15px]">
        <div className="h-full py-[30px] px-[40px]">
          <div className="text-secondary text-3xl font-bold">About us</div>
          <div className="text-white mt-[10px] lg:mt-[20px]">
            Velit reprehenderit laboris ea ad ea sunt id sit ex aliquip
            consectetur dolor mollit cupidatat in ut esse dolor ut id aute
            consequat exercitation sed laboris adipisicing consectetur enim
            dolore eiusmod dolore id nulla consequat esse duis duis dolor.
          </div>
        </div>
        <div className="h-full py-[30px] px-[40px]">
          <div className="text-secondary text-3xl font-bold">Quick Link</div>
          <div className="text-white mt-[10px] lg:mt-[20px] flex flex-col">
            {links.map((item, index) => (
              <Link href={item.url} key={index}>
                <a className="mt-[10px]">{item.text}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-full py-[30px] px-[40px]">
          <div className="text-secondary text-3xl font-bold">
            Have question?
          </div>
          <div className="text-white mt-[10px] lg:mt-[20px]">
            Write us at <a href="mailto:info@example.com">info@example.com</a>
          </div>
        </div>
      </div>

      <div className="bg-secondary w-full text-center">
        Copyright &copy; All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
