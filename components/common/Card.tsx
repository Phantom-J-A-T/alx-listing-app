import React from "react";
import { CardProps } from "../../interfaces/index";

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
