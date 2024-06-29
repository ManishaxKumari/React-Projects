function Clock() {
    
    let time = new Date();
 
  return <p>this is the current time : {time.toLocaleTimeString()}-{time.toLocaleDateString()}</p>;
}
export default Clock;
