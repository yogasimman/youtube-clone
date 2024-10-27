import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import { useState } from 'react';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {  // Destructure props here
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "92%" },
        flexDirection: { md: 'column' },
        backgroundColor: '#000',
        padding: '10px 0',
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}  // Update selected category on click
          style={{
            background: category.name === selectedCategory ? '#FC1503' : 'transparent',
            color: 'white',
            padding: '10px 15px',
            margin: '5px 0',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            border: 'none',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            fontWeight: category.name === selectedCategory ? 'bold' : 'normal',
            width: '100%',
            transition: 'background 0.3s ease',
          }}
          key={category.name}
          onMouseOver={() => setHoveredCategory(category.name)}
          onMouseOut={() => setHoveredCategory(null)}
        >
          <span 
            style={{ 
              marginRight: '10px', 
              color: hoveredCategory === category.name ? 'red' : 'white',
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
