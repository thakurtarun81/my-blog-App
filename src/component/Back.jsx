import React from "react";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)} className="text-2xl">
        ⬅️
      </button>
    </div>
  );
};
export default Back;
