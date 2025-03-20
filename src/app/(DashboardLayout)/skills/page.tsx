import { getAllSkills } from "@/app/services/Skill";
import ManageSkill from "@/components/modules/Skills";
import SectionTitle from "@/components/shared/sectionTitle";

export default async function BlogsPage() {
  const { data } = await getAllSkills();
  const skills = data ?? [];

  return (
    <div className="w-full">
      <SectionTitle title="Skills" />
      <ManageSkill skills={skills} />
    </div>
  );
}
