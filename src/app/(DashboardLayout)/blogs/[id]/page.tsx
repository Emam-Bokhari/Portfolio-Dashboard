import { getBlogById } from "@/app/services/Blog";
import BlogDetails from "@/components/modules/Blogs/BlogDetails";
import SectionTitle from "@/components/shared/sectionTitle";
import { Fragment } from "react";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: blog } = await getBlogById(id);
  return (
    <Fragment>
      <SectionTitle title="Blog Details" />
      <BlogDetails blog={blog} />
    </Fragment>
  );
}
