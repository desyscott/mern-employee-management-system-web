import React from "react";
import PropTypes from "prop-types";


export default function Button(props) {
  return (
    <button
      type="button"
      className={` ${
        props?.fill ? "w-full" : "w-200"
      }  inline-flex items-center justify-center w-full gap-x-1 px-2 py-2 text-sm font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-sky-500 hover:bg-sky-700 focus:outline-none hover:opacity-90 focus:opacity-90 `}
      {...props}
    >
         <span>{props?.icon}</span>  <span>{props?.title}</span>
    </button>
  );
}


