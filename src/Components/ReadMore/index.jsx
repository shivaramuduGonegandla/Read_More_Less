import React, { useState } from "react";
import {
  Container,
  Heading,
  Description,
  Button,
  Image,
} from "./styledComponents";

const ReadMore = ({ reactHooksDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle between showing full text and truncated text
  const toggleReadMore = () => {
    setIsExpanded((prevState) => !prevState);
  };

  // Truncate the description to 170 characters
  const truncatedText = reactHooksDescription.slice(0, 170);

  return (
    <Container>
      {/* Image Section */}
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />

      {/* Heading Section */}
      <Heading>React Hooks</Heading>

      {/* Description Section */}
      <Description>
        {isExpanded ? reactHooksDescription : `${truncatedText}...`}
      </Description>

      {/* Toggle Button */}
      <Button onClick={toggleReadMore}>
        {isExpanded ? "Read Less" : "Read More"}
      </Button>
    </Container>
  );
};

export default ReadMore;
