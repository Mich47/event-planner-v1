import { useSelector } from "react-redux";
import { EventForm } from "../../components/EventForm/EventForm";
import { Section } from "../../components/Section/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { selectCurrentEvent } from "../../redux/events/events.selectors";

export default function Edit() {
  const currentEvent = useSelector(selectCurrentEvent);
  return (
    <Section>
      <SectionTitle />
      <EventForm event={currentEvent} />
    </Section>
  );
}
