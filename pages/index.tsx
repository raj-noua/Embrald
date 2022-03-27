/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { Icon, MapPin, Clock, Phone } from "react-feather";

const SectionHeader = ({
  text,
  color = "secondary",
}: {
  text?: string;
  color?: string;
}) => {
  return (
    <div className="w-full py-10 flex justify-center">
      <p
        className={`font-bold text-lg lg:text-2xl border-b-2 px-[5px] text-${color}`}
      >
        {text}
      </p>
    </div>
  );
};

interface ServiceItemProps {
  title?: string;
  description?: string;
  Icon?: Icon;
}
const Service = ({ title, description, Icon }: ServiceItemProps) => {
  return (
    <div className="my-[10px] lg:my-0 py-[20px] border-[1px] border-slate hover:bg-secondaryop cursor-pointer duration-[250ms]">
      {Icon ? (
        <div className="w-full py-[10px] flex justify-center">
          <Icon />
        </div>
      ) : null}
      <div className="w-full text-center font-semibold py-[5px]">{title}</div>
      <div className="px-[20px] text-center">{description}</div>
    </div>
  );
};

interface TopPicksProps {
  image: string;
  description?: string;
}
const TopPick = ({ image, description }: TopPicksProps) => {
  return (
    <div className="relative cursor-pointer">
      <img src={image} />
      {description ? (
        <div className="absolute top-0 left-0 w-full h-full bg-primaryop text-center flex justify-center items-center text-white opacity-0 hover:opacity-100 duration-[250ms] px-[10px]">
          Pariatur aliquip magna enim nulla nulla sunt commodo sint est dolor
          aliqua nulla.
        </div>
      ) : null}
    </div>
  );
};

interface SayHelloAtItemProps {
  Icon?: Icon;
  smText: string;
  text: string;
}

const SayHelloAtItem = ({ Icon, smText, text }: SayHelloAtItemProps) => {
  return (
    <div className="flex">
      {Icon ? (
        <div className="w-[20%] flex justify-center pt-[10px]">
          <Icon />
        </div>
      ) : null}
      <div className="w-max text-sm w-[80%]">
        <span className="text-primary">{smText}</span>
        <br />
        {text}
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      {/* Range section start */}
      <SectionHeader text="Our Range" />
      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-[15px]">
        <Service
          title="Rain Showers"
          description="Minim cupidatat sit ipsum et duis esse voluptate nisi in enim ea enim ullamco irure."
        />
        <Service
          title="Angle Cocks"
          description="Minim cupidatat sit ipsum et duis esse voluptate nisi in enim ea enim ullamco irure."
        />
        <Service
          title="Pillar Cocks"
          description="Minim cupidatat sit ipsum et duis esse voluptate nisi in enim ea enim ullamco irure."
        />
        <Service
          title="Bib Shower"
          description="Minim cupidatat sit ipsum et duis esse voluptate nisi in enim ea enim ullamco irure."
        />
      </div>
      {/* Range section end */}

      {/* Top items start */}
      <SectionHeader text="Top items" color="primary" />
      <div className="w-full flex justify-end pr-[20px]">
        <Link href="#">
          <a>View all</a>
        </Link>
      </div>
      <div className="bg-secondary px-[20px]">
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 py-[20px]">
          <TopPick
            image="p1.jpg"
            description="Proident aliquip aliqua irure enim proident esse ipsum cillum anim."
          />
          <TopPick
            image="p2.jpg"
            description="Duis et quis qui nisi officia sit proident commodo et deserunt consequat quis irure."
          />
          <TopPick image="p3.jpg" description="Lorem culpa minim quis sit." />
          <TopPick
            image="p4.jpg"
            description="Ipsum velit ea ullamco reprehenderit in consectetur ad cupidatat occaecat aliquip enim nisi."
          />
        </div>
      </div>
      {/* Top items end */}

      {/* Vision and Mission start */}
      <SectionHeader text="Vision and Missions" />
      <div className="w-full flex flex-wrap vision-mission py-[20px]">
        <div className="w-full lg:w-1/2">
          <div className="w-full px-[20px] lg:px-[50px]">
            <SectionHeader text="Vision" />
            <div className="text-white">
              Consequat eiusmod consectetur occaecat sit ullamco in. Fugiat ea
              ea fugiat dolore magna excepteur incididunt officia. Adipisicing
              magna nisi pariatur duis. Excepteur et incididunt minim amet
              labore nostrud eu dolor eu est est sunt. Irure cupidatat est aute
              esse enim laboris nostrud proident commodo deserunt. Lorem ad
              velit enim ex aute deserunt veniam mollit est laboris.
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full px-[20px] lg:px-[50px]">
            <SectionHeader text="Mission" />
            <div className="text-white">
              Consequat eiusmod consectetur occaecat sit ullamco in. Fugiat ea
              ea fugiat dolore magna excepteur incididunt officia. Adipisicing
              magna nisi pariatur duis. Excepteur et incididunt minim amet
              labore nostrud eu dolor eu est est sunt. Irure cupidatat est aute
              esse enim laboris nostrud proident commodo deserunt. Lorem ad
              velit enim ex aute deserunt veniam mollit est laboris.
            </div>
          </div>
        </div>
      </div>
      {/* Vision and Mission end */}

      {/* Say hello At start */}
      <SectionHeader text="Say Hello At" />
      <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3 px-[15px]">
        <SayHelloAtItem
          smText="See you at..."
          text="Plot No L 211/2 O Gundlav New GIDC Valsad, Valsad396038,Gujarat,India"
          Icon={MapPin}
        />
        <SayHelloAtItem
          smText="On working days"
          text={"Working on all days of week from 9:00AM to 8:00PM"}
          Icon={Clock}
        />
        <SayHelloAtItem
          smText="Give us a call at"
          text="1234567890, 1234567890"
          Icon={Phone}
        />
      </div>
      {/* Say hello At end */}
    </>
  );
};

export default Home;
