import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <Form>
      <InputGroup>
        <Form.Control
          placeholder="search name"
          value={innerSearch}
          onChange={(event) => {
            setInnerSearch(event.target.value);
            props.onSearchChange(event.target.value);
          }}
        />
      </InputGroup>
    </Form>
  );
}
