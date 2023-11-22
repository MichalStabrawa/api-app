import styles from './InputComponent.module.css'

export default function InputComponent(props) {
    const{onchange,event}=props
    return(<div className={styles.input_wrapper}>
        <input type="search" onChange={onchange}></input>
        <label>Search</label>
        <button onClick={event}>Clear</button>
    </div>)
} 