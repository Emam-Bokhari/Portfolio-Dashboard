import { getProjectById } from "@/app/services/Project";
import ProjectDetails from "@/components/modules/Projects/ProjectDetails";
import SectionTitle from "@/components/shared/sectionTitle";
import { Fragment } from "react";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: project } = await getProjectById(id);
  return (
    <Fragment>
      <SectionTitle title="Project Details" />
      <ProjectDetails project={project} />
    </Fragment>
  );
}
