import AddSkillForm from "@/components/modules/Skills/AddSkill";
import SectionTitle from "@/components/shared/sectionTitle";

import { Fragment } from "react";

export default function CreateSkillPage() {
  return (
    <Fragment>
      <div>
        {/* section title */}
        <SectionTitle title="Create Skill" />
        <div className="mt-4">
          <AddSkillForm />
        </div>
      </div>
    </Fragment>
  );
}
