import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#A6D9F7'
  },
  font: {
    body: 'arial'
  }
});