const itemStyles = {
  buttonWrapper: {
    position: "absolute",
    height: "100px",
    backgroundColor: "transparent",
    top: "calc(50% - 70px)",
    "&:hover": {
      "& $button": {
        backgroundColor: "black",
        filter: "brightness(120%)",
        opacity: "0.4",
      },
    },
  },
  fullHeightHoverWrapper: {
    height: "100%",
    top: "0",
  },
  buttonVisible: {
    opacity: "1",
  },
  buttonHidden: {
    opacity: "0",
  },
  button: {
    margin: "0 10px",
    position: "relative",
    backgroundColor: "#494949",
    top: "calc(50% - 20px) !important",
    color: "white",
    fontSize: "30px",
    transition: "200ms",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.6 !important",
    },
  },
  // Applies to the "next" button wrapper
  next: {
    right: 0,
  },
  // Applies to the "prev" button wrapper
  prev: {
    left: 0,
  },
};

export default itemStyles;
