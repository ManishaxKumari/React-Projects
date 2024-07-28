import styles from "./foodinput.module.css"

const Foodinput=()=>{
    const handleOnChange=(event)=>{
        console.log(event.target.value);
    }
    return(
        <input type="text" 
        className={styles.input} 
        placeholder="Enter Food items"
        onChange={handleOnChange}
        />
    );
}
export default Foodinput;