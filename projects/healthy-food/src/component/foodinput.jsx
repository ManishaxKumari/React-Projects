import styles from "./foodinput.module.css"

const Foodinput=({handleonKeyDown})=>{
    
    return(
        <input type="text" 
        className={styles.input} 
        placeholder="Enter Food items"
        onKeyDown={handleonKeyDown}
        />
    );
}
export default Foodinput;