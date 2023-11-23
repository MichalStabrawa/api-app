import React from "react";

export default function InputComponent(props: { onchange: React.ChangeEventHandler; event: React.MouseEventHandler<HTMLButtonElement>; data:number ; value: string; name: string; }) {
  const { onchange, event, data, value, name } = props;
  return (
    <div className="input_wrapper">
      <input
        type="search"
        onChange={onchange}
        value={value}
        name={name}
      ></input>
      <label>Search</label>
      <button onClick={event}>Clear</button>

      {!data && (
        <p className="invalid">
          There are no results!!!!, press the clear button!!!
        </p>
      )}
    </div>
  );
}
