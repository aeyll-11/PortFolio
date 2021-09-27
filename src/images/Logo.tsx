import * as React from "react";

function SvgLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100px"
      height='100px'
      viewBox="0 0 475 412"
      fill="fill"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="#fff"
        strokeWidth={6}
        d="M187.414 124.414l-120 120M185.592 364.42l-121-120M185.579 361.66l119-120.068M304.586 244.414l-120-120M269.414 124.414l-120 120M267.592 364.42l-121-120M267.579 361.66l119-120.068M386.586 244.414l-120-120"
      />
      <path
        d="M213.438 217.5v5.031h10.656V258h-10.656v5h27.5v-5h-10.907v-35.469h10.907V217.5h-27.5z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgLogo;
