import React, { FC } from "react";
import styles from "./FileDetail.module.scss";

const FileDetail: FC = () => {
  return (
    <div className={styles.file_detail}>
      <div className={styles.content}>
        <h1>File Detail</h1>
        <div>
          <span>Name:</span>
          <span>Sales.png</span>
        </div>
        <div>
          <span>Date added:</span>
          <span>Sep 2. 2022, 13:25 PM</span>
        </div>
        <div>
          <span>File size:</span>
          <span>12mb</span>
        </div>
      </div>
    </div>
  );
};

export default FileDetail;
