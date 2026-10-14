import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28 flex items-center justify-center rounded-full bg-tertiary shadow-card hover:scale-110 transition-transform duration-200'
          key={technology.name}
          title={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-16 h-16 object-contain'
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
