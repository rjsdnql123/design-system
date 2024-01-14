import { style } from '@vanilla-extract/css';

export const calendarHeaderWrapperStyle = style({
  width: '100%',
  height: '7%',
  selectors: {
    '& .selected-date': {
      textAlign: 'center',
      fontSize: 20,
      margin: '0 30px',
    },
    '& .date-controler': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // selectors: {
      //   // '& svg:hover': {
      //   //   cursor: 'pointer',
      //   //   transition: '0.2s ease-in-out',
      //   //   transform: 'scale(1.15)',
      //   // },
      // },
    },
  },
});
