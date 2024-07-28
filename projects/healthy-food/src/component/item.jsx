import styles from "./item.module.css"

//by array destructure
const Item = ({ fooditems }) => {
    const buybutton =()=>{
        console.log(` you buy ${fooditems}!!`);
    };
  return (
    <>
  <li className={` ${styles.kgItem} list-group-item `}>
  <span>
    {fooditems}
   <button className={`${styles.button}  btn btn-danger `} 
     onClick={buybutton}
   >Buy</button>
  </span>
    </li>
  
  </>
  );
};
export default Item;
