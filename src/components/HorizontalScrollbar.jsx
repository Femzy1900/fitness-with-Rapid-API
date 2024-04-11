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


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  // Ensure to use proper unique identifiers for each category
  const categories = Array.from(new Set(data.map(item => item.Muscles)));

  
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {categories.map((category, index) => (
        <Box
          key={index}
          itemID={index} // Use a unique ID here
          title={category} // Display category name as title
          m="0 20px" // Adjust margin as needed
          style={{ minWidth: '100px', textAlign: 'center' }} // Example styling
        >
          <BodyPart category={category} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
