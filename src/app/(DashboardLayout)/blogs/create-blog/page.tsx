import AddBlogForm from "@/components/modules/Blogs/AddBlog";
import SectionTitle from "@/components/shared/sectionTitle";

import { Fragment } from "react";

export default function CreateProjectPage() {
  return (
    <Fragment>
      <div>
        {/* section title */}
        <SectionTitle title="Create Blog" />
        <div className="mt-4">
          <AddBlogForm />
        </div>
      </div>
    </Fragment>
  );
}
