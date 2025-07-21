import React from "react";

export default function Card({ title, content, imageSrc, imageAlt = "Card image" }) {
  return (
    <div className="border rounded shadow-md p-4 max-w-sm">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-48 object-cover mb-4 rounded"
        />
      )}
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
