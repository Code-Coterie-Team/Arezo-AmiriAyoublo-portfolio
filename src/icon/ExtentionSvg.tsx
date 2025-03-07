import * as React from "react";

const ExtentionSvg=(props: React.SVGProps<SVGSVGElement>)   => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#clip0_8368_4956)">
        <path
          
          fill="currentcolor"
          fillRule="evenodd"
          d="M18 2l2-2h10l2 2v10l-2 2H20l-2-2V2zm2 0v10h10V2H20zM0 20V8l2-2h10l2 2v10h10l2 2v10l-2 2H2l-2-2V20zm12-2V8H2v10h10zm0 2H2v10h10V20zm2 10h10V20H14v10z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_8368_4956">
          <path fill="currentcolor" d="M0 0H32V32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
export default ExtentionSvg;
