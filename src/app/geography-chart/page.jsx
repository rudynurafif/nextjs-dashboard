'use client';

import { Box, colors } from '@mui/material';
import Header from '@/components/Header';
import GeographyCart from '@/components/GeographyCart';

const Geography = () => {
  return (
    <Box m='20px'>
      <Header title='Geography Chart' subtitle='Simple Geography Chart' />
      <Box height='75vh' border={`1px solid ${colors.grey[500]}`} borderRadius='4px'>
        <GeographyCart />
      </Box>
    </Box>
  );
};

export default Geography;
