import "./index.scss";

const CubeComponent = () => {
  const renderCubes = () => {
    const cubesData = [
      { row: 1, col: 1, z: 1 },
      { row: 1, col: 2, z: 1 },
      { row: 1, col: 3, z: 1 },
      { row: 2, col: 1, z: 1 },
      { row: 2, col: 2, z: 1 },
      { row: 2, col: 3, z: 1 },
      { row: 3, col: 1, z: 1 },
      { row: 3, col: 2, z: 1 },
      { row: 3, col: 3, z: 1 },
      { row: 1, col: 1, z: 2 },
      { row: 1, col: 2, z: 2 },
      { row: 1, col: 3, z: 2 },
      { row: 2, col: 1, z: 2 },
      { row: 2, col: 2, z: 2 },
      { row: 2, col: 3, z: 2 },
      { row: 3, col: 1, z: 2 },
      { row: 3, col: 2, z: 2 },
      { row: 3, col: 3, z: 2 },
      { row: 1, col: 1, z: 3 },
      { row: 1, col: 2, z: 3 },
      { row: 1, col: 3, z: 3 },
      { row: 2, col: 1, z: 3 },
      { row: 2, col: 2, z: 3 },
      { row: 2, col: 3, z: 3 },
      { row: 3, col: 1, z: 3 },
      { row: 3, col: 2, z: 3 },
      { row: 3, col: 3, z: 3 },
    ];

    return cubesData.map(({ row, col, z }) => (
      <div
        key={`${row}${col}${z}`}
        className={`cube`}
        data-cube={`${row}${col}${z}`}
      >
        <div className="cube-wrap">
          <div className="cube-top">
            {z === 1 && (
              <div className="shadow-z" data-cube={`${row}${col}2`}></div>
            )}
            {z === 1 && (
              <div
                className="shadow-flip"
                data-cube={`${row + 1}${col}${z}`}
              ></div>
            )}
            {z === 1 && (
              <div
                className="shadow-y"
                data-cube={`${row + 1}${col}${z}`}
              ></div>
            )}
          </div>
          <div className="cube-bottom"></div>
          <div className="cube-front-left"></div>
          <div className="cube-front-right"></div>
          <div className="cube-back-left"></div>
          <div className="cube-back-right"></div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <input type="checkbox" id="shadows" defaultChecked />
      <label htmlFor="shadows">Soft shadows</label>
      <div className="cubes">{renderCubes()}</div>
      <div className="large-shadows">
        <div className="large-shadow" data-cube="113"></div>
        <div className="large-shadow" data-cube="123"></div>
        <div className="large-shadow" data-cube="133"></div>
        <div className="large-shadow" data-cube="213"></div>
        <div className="large-shadow" data-cube="223"></div>
        <div className="large-shadow" data-cube="233"></div>
        <div className="large-shadow" data-cube="313"></div>
        <div className="large-shadow" data-cube="323"></div>
        <div className="large-shadow" data-cube="333"></div>
      </div>
    </div>
  );
};

export default CubeComponent;
