import {
  ClearButtonWrapper,
  Container,
  Form,
  Input,
  SearchWrapper,
  SubmitButton,
  Svg,
} from "./Search.styled";
import icons from "../../assets/images/icons.svg";
import { ClearButton } from "../ClearButton/ClearButton";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchEvents } from "../../redux/events/events.slice";
import { INPUT_STATES } from "../../constants/InputStates";

export const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchEvents(search.toLowerCase()));
  }, [dispatch, search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchEvents(search.toLowerCase()));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SearchWrapper>
          <label htmlFor="search" className="visually-hidden">
            Search by keywords
          </label>
          <Input
            type="text"
            id="search"
            name="search"
            value={search}
            placeholder="Search by keywords"
            onChange={(event) => {
              const { value } = event.target;
              setSearch(value);
            }}
          />
        </SearchWrapper>
        <SubmitButton type="submit">
          <Svg>
            <use href={`${icons}#icon-search`} />
          </Svg>
        </SubmitButton>

        <ClearButtonWrapper>
          <ClearButton
            inputState={search ? INPUT_STATES.filled : INPUT_STATES.default}
            onClick={() => {
              setSearch("");
            }}
          />
        </ClearButtonWrapper>
      </Form>
    </Container>
  );
};
