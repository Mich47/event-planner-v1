import { useDispatch, useSelector } from "react-redux";
import { AddButton } from "../../components/AddButton/AddButton";
import { EventList } from "../../components/EventList/EventList";
import { PAGE_NAME } from "../../constants/PageName";
import { Container, SectionStyled, TitleStyled, Wrapper } from "./Home.styled";
import { useEffect } from "react";
import { getAllEvents } from "../../redux/events/events.operations";
import { selectAllEvents } from "../../redux/events/events.selectors";

export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector(selectAllEvents);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return (
    <SectionStyled>
      <Container>
        <Wrapper>
          <TitleStyled>{PAGE_NAME.home}</TitleStyled>
        </Wrapper>
        <AddButton />
      </Container>

      <EventList events={events} />
    </SectionStyled>
  );
}
