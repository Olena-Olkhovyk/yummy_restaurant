import classes from "./Restaurants.module.css";
const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.3755433525057!2d36.2440412756733!3d50.004315971510415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0c32d9e09eb%3A0x791a6b7c55c1bbc!2sMafia!5e0!3m2!1sru!2sde!4v1703065632350!5m2!1sru!2sde"
      width="600"
      height="450"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={classes.map}
    ></iframe>
  );
};
export default Map;
