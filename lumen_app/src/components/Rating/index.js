import * as React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ffff00",
  },
  "& .MuiRating-iconHover": {
    color: "#FFFF8A",
  },
});

/** This is a rating component that allows the user to click on an icon to rate from 1-5. It has been customised using react icons. Uses MUI library.
 * 
 * @returns A customised rating component.
 */
function RatingInput() {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <StyledRating
      name="illuminate-controlled"
      value={ratingValue}
      icon={<HiOutlineLightBulb />}
      emptyIcon={<HiOutlineLightBulb />}
      onChange={(event, newValue) => {
        setRatingValue(newValue);
      }}
    />
  );
}

export default RatingInput;
