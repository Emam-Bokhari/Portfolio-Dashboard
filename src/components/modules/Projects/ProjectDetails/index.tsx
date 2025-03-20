import Image from "next/image";
import { Fragment } from "react";
import calendar from "@/app/assets/schedule.png";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { FaBook, FaGithub } from "react-icons/fa";
import { TProject } from "@/app/types";
import { Button } from "@/components/ui/button";

export default function ProjectDetails({ project }: { project: TProject }) {
  return (
    <Fragment>
      <div className="mt-4  space-y-4 dark:bg-[#140C1C] rounded-md p-4">
        {/* image */}
        <div className="h-[600px]">
          <Image
            src={project?.thumbnail}
            alt="Featured Project"
            sizes="100vw"
            width={1200}
            height={500}
            className="w-full h-full object-cover rounded"
          />
        </div>
        {/* title and timeline*/}
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 xl:justify-between">
          <h2 className="text-2xl text-[#8750F7] font-bold">
            {project?.title}
          </h2>
          {project?.projectTimeline && (
            <div className="flex items-center space-x-3 ">
              <p className="text-base text-[#989BA4]">
                {project?.projectTimeline}
              </p>
              <Image
                width={25}
                height={25}
                alt="Calendar Icon"
                src={calendar}
              />
            </div>
          )}
        </div>
        {/* description */}
        <div>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            {project?.description}
          </p>
        </div>
        {/* key features */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">Key Features:</h3>
          <ul className="text-[#989BA4] text-base list-inside list-disc">
            {project?.keyFeatures.map((keyFeature, index) => (
              <li key={index}>{keyFeature}</li>
            ))}
          </ul>
        </div>

        {/* technology used */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">
            Uses Technologies:
          </h3>
          <ul className="text-[#989BA4] text-base list-inside list-disc">
            {project?.technologiesUsed.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        {/* project role */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">Project Role:</h3>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            {project?.projectRole}
          </p>
        </div>
        {/*  project goals & objectives */}
        {project?.projectGoals && (
          <div>
            <h3 className="text-[#8750F7] text-xl font-medium">
              Project goals & objectives:
            </h3>
            <p className=" text-base text-[#989BA4] leading-relaxed">
              {project?.projectGoals}
            </p>
          </div>
        )}
        {/*  challenges faced*/}
        {project?.challengesFaced && (
          <div>
            <h3 className="text-[#8750F7] text-xl font-medium">
              Challenges Faced:
            </h3>
            <p className=" text-base text-[#989BA4] leading-relaxed">
              {project?.challengesFaced}
            </p>
          </div>
        )}

        {/*  solution/outcome*/}
        {project?.solution && (
          <div>
            <h3 className="text-[#8750F7] text-xl font-medium">
              Solution/Outcome:
            </h3>
            <p className=" text-base text-[#989BA4] leading-relaxed">
              {project?.solution}
            </p>
          </div>
        )}

        {/*  future improvements*/}
        {project?.futureImprovements && (
          <div>
            <h3 className="text-[#8750F7] text-xl font-medium">
              Future Improvements:
            </h3>
            <p className=" text-base text-[#989BA4] leading-relaxed">
              {project?.futureImprovements}
            </p>
          </div>
        )}
        {/*  security considerations*/}
        {project?.securityConsiderations && (
          <div>
            <h3 className="text-[#8750F7] text-xl font-medium">
              Security Considerations:
            </h3>
            <p className=" text-base text-[#989BA4] leading-relaxed">
              {project?.securityConsiderations}
            </p>
          </div>
        )}
        {/* button */}
        <div className="flex gap-4 flex-wrap">
          <Button
            asChild
            className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
          >
            <Link href={project?.liveLink}>
              Live Demo <PlayCircle size={18} />
            </Link>
          </Button>
          {project?.frontendSourceCode && (
            <Button
              asChild
              className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
            >
              <Link
                href={project?.frontendSourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend GitHub <FaGithub size={18} />
              </Link>
            </Button>
          )}
          {project?.backendSourceCode && (
            <Button
              asChild
              className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
            >
              <Link
                href={project?.backendSourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend GitHub <FaGithub size={18} />
              </Link>
            </Button>
          )}
          {project?.apiDocumentation && (
            <Button
              asChild
              className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
            >
              <Link
                href={project?.apiDocumentation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Api Documentation <FaBook size={18} />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Fragment>
  );
}
