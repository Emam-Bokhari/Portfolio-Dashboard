import { getBlogById } from "@/app/services/Blog";
import UpdateBlogForm from "@/components/modules/Blogs/UpdateBlog";
import SectionTitle from "@/components/shared/sectionTitle";
import { Fragment } from "react";

export default async function UpdateBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: blog } = await getBlogById(id);

  return (
    <Fragment>
      <SectionTitle title="Update Blog" />
      <UpdateBlogForm blog={blog} />
    </Fragment>
  );
}
