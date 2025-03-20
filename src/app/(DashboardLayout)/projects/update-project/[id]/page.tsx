import { getProjectById } from "@/app/services/Project";
import UpdateProjectForm from "@/components/modules/Projects/UpdateProject";
import SectionTitle from "@/components/shared/sectionTitle";
import { Fragment } from "react";

export default async function UpdateProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: project } = await getProjectById(id);

  return (
    <Fragment>
      <SectionTitle title="Update Project" />
      <UpdateProjectForm project={project} />
    </Fragment>
  );
}
