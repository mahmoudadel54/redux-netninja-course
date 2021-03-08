import React, { useState } from "react";
import EditBtn from "./editBtn";
import { EditContext } from "./editBtn";

export default function Home() {
  return (
    <>
      <EditBtn>
        <EditContext.Consumer>
          {({disableOption}) => (
            <div style={{ margin: "2vw" }}>
              <h1>Info Part</h1>

              <div>Some info</div>
              <input type="text" disabled={disableOption} />
              <button onClick={() => console.log(disableOption)}>
                Click here
              </button>
            </div>
          )}
        </EditContext.Consumer>
      </EditBtn>
      <EditBtn>
        <EditContext.Consumer>
          {({disableOption}) => (
            <div style={{ margin: "2vw" }}>
              <h1>Info Part</h1>

              <div>Some info</div>
              <input type="text" disabled={disableOption} />
              <button onClick={() => console.log(disableOption)}>
                Click here
              </button>
            </div>
          )}
        </EditContext.Consumer>
      </EditBtn>
      <EditBtn>
        <EditContext.Consumer>
          {({disableOption}) => (
            <div style={{ margin: "2vw" }}>
              <h1>Info Part</h1>

              <div>Some info</div>
              <input type="text" disabled={disableOption} />
              <button onClick={() => console.log(disableOption)}>
                Click here
              </button>
            </div>
          )}
        </EditContext.Consumer>
      </EditBtn>
      <EditBtn>
        <EditContext.Consumer>
          {({disableOption}) => (
            <div style={{ margin: "2vw" }}>
              {/* <h1>Info Part</h1> */}

              <div>Some info</div>
              <input type="text" disabled={disableOption} />
              <button onClick={() => console.log(disableOption)}>
                Click here
              </button>
            </div>
          )}
        </EditContext.Consumer>
      </EditBtn>
    </>
  );
}
