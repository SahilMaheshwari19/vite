declare module 'react-router-hash-link' {
  import { LinkProps } from 'react-router-dom';
  import * as React from 'react';

  export interface HashLinkProps extends LinkProps {
    smooth?: boolean;
    scroll?: (el: Element) => void;
  }

  export const HashLink: React.FC<HashLinkProps>;
}
