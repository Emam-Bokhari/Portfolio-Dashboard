import { getAllContacts } from "@/app/services/Contact";
import ManageContact from "@/components/modules/Contacts";
import SectionTitle from "@/components/shared/sectionTitle";

export default async function BlogsPage() {
  const { data } = await getAllContacts();
  const contacts = data ?? [];

  return (
    <div className="w-full">
      <SectionTitle title="Contacts" />
      <ManageContact contacts={contacts} />
    </div>
  );
}
