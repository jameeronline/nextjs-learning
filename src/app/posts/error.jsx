"use client";

const Error = ({ error, reset }) => {
  return (
    <div>
      UI for expected Error{" "}
      <span className="text-red-500">{error.message}</span>
    </div>
  );
};

export default Error;
