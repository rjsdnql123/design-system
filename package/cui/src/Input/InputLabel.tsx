import React from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { addonBase, addonRight } from './InputLabel.css';

export interface InputLabel {
  isRight?: boolean;
}

const InputLabel: React.FC<React.PropsWithChildren<InputLabel>> = ({ children, isRight }) => {
  return <span className={`${addonBase} ${isRight ? addonRight : ''}`}>{children}</span>;
};

const MemoInputLabel = React.memo(InputLabel);

export default MemoInputLabel;
