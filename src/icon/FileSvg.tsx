import * as React from "react";

const FileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}

      {...props}
    >
      <path
        fill="currentColor"
        d="M23.333 0h-12l-2 2v6h-6l-2 2v20.093l2 1.907h16.094l1.906-1.907V24H27.6l1.733-1.907V6l-6-6Zm0 2.827L26.507 6h-3.174V2.827Zm-4 27.173h-16V10h6v12.093l2 1.907h8v6Zm8-8h-16V2h10v6h6v14Z"
      />
    </svg>
  );
};

export default FileIcon;