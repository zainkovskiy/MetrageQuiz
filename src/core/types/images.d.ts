// declare module '*.svg' {
//   import React from 'react';
//   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }

declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}

// instruct TS that, when we do
// import svg from './assets/file.svg?url'
// svg should be in string type
declare module '*.svg?url' {
  const content: string;
  export default content;
}
