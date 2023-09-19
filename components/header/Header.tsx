import React, { ChangeEvent, FC, useState } from "react";
import styles from "./Header.module.scss";
import * as Api from "@/api";
import { GetServerSidePropsContext, NextPage } from "next";
import { User } from "@/api/dto/auth.dto";
import { checkAuth } from "@/utils/cheakAuth";

const Header: NextPage = () => {
  const [fileList, setFileList] = React.useState([]);

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];

    try {
      await Api.files.uploadFile({
        file,
        onSuccess: () => {
          setFileList([]);
          window.location.reload();
        },
        onError: (error: any) => {
          console.error("Error uploading file:", error);
        },
      });
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };

  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <svg
          fill='none'
          height='24'
          stroke='#88888A'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='11' cy='11' r='8' />
          <line x1='21' x2='16.65' y1='21' y2='16.65' />
        </svg>
        <input
          className={styles.input}
          type='text'
          value={value}
          onChange={handleChange}
          placeholder='Search files'
        />
      </div>

      <div className={styles.header_left}>
        <label className={styles.button}>
          <input type='file' onChange={handleFileUpload} />
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M12 5C11.4477 5 11 5.44772 11 6V11H6C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6C13 5.44772 12.5523 5 12 5Z'
                fill='white'
              />
            </svg>{" "}
            Import
          </span>
        </label>
        <div className={styles.avatar}>T</div>
      </div>
    </div>
  );
};

export default Header;
