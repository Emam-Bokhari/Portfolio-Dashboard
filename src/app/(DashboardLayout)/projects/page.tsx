import { getAllProjects } from "@/app/services/Project";
import ManageProject from "@/components/modules/Projects";
import SectionTitle from "@/components/shared/sectionTitle";

export default async function ProjectsPage() {
  const { data } = await getAllProjects();
  const projects = data ?? [];

  return (
    <div className="w-full">
      <SectionTitle title="Projects" />
      <ManageProject projects={projects} />
    </div>
  );
}
