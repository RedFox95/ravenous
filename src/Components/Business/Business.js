import React from "react";
import styles from "./Business.css";

import Business from "../Business/Business";

const BusinessList = () => {
  return (
    <div className={styles.BusinessList}>
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  );
};

export default BusinessList;
