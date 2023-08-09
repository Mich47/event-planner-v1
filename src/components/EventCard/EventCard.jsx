import dateFormat from "dateformat";
import { BUTTON_SIZES } from "../../constants/ButtonSizes";
import { Button } from "../Button/Button";
import {
  Container,
  DataTimeContainer,
  DataTimeText,
  DescContainer,
  Description,
  Image,
  ImageContainer,
  MarkWrapper,
  MoreInfoContainer,
  Title,
  Wrapper,
} from "./EventCard.styled";

import defaultImg from "../../assets/images/default-img-s.svg";
import { useState } from "react";
import { Mark } from "../Mark/Mark";
import { useNavigate } from "react-router-dom";

export const EventCard = ({ event }) => {
  const {
    id,
    title,
    description,
    date,
    location,
    category,
    picture,
    priority,
  } = event;
  const [isMouseOver, setIsMouseOver] = useState(0);
  const navigate = useNavigate();

  return (
    <Container
      onMouseOver={() => {
        setIsMouseOver(1);
      }}
      onMouseLeave={() => {
        setIsMouseOver(0);
      }}
    >
      <MarkWrapper>
        <Mark text={category} />
        <Mark text={priority} />
      </MarkWrapper>
      <ImageContainer>
        <Image
          src={Boolean(picture) ? picture : defaultImg}
          alt={title ?? "event"}
        />
      </ImageContainer>
      <DescContainer $isMouseOver={isMouseOver}>
        <DataTimeContainer>
          <DataTimeText>
            {`${dateFormat(date, "dd.mm")} at ${dateFormat(date, "hh:mm")}`}
          </DataTimeText>
          <DataTimeText>{location}</DataTimeText>
        </DataTimeContainer>
        <Wrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <MoreInfoContainer>
            <Button
              size={BUTTON_SIZES.medium}
              title="More info"
              onClick={() => {
                navigate(`event/${id}`);
              }}
            />
          </MoreInfoContainer>
        </Wrapper>
      </DescContainer>
    </Container>
  );
};
