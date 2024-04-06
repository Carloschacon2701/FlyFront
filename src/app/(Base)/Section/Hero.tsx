import React from "react";
import SearchDestiny from "../Components/SearchDestiny";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[590px] flex justify-around bg-slate-50 py-10">
      <div className="relative">
        <p className="text-7xl font-semibold leading-[1.3] text-darkBlue">
          Let&apos;s <br />{" "}
          <span className="underline decoration-orange-500 ">
            travel around
          </span>{" "}
          the <br />
          world
        </p>
        <p>
          A new place to make travels and discover <br /> new places around the
          world
        </p>
        <SearchDestiny />
      </div>
      <div className="flex items-center gap-4 ">
        <div className="flex flex-col gap-5">
          <Image
            alt="image"
            src="https://myecommercefile.s3.us-east-2.amazonaws.com/muhammadh-saamy-NsTVBS1lBbk-unsplash.jpg"
            width={300}
            height={280}
            className="rounded-lg w-60 h-[250px] shadow-lg"
          />

          <Image
            alt="image"
            src="https://myecommercefile.s3.us-east-2.amazonaws.com/paolo-nicolello-2gOxKj594nM-unsplash.jpg"
            width={300}
            height={300}
            className="rounded-lg w-60 h-[200px] shadow-lg"
          />
        </div>
        <Image
          alt="image"
          src="https://myecommercefile.s3.us-east-2.amazonaws.com/polynesia-3021072_1280.jpg"
          width={300}
          height={300}
          className="rounded-lg w-60 h-[300px] shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
