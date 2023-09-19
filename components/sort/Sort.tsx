import React, { FC, useState } from "react";
import styles from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIndexPopup,
  selectIndexType,
  setIndexPopup,
  setIndexType,
} from "../../store/slice";

const Sort: FC = () => {
  const [active, setActive] = useState(true);
  const indexPopup = useSelector(selectIndexPopup);
  const indexType = useSelector(selectIndexType);
  const dispatch = useDispatch();

  const popup = ["newest", "oldest"];
  const type = ["all", "photos", "documents"];

  return (
    <div className={styles.sort}>
      <ul className={styles.types}>
        {type.map((item, index) => {
          return (
            <li
              key={index}
              className={`${styles.type} ${
                index === indexType ? styles.active : ""
              }`}
              onClick={() => dispatch(setIndexType(index))}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          );
        })}
      </ul>
      <div className={styles.sort_by}>
        <span>Sort by: </span>
        <div className={styles.popup} onClick={() => setActive(!active)}>
          {popup[indexPopup].charAt(0).toUpperCase() +
            popup[indexPopup].slice(1)}{" "}
          ▼
        </div>
        {active ? (
          ""
        ) : (
          <div className={styles.module}>
            {popup.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    dispatch(setIndexPopup(index));
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
