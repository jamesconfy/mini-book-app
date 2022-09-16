import { useState } from "react";

function Form({ onGenerate }) {
  const [text, setText] = useState("");
  // const [option, setOption] = useState("None");

  const onSubmitted = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Enter a valid url");
      // } else if (option === "None") {
      //   alert("Enter a valid size");
    } else {
      onGenerate(text); // option);
    }
  };

  return (
    <form onSubmit={onSubmitted}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      {/* <div className="mb-3">
        <label className="form-label">Image Size</label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="None">None</option>
          <option value="100x100">100 by 100</option>
          <option value="200x200">200 by 200</option>
          <option value="300x300">300 by 300</option>
          <option value="400x400">400 by 400</option>
          <option value="500x500">500 by 500</option>
          <option value="600x600">600 by 600</option>
          <option value="700x700">700 by 700</option>
        </select>
      </div> */}
      <button type="submit" className="btn btn-primary form-control">
        Generate
      </button>
    </form>
  );
}

export default Form;
