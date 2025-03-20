import { getSkillById } from "@/app/services/Skill";
import UpdateSkillForm from "@/components/modules/Skills/UpdateSkill";
import SectionTitle from "@/components/shared/sectionTitle";
import { Fragment } from "react";

export default async function UpdateSkillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: skill } = await getSkillById(id);

  return (
    <Fragment>
      <SectionTitle title="Update Skill" />
      <UpdateSkillForm skill={skill} />
    </Fragment>
  );
}
