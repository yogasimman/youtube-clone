import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: '20px',
        border: '1px solid #e3e3e3',
        display: 'flex', // Use flex for layout
        alignItems: 'center', // Center items vertically
        boxShadow: 'none',
        mr: { sm: 5 },
        backgroundColor: '#fff', // White background for contrast
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        style={{
          border: 'none', // Remove the default border
          outline: 'none', // Remove the outline on focus
          flex: 1, // Allow the input to grow
          padding: '10px 25px', // Add padding for comfort
          borderRadius: '20px 0 0 20px', // Round left corners
          fontSize: '16px', // Set font size
        }}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red', borderRadius: '0 20px 20px 0' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
