import { useState, useEffect, useRef } from "react";
import React from "react";

import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { propTypeChildren } from "@material-tailwind/react/types/components/timeline";

export default function Foldable(props) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <div
        className={
          "sticky m-auto  transition-[height] duration-200 w-4/5 overflow-hidden" +
          (open ? " border-b border-b-white h-72 " : " h-16 ")
        }
        onClick={toggleOpen}
      >
        <h1 className="text-white hover:cursor-pointer text-center border-b-white border-b font-bold text-lg">
          {props.title}
        </h1>
        <p
          className={
            "text-white font-light text-center absolute top-16 px-2 tracking-wide "
          }
        >
          {props.text}
        </p>
      </div>
    </>
  );
}
