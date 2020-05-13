import React from 'react';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

export const wrapRootElement = (element) => {
  return <IdentityContextProvider>{element}</IdentityContextProvider>;
};
