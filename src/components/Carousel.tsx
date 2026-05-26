import React from "react";
import { StackRow } from "../utils";

const Carousel = ({ imageList }: { imageList: string[] }) => {
  if (imageList.length === 0) {
    return null;
  }

  return (
    <>
      <StackRow sx={{ overflow: "scroll", gap: 1 }}>
        {imageList.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            height={"180px"}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        ))}
      </StackRow>
    </>
  );
};

export default Carousel;
