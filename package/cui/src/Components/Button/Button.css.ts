import { style } from '@vanilla-extract/css';
import { vars } from '../../theme/theme.css';

export const container = style({
  display: 'block',
  position: 'relative',
  textAlign: 'center',
  width: '100%',
  height: '66px',
  padding: '16px 20px',
  boxSizing: 'border-box',

  borderWidth: '0px',
  borderRadius: '16px',

  fontSize: '18px',
  fontWeight: '700',
  cursor: 'pointer',
  color: vars.color.primary,
});
