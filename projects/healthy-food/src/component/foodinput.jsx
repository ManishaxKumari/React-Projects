import styles from "./foodinput.module.css"

const Foodinput=({handleOnChange})=>{
    
    return(
        <input type="text" 
        className={styles.input} 
        placeholder="Enter Food items"
        onChange={handleOnChange}
        />
    );
}
export default Foodinput;