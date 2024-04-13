import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


// Left arrow component for scroll menu
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <Typography className="right-arrow" onClick={() => scrollPrev()}>
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  // Right arrow component for scroll menu
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography className="left-arrow" onClick={() => scrollNext()}>
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((category) => (
      <Box
        key={category.id || category}
        itemId={category.id || category}
        title={category.id || category}
        m="0 40px"
      >
        <BodyPart category={category} setBodyPart={setBodyPart} bodyPart={bodyPart} />  
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
