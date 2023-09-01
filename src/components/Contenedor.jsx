import { useState } from "react";
import Content from "./Content";
import Create from "./Create";
import Overview from "./Overview";

const Contenedor = () => {
  const [ubiComponente, setubiComponente] = useState(0);

  const handleButtonClick = (index) => {
    setubiComponente(index);
  };

  return (
    <div className="text-center">
      <br />
      <div className="mt-3 mb-3">
        <button
          type="button"
          className="btn btn-dark mr-4"
          onClick={() => handleButtonClick(0)}
        >
          Overview
        </button>
        <button
          type="button"
          className="btn btn-dark mr-4"
          onClick={() => handleButtonClick(1)}
        >
          Content
        </button>
        <button
          type="button"
          className="btn btn-dark mr-4"
          onClick={() => handleButtonClick(2)}
        >
          Create
        </button>
      </div>
      <div className="p-3">
        {ubiComponente === 0 && <Overview />}
        {ubiComponente === 1 && <Content />}
        {ubiComponente === 2 && <Create />}
      </div>
    </div>
  );
}

export default Contenedor;
