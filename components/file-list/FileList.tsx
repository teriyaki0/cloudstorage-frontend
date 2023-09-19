import { FileItem } from "@/api/dto/files.dto";
import React, { FC, useEffect, useState } from "react";
import Card from "../card/Card";

import styles from "./FileList.module.scss";

interface FileListProps {
  items: FileItem;
}

const FileList: FC<FileListProps> = ({ items }) => {
  return (
    <div className={styles.file_list}>
      {items.map((item) => (
        <Card
          id={item.id}
          filename={item.filename}
          originalName={item.originalName}
          size={item.size}
          createdAt={item.createdAt}
          favorites={item.favorites}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default FileList;
