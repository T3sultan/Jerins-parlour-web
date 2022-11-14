import React from "react";
import { Icon } from "@iconify/react";

const People = ({ people }) => {
  const { name, image, position, description } = people;
  return (
    <div className="card lg:max-w-lg bg-base-100  ">
      <div className="card-body">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={image} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <p>{position}</p>
          </div>
        </div>
        <p className="my-4 text-gray-500 text-sm">{description}</p>
        <div className="flex gap-1">
          <Icon width="20" icon="emojione:star" />
          <Icon width="20" icon="emojione:star" />
          <Icon width="20" icon="emojione:star" />
          <Icon width="20" icon="emojione:star" />
          <Icon width="20" icon="emojione:star" />
        </div>
      </div>
    </div>
  );
};

export default People;
