import classes from "./Item.module.css";

const Item = ({ name, image, gramm, liter, price }) => {
  return (
    <div className={classes.itemContainer}>
      <img src={image} alt={name} className={classes.img} />
      <h2>
        {name}({gramm ? gramm : liter}
        {gramm ? "g" : "l"})
      </h2>
      <p> {price}grn</p>
      <button>Add to cart</button>
    </div>
  );
};
export default Item;
