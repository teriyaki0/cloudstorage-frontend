import React, { FC } from "react";
import styles from "./Sidebar.module.scss";
import * as Api from "@/api";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";

const onClickLogOut = () => {
  Api.auth.logout();
  location.href = "/dashboard/login";
};

const Sidebar: FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_top}>
        <div className={styles.logo}></div>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menu_items}>
          <Link href={"/dashboard"}>
            <li
              className={clsx(styles.menu_item, {
                [styles.active]: "/dashboard" === selectedMenu,
              })}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 256 256'
                height='24'
                fill='#88888A'
              >
                <path d='M216,72H131.3L104,44.7A15.9,15.9,0,0,0,92.7,40H40A16,16,0,0,0,24,56V200.6A15.4,15.4,0,0,0,39.4,216H216.9A15.2,15.2,0,0,0,232,200.9V88A16,16,0,0,0,216,72ZM92.7,56l16,16H40V56ZM216,200H40V88H216Z' />
              </svg>
              My files
            </li>
          </Link>
          <Link href={"/dashboard/favorities"}>
            <li
              className={clsx(styles.menu_item, {
                [styles.active]: "/dashboard/favorities" === selectedMenu,
              })}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='20'
                fill='#88888A'
                viewBox='0 0 16 16'
              >
                <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
              </svg>
              Starred
            </li>
          </Link>
          <Link href={"/dashboard/profile"}>
            <li
              className={clsx(styles.menu_item, {
                [styles.active]: "/dashboard/profile" === selectedMenu,
              })}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                id='user-24px'
                width='20'
                height='20'
                fill='#88888A'
                viewBox='0 0 24 24'
              >
                <path
                  id='user-24px-2'
                  data-name='user-24px'
                  d='M12,12A6,6,0,1,0,6,6,6.018,6.018,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4.012,4.012,0,0,1,12,2Zm5,12H7a6.957,6.957,0,0,0-7,7,2.946,2.946,0,0,0,3,3H21a2.946,2.946,0,0,0,3-3A6.957,6.957,0,0,0,17,14Zm4,8H3a.945.945,0,0,1-1-1,4.951,4.951,0,0,1,5-5H17a4.951,4.951,0,0,1,5,5A.945.945,0,0,1,21,22Z'
                />
              </svg>
              My profile
            </li>
          </Link>
          <Link href={"/dashboard/trash"}>
            <li
              className={clsx(styles.menu_item, {
                [styles.active]: "/dashboard/trash" === selectedMenu,
              })}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                id='trash-24px'
                width='20'
                height='20'
                fill='#88888A'
                viewBox='0 0 24 24'
              >
                <path
                  id='trash-24px-2'
                  data-name='trash-24px'
                  d='M23,4H17V3a2.946,2.946,0,0,0-3-3H10A2.946,2.946,0,0,0,7,3V4H1A.945.945,0,0,0,0,5,.945.945,0,0,0,1,6H3V21a2.946,2.946,0,0,0,3,3H18a2.946,2.946,0,0,0,3-3V6h2a.945.945,0,0,0,1-1A.945.945,0,0,0,23,4ZM9,3a.945.945,0,0,1,1-1h4a.945.945,0,0,1,1,1V4H9ZM19,21a.945.945,0,0,1-1,1H6a.945.945,0,0,1-1-1V6H19ZM9,9V19a.945.945,0,0,1-1,1,.945.945,0,0,1-1-1V9A.945.945,0,0,1,8,8,.945.945,0,0,1,9,9Zm4,0V19a1,1,0,0,1-2,0V9a1,1,0,0,1,2,0Zm4,0V19a1,1,0,0,1-2,0V9a1,1,0,0,1,2,0Z'
                />
              </svg>
              Trash
            </li>
          </Link>
        </ul>
        <div className={styles.log_out} onClick={() => onClickLogOut()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            strokeWidth='1.5'
            stroke='#AD5654'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M19 12H12M12 12L15 15M12 12L15 9'
              stroke='#AD5654'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18'
              stroke='#AD5654'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          Log out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
