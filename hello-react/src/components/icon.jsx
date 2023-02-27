import React from "react";

function Icon({imagen, descripcion}) {
    return (
        <div className="Icon">
       <img src={imagen} className="App-logoih" alt="logo" height="120px" width="120px" />
       <p className="tituloDesc">{descripcion}</p>
       <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
      </div>
    );
}
export default Icon;