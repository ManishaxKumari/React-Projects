import styles from "./item.module.css"

//by array destructure
const Item = ({ fooditems,bought, handlebuybutton}) => {
  return (
    <>
  <li className={` ${styles.kgItem} list-group-item  ${bought && 'active'}`}>
  <span>
    {fooditems}
   <button className={`${styles.button}  btn btn-danger `} 
     onClick={handlebuybutton}
   >Buy</button>
  </span>
    </li>
  
  </>
  );
};
export default Item;
