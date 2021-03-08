import React, { useContext, useEffect } from "react";
import { EditContext } from "../components/editBtn";

export default function InfoPart() {
  const { disableOption } = useContext(EditContext);
  useEffect(() => {
    console.log(disableOption);
  });
  return (
    <div>
      <div style={{ margin: "2vw" }}>
        <h1>Info Part</h1>

        <div>Some info</div>
        <input type="text" disabled={disableOption} />
      </div>
    </div>
  );
}
