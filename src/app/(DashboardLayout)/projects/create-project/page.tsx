"use client";

import AddProjectForm from "@/components/modules/Projects/AddProject";
import SectionTitle from "@/components/shared/sectionTitle";

import { Fragment } from "react";

export default function CreateProjectPage() {
  return (
    <Fragment>
      <div>
        {/* section title */}
        <SectionTitle title="Create Project" />
        <div className="mt-4">
          <AddProjectForm />
        </div>
      </div>
    </Fragment>
  );
}
