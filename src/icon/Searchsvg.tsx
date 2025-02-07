import * as React from "react";

const SearchSvg=(props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
       width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currenColor"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentcolor"
        d="M20.333 0a11 11 0 00-8.24 18.293L1.333 30.507l1.494 1.333L13.56 19.68A11.001 11.001 0 1020.333.013V0zm0 20a9 9 0 110-18 9 9 0 010 18z"
      ></path>
    </svg>
  );
};
export default SearchSvg;
