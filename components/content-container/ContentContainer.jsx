import propTypes from "prop-types";
import styles from "./ContentContainer.module.scss";

const ContentContainer = ({ children, className, autoHeight, mode }) => {
  return (
    <div
      className={`${styles["content-container"]} ${
        !autoHeight ? styles["auto-height"] : ""
      } ${styles[mode]} ${className}`}
    >
      {children}
    </div>
  );
};

ContentContainer.propTypes = {
  autoHeight: propTypes.bool,
  mode: propTypes.oneOf(["success", "error", "default"]),
};

ContentContainer.defaultProps = {
  className: "",
  mode: "default",
  autoHeight: true,
};

export default ContentContainer;
