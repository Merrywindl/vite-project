import { useState } from "react";

type SidebarProps = {
  addBlankSlide: () => void;
};

export default function Sidebar({ addBlankSlide }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ display: "flex" }}>
      {isExpanded ? (
        <div
          className="border-black border-end border-5 bg-transparent p-2 d-flex flex-column"
          style={{ width: "20vw", maxWidth: "20vw" }}
        >
          <form style={{ width: "100%" }}>
            <input
              className="w-75 m-2 border border-black border-5 p-2 bg-light bg-opacity-25 font-weight-bold"
              type="text"
              id="inputID"
              placeholder="Coming Soon"
            />
            <input
              className="w-75 m-2 border border-black border-5 p-2 bg-light bg-opacity-25 font-weight-bold"
              type="text"
              id="inputID"
              placeholder="Coming Soon"
            />
            <input
              className="w-75 m-2 border border-black border-5 p-2 bg-light bg-opacity-25 font-weight-bold"
              type="text"
              id="inputID"
              placeholder="Coming Soon"
            />

            <button
              className="btn btn-primary mt-2 border border-black border-5 w-75"
              onClick={addBlankSlide}
            >
              Enter
            </button>
          </form>
          <h1 className="mt-3">Please excuse our dust</h1>
        </div>
      ) : null}
      <button
        className="btn btn-primary p-2 border-3 border-black"
        onClick={handleButtonClick}
      >
        {isExpanded ? "<" : ">"}
      </button>
    </div>
  );
}