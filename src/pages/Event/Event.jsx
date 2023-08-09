import { useParams } from "react-router-dom";
import { Section } from "../../components/Section/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../redux/events/events.operations";
import { useEffect } from "react";
import { selectCurrentEvent } from "../../redux/events/events.selectors";
import { EventMoreInfo } from "../../components/EventMoreInfo/EventMoreInfo";
import { Wrapper } from "./Event.styled";

export default function Event() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  const event = useSelector(selectCurrentEvent);

  return (
    <Section>
      {event && (
        <>
          <Wrapper>
            <SectionTitle>{event.title}</SectionTitle>
          </Wrapper>
          <EventMoreInfo event={event} />
        </>
      )}
    </Section>
  );
}
