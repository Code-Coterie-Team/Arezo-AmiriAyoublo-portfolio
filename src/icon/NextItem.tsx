import * as React from "react";

const  NextItem=(props: React.SVGProps<SVGSVGElement>)  => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      clipRule="evenodd"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#546e7a"
        fillRule="nonzero"
        d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 00-2-2h-8l-2-2z"
      ></path>
      <path
        fill="#cfd8dc"
        d="M20.728 9.381c-4.049-2.38-9.193.527-9.238 5.221-.043 4.584 4.807 7.544 8.846 5.527l-4.712-6.68-.03 4.906c0 .445-1.054.445-1.054 0l.01-6.772c0-.354.888-.383 1.074-.075l5.32 8.274c3.776-2.431 3.725-8.083-.216-10.4zm-.048 8.041l-1.023-1.475v-4.364c0-.334 1.023-.334 1.023 0v5.839z"
      ></path>
    </svg>
  );
};
export default NextItem;
