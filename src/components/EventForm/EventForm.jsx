import { useState } from "react";
import { BUTTON_SIZES } from "../../constants/ButtonSizes";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { SelectDateTime } from "../SelectDateTime/SelectDateTime";
import { TextArea } from "../TextArea/TextArea";
import { FormStyled, Wrapper } from "./EventForm.styled";
import { LOCATION_REGEX, TITLE_REGEX } from "../../constants/validateRegex";
import { CATEGORIES } from "../../constants/categories";
import { PRIORITIES } from "../../constants/priorities";
import { useDispatch } from "react-redux";
import { postEvent, putEvent } from "../../redux/events/events.operations";
import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";

export const EventForm = ({ event }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isNewEvent = !Boolean(event);

  const [title, setTitle] = useState(event?.title ?? "");
  const [location, setLocation] = useState(event?.location ?? "");
  const [category, setCategory] = useState(event?.category ?? "");
  const [priority, setPriority] = useState(event?.priority ?? "");
  const [date, setDate] = useState(
    dateFormat(event?.date, "yyyy-mm-dd") ??
      dateFormat(Date.now(), "yyyy-mm-dd")
  );
  const [time, setTime] = useState(
    dateFormat(event?.date, "hh:mm") ?? dateFormat(Date.now(), "hh:mm")
  );
  const [description, setDescription] = useState(event?.description ?? "");
  const [picture, setPicture] = useState(event?.picture ?? "");

  const handleSubmit = async (evn) => {
    evn.preventDefault();
    const formData = {
      title,
      location,
      category,
      priority,
      date: new Date(`${date} ${time}`).toISOString(),
      description,
      picture,
    };

    try {
      if (isNewEvent) {
        await dispatch(postEvent(formData)).unwrap();
        navigate("/");
        return;
      }

      await dispatch(putEvent({ ...event, ...formData })).unwrap();
      navigate(`/event/${event.id}`);
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <Wrapper>
        <Input
          labelText="Title"
          name="title"
          value={title}
          getValueFn={setTitle}
          validateRegex={TITLE_REGEX}
          required
        />
        <div style={{ gridArea: "b" }}>
          <TextArea
            labelText="Description"
            name="description"
            value={description}
            getValueFn={setDescription}
            required
          />
        </div>
        <SelectDateTime
          labelText="Select date"
          name="date"
          type="date"
          min={dateFormat(Date.now(), "yyyy-mm-dd")}
          value={date}
          getValueFn={setDate}
          required
        />
        <SelectDateTime
          labelText="Select time"
          name="time"
          type="time"
          // min={dateFormat(Date.now(), "hh:mm")}
          value={time}
          getValueFn={setTime}
          required
        />
        <Input
          labelText="Location"
          value={location}
          getValueFn={setLocation}
          validateRegex={LOCATION_REGEX}
          required
        />
        <Select
          labelText="Category"
          name="category"
          value={category}
          getValueFn={setCategory}
          valuesArray={CATEGORIES}
        />
        <Input
          labelText="Add picture"
          value={picture}
          getValueFn={setPicture}
          disabled
        />
        <Select
          labelText="Priority"
          name="priority"
          value={priority}
          getValueFn={setPriority}
          valuesArray={Object.values(PRIORITIES)}
        />
      </Wrapper>
      <Button
        type="submit"
        title={isNewEvent ? "Add event" : "Save"}
        size={BUTTON_SIZES.large}
      />
    </FormStyled>
  );
};
