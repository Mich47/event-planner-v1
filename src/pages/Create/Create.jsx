import { EventForm } from "../../components/EventForm/EventForm";
import { Section } from "../../components/Section/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export default function Create() {
  return (
    <Section>
      <SectionTitle />
      <EventForm />
    </Section>
  );
}
