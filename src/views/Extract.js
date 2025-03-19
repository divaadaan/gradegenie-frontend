import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const Extract = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Extract Report Card Comments</Typography>
        <Typography sx={{ mt: 2 }}>
          Here you can view and export the generated report card comments.
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Export as CSV</Button>
      </Box>
    </Container>
  );
};

export default Extract;
