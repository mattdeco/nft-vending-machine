import propTypes from "prop-types";
import styles from "./ContentContainer.module.scss";

const ContentContainer = ({ children, mode }) => {
  return (
    <div className={`${styles["content-container"]} ${styles[mode]}`}>
      {children}
    </div>
  );
};

ContentContainer.propTypes = {
  mode: propTypes.oneOf(["success", "error", "default"]),
};

ContentContainer.defaultProps = {
  mode: "default",
};

export default ContentContainer;
