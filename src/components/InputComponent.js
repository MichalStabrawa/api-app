import styles from "./InputComponent.module.css";

export default function InputComponent(props) {
  const { onchange, event, data, value, name } = props;
  return (
    <div className={styles.input_wrapper}>
      <input
        type="search"
        onChange={onchange}
        value={value}
        name={name}
      ></input>
      <label>Search</label>
      <button onClick={event}>Clear</button>

      {data.length === 0 && (
        <p className={styles.invalid}>
          There are no results!!!!, press the clear button!!!
        </p>
      )}
    </div>
  );
}
