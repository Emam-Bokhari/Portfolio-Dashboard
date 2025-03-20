"use client";
import { Award, Book, Folder, Home, LogOut, Settings } from "lucide-react";
import logo from "@/app/assets/Logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { FilePlus, Edit, Users } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import SidebarGroupComponent from "./sideBarGroupComponent";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { logoutFromCookie } from "@/app/services/Auth";

// menu items

const application = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
];

const project = [
  {
    title: "Create Project",
    url: "/projects/create-project",
    icon: FilePlus,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Folder,
  },
];

const skill = [
  {
    title: "Create Skill",
    url: "/skills/create-skill",
    icon: FilePlus,
  },
  {
    title: "Skills",
    url: "/skills",
    icon: Award,
  },
];

const blog = [
  {
    title: "Create Blog",
    url: "/blogs/create-blog",
    icon: Edit,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: Book,
  },
];

const contact = [
  {
    title: "Contacts",
    url: "/contacts",
    icon: Users,
  },
];

export function AppSidebar({
  user,
}: {
  user: { email: string; exp: number; iat: number };
}) {
  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = async () => {
    await logoutFromCookie();
    router.push("/login");
  };

  return (
    <Sidebar className="bg-[#140C1C] border-[#27272A]">
      <SidebarHeader className="bg-[#140C1C]">
        <Link href="/">
          <div className="flex gap-2">
            <Image src={logo} width={40} height={40} alt="Logo" />
            <div className="leading-[0.8] text-sm">
              <h2 className="text-base text-white">Portfolio</h2>
              <small className="text-xs text-white">Moshfiqur Rahman</small>
            </div>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-[#140C1C]">
        <SidebarGroupComponent
          label="Application"
          items={application}
          pathName={pathName}
        />
        <SidebarGroupComponent
          label="Project"
          items={project}
          pathName={pathName}
        />
        <SidebarGroupComponent
          label="Skill"
          items={skill}
          pathName={pathName}
        />
        <SidebarGroupComponent label="Blog" items={blog} pathName={pathName} />
        <SidebarGroupComponent
          label="Contact"
          items={contact}
          pathName={pathName}
        />
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-700 p-3 bg-[#140C1C]">
        {/* user info */}
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>ADMIN</AvatarFallback>
          </Avatar>
          <div className="text-white text-sm">
            <p className="font-medium text-white">Moshfiqur Rahman</p>
            <p className="text-[11px] text-gray-400">{user?.email}</p>
          </div>
        </div>

        {/* actions */}
        <div className="mt-3 flex justify-between">
          {/* theme toggle */}

          {/* settings */}
          <div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-gray-800"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>

          {/* logout */}
          <div className="flex-1 ">
            <Button
              onClick={handleLogout}
              className="bg-[#8750F7] hover:bg-[#733DD6] text-white flex items-center gap-2 w-full cursor-pointer"
            >
              <LogOut />
              Log Out
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
