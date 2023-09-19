import React, { FC, useState } from "react";
import styles from "./Card.module.scss";

import * as Api from "@/api";

import { getExtensionFromFileName } from "@/utils/getExtensionFromFileName";
import { getFileSize } from "@/utils/getFileSize";
import { getFileDate } from "@/utils/getfileDate";
import { isImage } from "@/utils/isImage";

interface CardProps {
  id: number;
  filename: string;
  originalName: string;
  size: number;
  createdAt: Date;
  favorites: boolean;
}

const Card: FC<CardProps> = ({
  id,
  filename,
  originalName,
  createdAt,
  size,
  favorites,
}) => {
  const ext = getExtensionFromFileName(filename);
  const fileSize = getFileSize(size);
  const date = getFileDate(createdAt);

  const [starred, setStarred] = useState(favorites);
  const setFavorities = (id: number) => {
    setStarred(!starred);
    Api.files.favorites(id);
    location.reload();
  };

  const setTrash = (id: number) => {
    Api.files.remove(id);
    location.reload();
  };
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <span
          onClick={() => {
            setFavorities(id);
          }}
        >
          {starred ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M10.9749 18.8472C11.6064 18.4713 12.3932 18.472 13.024 18.849L16.3649 20.8458C17.1642 21.324 18.1424 20.6172 17.932 19.7233L17.0547 16.0032C16.883 15.2749 17.1321 14.5117 17.7005 14.025L20.6351 11.5122C21.3398 10.9093 20.9611 9.76599 20.0356 9.69324L16.1529 9.36753C15.416 9.30572 14.7734 8.84237 14.4819 8.16275L12.9676 4.63143C12.61 3.78952 11.39 3.78952 11.0324 4.63143L9.51853 8.15376C9.22678 8.8326 8.58452 9.29528 7.84823 9.35705L3.96443 9.68284C3.03887 9.7556 2.66023 10.8989 3.36492 11.5018L6.29951 14.0146C6.86789 14.5013 7.11704 15.2645 6.94529 15.9928L6.06799 19.7129C5.85763 20.6068 6.83578 21.3136 7.63513 20.8355L10.9749 18.8472Z'
                fill='#D8993C'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.3649 20.8458C17.1642 21.324 18.1424 20.6172 17.932 19.7233L17.0547 16.0032C16.883 15.2749 17.1321 14.5117 17.7005 14.025L20.6351 11.5122C21.3398 10.9093 20.9611 9.76599 20.0356 9.69324L16.1529 9.36753C15.416 9.30572 14.7734 8.84237 14.4819 8.16275L12.9676 4.63143C12.61 3.78952 11.39 3.78952 11.0324 4.63143L9.51853 8.15376C9.22678 8.8326 8.58452 9.29528 7.84823 9.35705L3.96443 9.68284C3.03887 9.7556 2.66023 10.8989 3.36492 11.5018L6.29951 14.0146C6.86789 14.5013 7.11704 15.2645 6.94529 15.9928L6.06799 19.7129C5.85763 20.6068 6.83578 21.3136 7.63513 20.8355L10.9749 18.8472C11.6064 18.4713 12.3932 18.472 13.024 18.849L16.3649 20.8458ZM17.5809 11.4943L16.3997 12.5058C15.2629 13.4792 14.7646 15.0057 15.1081 16.4623L15.4656 17.9784L14.0501 17.1323C12.7884 16.3782 11.2148 16.3768 9.95183 17.1287L8.5331 17.9733L8.89189 16.4519C9.2354 14.9953 8.73708 13.4688 7.60034 12.4954L6.41909 11.484L8.01542 11.35C9.488 11.2265 10.7725 10.3012 11.356 8.94348L11.999 7.44735L12.6438 8.95098C13.2267 10.3102 14.5119 11.2369 15.9857 11.3605L17.5809 11.4943ZM4.13162 11.6758L4.12117 11.6767C4.12466 11.6764 4.12814 11.6762 4.13162 11.6758Z'
                fill='#88888A'
              />
            </svg>
          )}
        </span>
        <div className='flex gap-4'>
          <a
            download={filename + ext}
            href={"http://localhost:7000/uploads/" + filename}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M12 12L12 21M12 12L9.5 14M12 12L14.5 14'
                stroke='#11356F'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M5.03426 9.11737C3.29168 9.54938 2 11.1238 2 13C2 15.2091 3.79086 17 6 17C6 17 6.21895 17 7 17'
                stroke='#11356F'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M15.83 7.13765C15.2238 4.75905 13.0673 3 10.5 3C7.46243 3 5 5.46243 5 8.5C5 8.70871 5.01163 8.9147 5.03426 9.11736C5.03426 9.11736 5.1875 10 5.5 10.5'
                stroke='#11356F'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C16.5971 7 16.2053 7.04766 15.83 7.13765L14.5 7.5'
                stroke='#11356F'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
          <span
            onClick={() => {
              setTrash(id);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              id='trash-24px'
              width='28'
              height='28'
              fill='#AD5654'
              viewBox='0 0 24 24'
            >
              <path
                id='trash-24px-2'
                data-name='trash-24px'
                d='M23,4H17V3a2.946,2.946,0,0,0-3-3H10A2.946,2.946,0,0,0,7,3V4H1A.945.945,0,0,0,0,5,.945.945,0,0,0,1,6H3V21a2.946,2.946,0,0,0,3,3H18a2.946,2.946,0,0,0,3-3V6h2a.945.945,0,0,0,1-1A.945.945,0,0,0,23,4ZM9,3a.945.945,0,0,1,1-1h4a.945.945,0,0,1,1,1V4H9ZM19,21a.945.945,0,0,1-1,1H6a.945.945,0,0,1-1-1V6H19ZM9,9V19a.945.945,0,0,1-1,1,.945.945,0,0,1-1-1V9A.945.945,0,0,1,8,8,.945.945,0,0,1,9,9Zm4,0V19a1,1,0,0,1-2,0V9a1,1,0,0,1,2,0Zm4,0V19a1,1,0,0,1-2,0V9a1,1,0,0,1,2,0Z'
              />
            </svg>
          </span>
        </div>
      </div>
      <div className={styles.card_center}>
        {ext && isImage(ext) ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='35'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z'
              stroke='#88888A'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <circle
              cx='8.5'
              cy='8.5'
              r='2.5'
              stroke='#88888A'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.5262 12.6211L6 22H18.1328C20.2686 22 22 20.2686 22 18.1328V18C22 17.5335 21.8251 17.3547 21.5099 17.0108L17.4804 12.615C16.6855 11.7479 15.3176 11.7507 14.5262 12.6211Z'
              stroke='#88888A'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='42'
            height='42'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              d='M18.5 20a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10Zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5V4.621Zm5.914 3.793-5.829-5.828c-.026-.026-.058-.046-.085-.07a2.072 2.072 0 0 0-.219-.18c-.04-.027-.086-.045-.128-.068-.071-.04-.141-.084-.216-.116a1.977 1.977 0 0 0-.624-.138C12.266 2.011 12.22 2 12.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414Z'
              fill='#88888A'
            />
          </svg>
        )}
        <span className={styles.format}>{ext?.toUpperCase()}</span>
        <span>{fileSize}kb</span>
      </div>
      <div className={styles.card_bottom}>
        <span>{originalName}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Card;
