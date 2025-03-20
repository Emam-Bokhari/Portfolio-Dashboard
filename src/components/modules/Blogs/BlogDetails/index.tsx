import { Fragment } from "react";
import Image from "next/image";
import calendar from "@/app/assets/schedule.png";

import moment from "moment-timezone";
import { TBlog } from "@/app/types";
import { Badge } from "@/components/ui/badge";

export default function BlogDetails({ blog }: { blog: TBlog }) {
  const badgeColors = [
    { base: "bg-blue-100 text-blue-800", hover: "hover:bg-blue-200" },
    { base: "bg-green-100 text-green-800", hover: "hover:bg-green-200" },
    { base: "bg-yellow-100 text-yellow-800", hover: "hover:bg-yellow-200" },
    { base: "bg-purple-100 text-purple-800", hover: "hover:bg-purple-200" },
    { base: "bg-pink-100 text-pink-800", hover: "hover:bg-pink-200" },
    { base: "bg-indigo-100 text-indigo-800", hover: "hover:bg-indigo-200" },
    { base: "bg-teal-100 text-teal-800", hover: "hover:bg-teal-200" },
  ];

  const getRandomColor = () =>
    badgeColors[Math.floor(Math.random() * badgeColors.length)];

  return (
    <Fragment>
      <div className="mt-10  space-y-4">
        {/*  Image */}
        <div className="h-[600px]">
          <Image
            src={blog?.thumbnail}
            alt={blog?.title}
            sizes="100vw"
            width={1200}
            height={500}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* title and published date*/}
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 xl:justify-between">
          <h2 className="text-2xl text-[#8750F7] font-bold">{blog?.title}</h2>
          <div className="flex items-center space-x-3 ">
            <p className="text-base text-[#989BA4]">
              {" "}
              {moment(blog?.createdAt).tz("Asia/Dhaka").format("MMMM D, YYYY")}
            </p>
            <Image width={25} height={25} alt="Calendar Icon" src={calendar} />
          </div>
        </div>
        {/* category and author name */}
        <div className="space-y-4">
          <p className=" text-base text-[#989BA4] leading-relaxed">
            {blog?.category}
          </p>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            {blog?.authorName}
          </p>
        </div>
        {/* introduction */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">Introduction</h3>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            {blog?.introduction}
          </p>
        </div>

        {/* main content */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">Main Content:</h3>
          <div
            className="text-[#989BA4] "
            dangerouslySetInnerHTML={{ __html: blog.mainContent }}
          ></div>
        </div>
        <div />
        {/* tags */}
        {blog?.tags?.length ? (
          <div className="space-y-2">
            <h3 className="text-[#8750F7] text-xl font-medium">Tags:</h3>
            <div className="flex gap-4 flex-wrap">
              {blog?.tags?.map((tag, index) => {
                const color = getRandomColor();
                return (
                  <Badge
                    key={index}
                    className={`${color.base} ${color.hover} px-3 py-1 rounded-md transition-all`}
                  >
                    {tag}
                  </Badge>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
}
