'use client';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './test.css';

interface ShadowCounterProps {
  css?: string;
  children: React.ReactNode;
}

const ShadowDom: React.FC<ShadowCounterProps> = ({ css, children }) => {
  const shadowRootRef = useRef<HTMLDivElement>(null);
  const checked = useRef<boolean>(false);
  const shadowRoot = useRef<ShadowRoot | null>(null);
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css ? css : '');

  useEffect(() => {
    if (!checked.current) {
      shadowRoot.current = shadowRootRef.current!.attachShadow({ mode: 'open' });
      checked.current = true;
    }

    const reactElement = children;
    const container = document.createElement('div');
    ReactDOM.render(reactElement, container);
    shadowRoot.current!.adoptedStyleSheets.push(sheet);
    shadowRoot.current!.appendChild(container);

    return () => {
      ReactDOM.unmountComponentAtNode(container);
      shadowRoot.current!.removeChild(container);
    };
  }, [children, css]);

  return <div ref={shadowRootRef}></div>;
};

export default ShadowDom;
