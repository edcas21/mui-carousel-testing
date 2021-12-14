import React from "react";

// Carousel testing

// components
import Carousel from "react-material-ui-carousel";
import { Item } from "..";

// icons
import { ChevronLeftRounded, ChevronRightRounded,  } from "@mui/icons-material";

const CarouselExample = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "This is just some random text.",
    },
    {
      name: "Random Name #2",
      description: "This is just some random text.",
    },
  ];

  return (
    <Carousel
        // Any functionalty that you want to add when next or prev is changed
        next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
        prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        // Icons for next and prev
        NextIcon={<ChevronRightRounded />}
        PrevIcon={<ChevronLeftRounded />}
    >
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselExample;
