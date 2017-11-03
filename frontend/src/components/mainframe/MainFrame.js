import React from "react";
import { Media } from "reactstrap";

const MainFrame = () => {
  return (
    <Media>
      <Media left href="#">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFobzudTpxvFeXG1E6sy-SvZswxqhf53rlDoXG3KTJU_NZWPzU9g"
          alt=""
        />
      </Media>
      <Media body>
        <Media heading>To kill a Mocking Bird, Harper Lee</Media>
        To Kill a Mockingbird is primarily a novel about growing up under
        extraordinary circumstances in the 1930s in the Southern United States.
        The story covers a span of three years, during which the main characters
        undergo significant changes. Scout Finch lives with her brother Jem and
        their father Atticus in the fictitious town of Maycomb, Alabama.{" "}
      </Media>
    </Media>
  );
};

export default MainFrame;
