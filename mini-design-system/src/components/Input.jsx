import React from "react";

export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-1 font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-describedby={error ? `${id}-error` : undefined}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && (
        <span id={`${id}-error`} className="text-red-600 text-sm mt-1">
          {error}
        </span>
      )}
    </div>
  );
}
