import { getContactById } from "@/app/services/Contact";
import ContactDetails from "@/components/modules/Contacts/ContactDetails";
import SectionTitle from "@/components/shared/sectionTitle";
import { Fragment } from "react";

export default async function ContactDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: contact } = await getContactById(id);
  return (
    <Fragment>
      <SectionTitle title="Contact Details" />
      <ContactDetails contact={contact} />
    </Fragment>
  );
}
