import React from "react";

export default function EducationCard({ index, Image, Title, Name, Score }) {

  return (
    <div className="internalCard my-4 py-4 px-3 flex justify-center">
      <div className="sm:w-[400px] flex flex-col sm:flex-row">
        <div className={`mr-4 flex justify-center ${index === 1 && "sm:hidden"}`}>{Image}</div>

        <div className={`flex flex-col justify-center text-center ${index == 1 ? "sm:text-right mr-4" : "sm:text-left"}`}>
          <p>{Title}</p>
          <p>{Name}</p>
          <p>{Score}</p>
        </div>

        {/* ✅ Conditional rendering using && */}
        {index === 1 && (
          <div className="hidden sm:block mr-4 flex justify-center">{Image}</div>
        )}
      </div>
    </div>
  );
}
