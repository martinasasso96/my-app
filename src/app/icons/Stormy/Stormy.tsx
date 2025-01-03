import { SVGProps, memo } from "react";

const Stormy = (props: SVGProps<SVGAElement>): JSX.Element => {
  return (
    <svg
      height={props.height}
      width={props.width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.001 512.001"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          style={{ fill: "#F7C600" }}
          d="M320.721,198.144h89.213c10.252,0,15.805,12.002,9.17,19.816l-246.977,290.81 c-6.01,7.076-17.505,1.603-15.803-7.522l34.96-187.391h-89.219c-10.252,0-15.805-12.003-9.168-19.816L339.874,3.23 c6.009-7.076,17.505-1.603,15.803,7.522L320.721,198.144z"
        ></path>
        <path
          style={{ fill: "#F7D64C" }}
          d="M320.721,198.144h89.213c10.252,0,15.805,12.002,9.17,19.816l-246.977,290.81 c-6.01,7.076-17.505,1.603-15.803-7.522l34.96-187.391h-89.219c-10.252,0-15.805-12.003-9.168-19.816L339.874,3.23 c6.009-7.076,17.505-1.603,15.803,7.522L320.721,198.144z"
        ></path>
        <path
          style={{ opacity: "0.1" }}
          d="M169.232,491.279l34.798-186.527c0.431-2.306-1.34-4.437-3.685-4.437 h-86.407c-9.934,0-15.531-11.057-10.242-18.99l-10.799,12.716c-6.637,7.814-1.083,19.816,9.168,19.816h89.219l-34.96,187.391 c-1.702,9.125,9.793,14.598,15.803,7.522l5.577-6.567C172.682,501.813,168.102,497.339,169.232,491.279z"
        ></path>
        <path
          style={{ opacity: "0.3", fill: "#FFFFFF" }}
          d="M305.895,152.356c0,11.407,8.258,20.865,19.119,22.777 l8.485-45.488c-1.443-0.281-2.93-0.438-4.454-0.438C316.26,129.205,305.895,139.57,305.895,152.356z M409.935,198.144h-49.122 c5.533,18.106,22.37,31.276,42.287,31.276c2.278,0,4.516-0.174,6.702-0.506l9.303-10.955 C425.74,210.146,420.187,198.144,409.935,198.144z M339.874,3.23l-46.501,54.753c1.366,26.244,19.04,48.162,43.078,55.835 L355.677,10.75C357.379,1.626,345.883-3.845,339.874,3.23z"
        ></path>
        <g>
          <path
            style={{ fill: "transparent" }}
            d="M284.746,292.976c-8.306,0-15.815-3.476-21.15-9.048c-5.335,5.574-12.844,9.048-21.15,9.048 c-16.148,0-29.284-13.138-29.284-29.285c0-4.493,3.643-8.136,8.136-8.136s8.136,3.643,8.136,8.136 c0,7.176,5.837,13.014,13.013,13.014s13.014-5.838,13.014-13.014c0-4.493,3.643-8.136,8.136-8.136s8.136,3.643,8.136,8.136 c0,7.176,5.838,13.014,13.014,13.014c7.176,0,13.013-5.838,13.013-13.014c0-4.493,3.643-8.136,8.136-8.136 c4.493,0,8.136,3.643,8.136,8.136C314.031,279.838,300.894,292.976,284.746,292.976z"
          ></path>
          <path
            style={{ fill: "transparent" }}
            d="M180.793,255.413c-4.493,0-8.136-3.643-8.136-8.136v-8.983c0-4.493,3.643-8.136,8.136-8.136 s8.136,3.643,8.136,8.136v8.983C188.929,251.771,185.286,255.413,180.793,255.413z"
          ></path>
          <path
            style={{ fill: "transparent" }}
            d="M346.401,255.413c-4.493,0-8.136-3.643-8.136-8.136v-8.983c0-4.493,3.643-8.136,8.136-8.136 s8.136,3.643,8.136,8.136v8.983C354.537,251.771,350.894,255.413,346.401,255.413z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default memo<SVGProps<SVGAElement>>(Stormy);
