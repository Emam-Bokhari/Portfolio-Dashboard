import { getAllBlogs } from "@/app/services/Blog";
import ManageBlog from "@/components/modules/Blogs";
import SectionTitle from "@/components/shared/sectionTitle";

export default async function BlogsPage() {
  const { data } = await getAllBlogs();
  const blogs = data ?? [];

  return (
    <div className="w-full">
      <SectionTitle title="Blogs" />
      <ManageBlog blogs={blogs} />
    </div>
  );
}
