import React from "react";
import ContentContainer from "../content-container/ContentContainer";
import { HOME_HEADLINE, HOME_SUBHEAD, HOME_BODY } from "../../lib/constants";
import styles from "./HeroCopy.module.scss";

const HeroCopy = () => {
  return (HOME_HEADLINE || HOME_SUBHEAD, HOME_BODY) ? (
    <ContentContainer autoHeight={false}>
      <div className={styles["content"]}>
        {HOME_HEADLINE && (
          <h1 className={styles["headline"]}>{HOME_HEADLINE}</h1>
        )}
        {HOME_SUBHEAD && (
          <h2
            className={styles["subhead"]}
            dangerouslySetInnerHTML={{ __html: HOME_SUBHEAD }}
          ></h2>
        )}

        {HOME_BODY && <h3 className={styles["body"]}>{HOME_BODY}</h3>}
      </div>
    </ContentContainer>
  ) : null;
};

export default HeroCopy;
