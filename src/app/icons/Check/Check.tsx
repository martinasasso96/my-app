import { SVGProps, memo } from "react";

const Check = (props: SVGProps<SVGAElement>): JSX.Element => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={props.color || "#1C274C"}
          strokeWidth="1.5"
        ></circle>
        <path
          d="M8.5 12.5L10.5 14.5L15.5 9.5"
          stroke={props.color || "#1C274C"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export default memo<SVGProps<SVGAElement>>(Check);
