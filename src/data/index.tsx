import { ICollection, IMovie } from "../types";

export const menuLinks = [
  {
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_172_2)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.8 2.65C11.1462 2.39036 11.5673 2.25 12 2.25C12.4327 2.25 12.8538 2.39036 13.2 2.65L20.2 7.9C20.4484 8.08629 20.65 8.32786 20.7889 8.60557C20.9277 8.88328 21 9.18951 21 9.5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H14.1C13.8083 21 13.5285 20.8841 13.3222 20.6778C13.1159 20.4715 13 20.1917 13 19.9V14C13 13.7348 12.8946 13.4804 12.7071 13.2929C12.5196 13.1054 12.2652 13 12 13C11.7348 13 11.4804 13.1054 11.2929 13.2929C11.1054 13.4804 11 13.7348 11 14V19.9C11 20.0445 10.9715 20.1875 10.9163 20.321C10.861 20.4544 10.78 20.5757 10.6778 20.6778C10.5757 20.78 10.4544 20.861 10.321 20.9163C10.1875 20.9715 10.0445 21 9.9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.5C3 9.18951 3.07229 8.88328 3.21115 8.60557C3.35 8.32786 3.55161 8.08629 3.8 7.9L10.8 2.65ZM12 4.25L5 9.5V19H9V14C9 13.2044 9.31607 12.4413 9.87868 11.8787C10.4413 11.3161 11.2044 11 12 11C12.7956 11 13.5587 11.3161 14.1213 11.8787C14.6839 12.4413 15 13.2044 15 14V19H19V9.5L12 4.25Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_172_2">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Home",
  },
  {
    path: "/discover",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_143_33)">
          <path
            d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM16.95 7.05C17.345 7.446 17.347 8.03 17.286 8.56L17.249 8.843C17.089 9.963 16.644 11.618 16.007 12.999C15.697 13.671 15.307 14.35 14.828 14.829C14.35 15.306 13.672 15.697 12.998 16.007C11.618 16.644 9.963 17.089 8.843 17.249L8.561 17.286C8.031 17.346 7.443 17.342 7.051 16.95C6.694 16.593 6.658 16.075 6.7 15.585L6.732 15.295L6.751 15.157C6.911 14.037 7.356 12.382 7.993 11.001C8.303 10.329 8.693 9.65 9.172 9.171C9.65 8.693 10.329 8.303 11.002 7.993C12.382 7.356 14.037 6.911 15.157 6.751L15.439 6.714C15.969 6.654 16.554 6.654 16.949 7.05H16.95ZM15.238 8.762C14.33 8.917 12.915 9.312 11.838 9.809C11.241 10.085 10.815 10.357 10.586 10.586C10.356 10.815 10.085 11.241 9.809 11.838C9.313 12.915 8.917 14.33 8.762 15.238C9.67 15.083 11.085 14.688 12.162 14.191C12.759 13.915 13.185 13.643 13.414 13.414C13.644 13.185 13.916 12.759 14.191 12.162C14.687 11.085 15.084 9.67 15.238 8.762ZM12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_33">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Discover",
  },
  {
    path: "/soon",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_143_37)">
          <path
            d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 6C12.2449 6.00003 12.4813 6.08996 12.6644 6.25272C12.8474 6.41547 12.9643 6.63975 12.993 6.883L13 7V11.586L15.707 14.293C15.8863 14.473 15.9905 14.7144 15.9982 14.9684C16.006 15.2223 15.9168 15.4697 15.7488 15.6603C15.5807 15.8508 15.3464 15.9703 15.0935 15.9944C14.8406 16.0185 14.588 15.9454 14.387 15.79L14.293 15.707L11.293 12.707C11.1376 12.5514 11.0378 12.349 11.009 12.131L11 12V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_37">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Coming Soon",
  },
];

export const libraryLinks = [
  {
    path: "/favorites",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_143_153)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.4941 3.80103C20.5891 5.02203 22.0631 7.50103 21.9981 10.393C21.9171 14.003 19.1081 17.187 14.3191 20.031C13.6091 20.453 12.8611 21 12.0001 21C11.1551 21 10.3751 20.443 9.68007 20.03C4.89307 17.187 2.08307 14.002 2.00207 10.393C1.93707 7.50103 3.41107 5.02303 5.50607 3.80103C7.46607 2.66003 9.92807 2.65303 12.0001 4.33803C14.0721 2.65303 16.5341 2.65903 18.4941 3.80103ZM17.4871 5.53003C16.0931 4.71803 14.3511 4.74703 12.8431 6.27303C12.7326 6.38424 12.6013 6.4725 12.4566 6.53272C12.3119 6.59295 12.1568 6.62396 12.0001 6.62396C11.8434 6.62396 11.6882 6.59295 11.5435 6.53272C11.3988 6.4725 11.2675 6.38424 11.1571 6.27303C9.64907 4.74703 7.90707 4.71803 6.51307 5.53003C5.06907 6.37203 3.95307 8.15803 4.00207 10.35C4.05807 12.861 6.04207 15.544 10.7021 18.312C11.1101 18.555 11.5361 18.866 12.0001 18.995C12.4641 18.866 12.8901 18.555 13.2981 18.312C17.9581 15.544 19.9421 12.862 19.9981 10.349C20.0481 8.15903 18.9311 6.37203 17.4871 5.53003Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_153">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Favorites",
  },
  {
    path: "/collection-1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_143_157)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9.52C9.81977 3.00004 10.1157 3.06746 10.3859 3.19728C10.6561 3.3271 10.8936 3.51599 11.081 3.75L12.481 5.5H20C20.5304 5.5 21.0391 5.71071 21.4142 6.08579C21.7893 6.46086 22 6.96957 22 7.5V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5ZM9.52 5H4V19H20V7.5H12.48C12.1802 7.49996 11.8843 7.43254 11.6141 7.30272C11.3439 7.1729 11.1064 6.98401 10.919 6.75L9.52 5Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_157">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Collection #1",
  },
  {
    path: "/collection-2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_143_157)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9.52C9.81977 3.00004 10.1157 3.06746 10.3859 3.19728C10.6561 3.3271 10.8936 3.51599 11.081 3.75L12.481 5.5H20C20.5304 5.5 21.0391 5.71071 21.4142 6.08579C21.7893 6.46086 22 6.96957 22 7.5V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5ZM9.52 5H4V19H20V7.5H12.48C12.1802 7.49996 11.8843 7.43254 11.6141 7.30272C11.3439 7.1729 11.1064 6.98401 10.919 6.75L9.52 5Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_157">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Collection #2",
  },
];

export const categoryLinks = [
  {
    path: "/movies",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_143_164)">
          <path
            d="M12 2C17.523 2 22 6.477 22 12C22.0013 13.5014 21.6638 14.9837 21.0128 16.3366C20.3618 17.6895 19.414 18.8782 18.24 19.814L18.001 20H20C20.2549 20.0003 20.5 20.0979 20.6854 20.2728C20.8707 20.4478 20.9822 20.687 20.9972 20.9414C21.0121 21.1958 20.9293 21.4464 20.7657 21.6418C20.6021 21.8373 20.3701 21.9629 20.117 21.993L20 22H12C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 14C12.5304 14 13.0391 14.2107 13.4142 14.5858C13.7893 14.9609 14 15.4696 14 16C14 16.5304 13.7893 17.0391 13.4142 17.4142C13.0391 17.7893 12.5304 18 12 18C11.4696 18 10.9609 17.7893 10.5858 17.4142C10.2107 17.0391 10 16.5304 10 16C10 15.4696 10.2107 14.9609 10.5858 14.5858C10.9609 14.2107 11.4696 14 12 14ZM8 10C8.53043 10 9.03914 10.2107 9.41421 10.5858C9.78929 10.9609 10 11.4696 10 12C10 12.5304 9.78929 13.0391 9.41421 13.4142C9.03914 13.7893 8.53043 14 8 14C7.46957 14 6.96086 13.7893 6.58579 13.4142C6.21071 13.0391 6 12.5304 6 12C6 11.4696 6.21071 10.9609 6.58579 10.5858C6.96086 10.2107 7.46957 10 8 10ZM16 10C16.5304 10 17.0391 10.2107 17.4142 10.5858C17.7893 10.9609 18 11.4696 18 12C18 12.5304 17.7893 13.0391 17.4142 13.4142C17.0391 13.7893 16.5304 14 16 14C15.4696 14 14.9609 13.7893 14.5858 13.4142C14.2107 13.0391 14 12.5304 14 12C14 11.4696 14.2107 10.9609 14.5858 10.5858C14.9609 10.2107 15.4696 10 16 10ZM12 6C12.5304 6 13.0391 6.21071 13.4142 6.58579C13.7893 6.96086 14 7.46957 14 8C14 8.53043 13.7893 9.03914 13.4142 9.41421C13.0391 9.78929 12.5304 10 12 10C11.4696 10 10.9609 9.78929 10.5858 9.41421C10.2107 9.03914 10 8.53043 10 8C10 7.46957 10.2107 6.96086 10.5858 6.58579C10.9609 6.21071 11.4696 6 12 6Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_164">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Movies",
  },
  {
    path: "/tvshows",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_143_168)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.95 4.00697C17.1322 3.81837 17.233 3.56576 17.2307 3.30357C17.2284 3.04137 17.1232 2.79056 16.9378 2.60515C16.7524 2.41974 16.5016 2.31457 16.2394 2.31229C15.9772 2.31002 15.7246 2.41081 15.536 2.59297L11.646 6.48197C11.5522 6.5757 11.4251 6.62836 11.2925 6.62836C11.1599 6.62836 11.0328 6.5757 10.939 6.48197L8.464 4.00697C8.27467 3.82918 8.02361 3.73202 7.76392 3.73605C7.50424 3.74009 7.25631 3.84499 7.07259 4.02858C6.88888 4.21216 6.7838 4.46001 6.77958 4.7197C6.77537 4.97938 6.87235 5.23052 7.05 5.41997L8.464 6.83397C8.521 6.89097 8.58 6.94597 8.639 6.99897H5C4.46957 6.99897 3.96086 7.20968 3.58579 7.58475C3.21071 7.95983 3 8.46853 3 8.99897V18.999C3 19.5294 3.21071 20.0381 3.58579 20.4132C3.96086 20.7883 4.46957 20.999 5 20.999H19C19.5304 20.999 20.0391 20.7883 20.4142 20.4132C20.7893 20.0381 21 19.5294 21 18.999V8.99997C21 8.46953 20.7893 7.96083 20.4142 7.58575C20.0391 7.21068 19.5304 6.99997 19 6.99997H13.947C14.0067 6.94678 14.0647 6.89176 14.121 6.83497L16.95 4.00697ZM5 8.99997H19V19H5V8.99997Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_168">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "TV Shows",
  },
  {
    path: "/anime",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_143_172)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 3C20.5046 2.99984 20.9906 3.19041 21.3605 3.5335C21.7305 3.87659 21.9572 4.34684 21.995 4.85L22 5V19C22.0002 19.5046 21.8096 19.9906 21.4665 20.3605C21.1234 20.7305 20.6532 20.9572 20.15 20.995L20 21H4C3.49542 21.0002 3.00943 20.8096 2.63945 20.4665C2.26947 20.1234 2.04284 19.6532 2.005 19.15L2 19V5C1.99984 4.49542 2.19041 4.00943 2.5335 3.63945C2.87659 3.26947 3.34684 3.04284 3.85 3.005L4 3H20ZM20 5H4V19H20V5ZM10.34 7.638L10.858 7.868L11.196 8.028L11.583 8.218L12.013 8.436L12.483 8.686L12.99 8.966L13.256 9.118L13.774 9.423L14.248 9.715L14.678 9.988L15.058 10.241L15.538 10.571L15.902 10.834L15.997 10.904C16.1513 11.0188 16.2767 11.1682 16.363 11.34C16.4494 11.5119 16.4943 11.7016 16.4943 11.894C16.4943 12.0864 16.4494 12.2761 16.363 12.448C16.2767 12.6198 16.1513 12.7692 15.997 12.884L15.674 13.119L15.234 13.427L14.878 13.666L14.473 13.929L14.02 14.212L13.521 14.512L12.987 14.821L12.478 15.103L12.007 15.353L11.577 15.573L11.191 15.761L10.569 16.049L10.339 16.149C10.1624 16.2251 9.97051 16.2589 9.77856 16.2476C9.58662 16.2364 9.39995 16.1805 9.23346 16.0843C9.06696 15.9881 8.92524 15.8544 8.8196 15.6937C8.71396 15.5331 8.64732 15.35 8.625 15.159L8.567 14.594L8.535 14.22L8.493 13.556L8.47 13.048L8.455 12.493C8.45322 12.395 8.45188 12.297 8.451 12.199L8.449 11.894C8.449 11.687 8.451 11.487 8.455 11.294L8.47 10.739L8.493 10.232L8.52 9.775L8.55 9.374L8.625 8.63C8.64719 8.43882 8.71376 8.25547 8.81939 8.09458C8.92502 7.93369 9.0668 7.79972 9.2334 7.70335C9.4 7.60698 9.58682 7.55089 9.77896 7.53954C9.97109 7.5282 10.1632 7.56191 10.34 7.638ZM10.951 10.139L10.515 9.921L10.486 10.408L10.464 10.959L10.451 11.569L10.449 11.894L10.451 12.219L10.464 12.828L10.474 13.111L10.5 13.631L10.515 13.866L10.949 13.648L11.436 13.392L11.971 13.098L12.255 12.936L12.806 12.61L13.3 12.304L13.736 12.024L13.932 11.894L13.525 11.624L13.059 11.33C12.7938 11.1658 12.5261 11.0058 12.256 10.85L11.973 10.689L11.439 10.395L10.951 10.139Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_172">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Anime",
  },
];

export const generalLinks = [
  {
    path: "/settings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_143_184)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.0352 2.80896C14.4052 2.54296 14.9252 2.41896 15.4362 2.60596C16.5226 3.00394 17.5316 3.58761 18.4182 4.33096C18.8352 4.68096 18.9882 5.19196 18.9422 5.64396C18.8672 6.39696 18.9992 7.12396 19.3622 7.74996C19.6822 8.30696 20.1642 8.74696 20.7522 9.05696L20.9772 9.16696C21.3912 9.35396 21.7592 9.74296 21.8522 10.28C22.0497 11.4181 22.0497 12.5818 21.8522 13.72C21.7692 14.204 21.4622 14.567 21.0992 14.771L20.9772 14.834C20.2872 15.144 19.7232 15.624 19.3612 16.25C18.9992 16.877 18.8672 17.603 18.9422 18.356C18.9872 18.808 18.8352 19.32 18.4182 19.669C17.5316 20.4123 16.5226 20.996 15.4362 21.394C15.204 21.477 14.955 21.5019 14.7109 21.4665C14.4669 21.4312 14.2352 21.3365 14.0362 21.191C13.4202 20.75 12.7232 20.5 12.0002 20.5C11.2772 20.5 10.5802 20.749 9.96517 21.191C9.76602 21.3367 9.53417 21.4314 9.28994 21.4668C9.0457 21.5022 8.79651 21.4772 8.56417 21.394C7.47777 20.996 6.46877 20.4123 5.58217 19.669C5.39439 19.5094 5.24848 19.3064 5.15715 19.0775C5.06582 18.8487 5.03184 18.601 5.05817 18.356C5.13317 17.603 5.00017 16.876 4.63817 16.25C4.30847 15.691 3.8263 15.2377 3.24817 14.943L3.02317 14.833C2.79752 14.733 2.59978 14.5793 2.44725 14.3853C2.29472 14.1913 2.19203 13.9628 2.14817 13.72C1.95061 12.5818 1.95061 11.4181 2.14817 10.28C2.23117 9.79596 2.53817 9.43296 2.90117 9.22896L3.02317 9.16696C3.71317 8.85596 4.27717 8.37696 4.63917 7.74996C5.00017 7.12396 5.13317 6.39696 5.05817 5.64396C5.03184 5.39896 5.06582 5.15125 5.15715 4.9224C5.24848 4.69354 5.39439 4.4905 5.58217 4.33096C6.46878 3.58761 7.47778 3.00394 8.56417 2.60596C8.79638 2.52299 9.04536 2.49811 9.2894 2.5335C9.53343 2.56888 9.76509 2.66345 9.96417 2.80896C10.5792 3.25096 11.2762 3.49996 12.0002 3.49996C12.7242 3.49996 13.4202 3.25096 14.0352 2.80896ZM14.9922 4.57796C14.1262 5.14796 13.1052 5.49996 12.0002 5.49996C10.8952 5.49996 9.87417 5.14696 9.00817 4.57796C8.31201 4.85896 7.65892 5.23667 7.06817 5.69996C7.12817 6.73296 6.92317 7.79296 6.37117 8.74996C5.81817 9.70596 5.00317 10.413 4.07817 10.878C3.97396 11.6217 3.97396 12.3763 4.07817 13.12C5.00317 13.585 5.81817 14.292 6.37117 15.25C6.92317 16.205 7.12817 17.265 7.06817 18.298C7.65886 18.7616 8.31195 19.1396 9.00817 19.421C9.87417 18.851 10.8952 18.499 12.0002 18.499C13.1052 18.499 14.1262 18.852 14.9922 19.421C15.6883 19.1399 16.3414 18.7622 16.9322 18.299C16.8722 17.265 17.0772 16.205 17.6292 15.249C18.1812 14.292 18.9972 13.585 19.9222 13.119C20.0264 12.3759 20.0264 11.622 19.9222 10.879C18.9972 10.413 18.1822 9.70596 17.6292 8.74896C17.0772 7.79296 16.8722 6.73296 16.9322 5.69896C16.3414 5.23567 15.6883 4.85896 14.9922 4.57796ZM12.0002 7.99996C13.061 7.99996 14.0785 8.42138 14.8286 9.17153C15.5787 9.92168 16.0002 10.9391 16.0002 12C16.0002 13.0608 15.5787 14.0782 14.8286 14.8284C14.0785 15.5785 13.061 16 12.0002 16C10.9393 16 9.92189 15.5785 9.17175 14.8284C8.4216 14.0782 8.00017 13.0608 8.00017 12C8.00017 10.9391 8.4216 9.92168 9.17175 9.17153C9.92189 8.42138 10.9393 7.99996 12.0002 7.99996ZM12.0002 9.99996C11.4697 9.99996 10.961 10.2107 10.586 10.5857C10.2109 10.9608 10.0002 11.4695 10.0002 12C10.0002 12.5304 10.2109 13.0391 10.586 13.4142C10.961 13.7892 11.4697 14 12.0002 14C12.5306 14 13.0393 13.7892 13.4144 13.4142C13.7895 13.0391 14.0002 12.5304 14.0002 12C14.0002 11.4695 13.7895 10.9608 13.4144 10.5857C13.0393 10.2107 12.5306 9.99996 12.0002 9.99996Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_184">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Settings",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_143_180)">
          <path
            d="M12 3C12.2549 3.00028 12.5 3.09788 12.6854 3.27285C12.8707 3.44782 12.9822 3.68695 12.9972 3.94139C13.0121 4.19584 12.9293 4.44638 12.7657 4.64183C12.6021 4.83729 12.3701 4.9629 12.117 4.993L12 5H7C6.75507 5.00003 6.51866 5.08996 6.33563 5.25272C6.15259 5.41547 6.03566 5.63975 6.007 5.883L6 6V18C6.00003 18.2449 6.08996 18.4813 6.25272 18.6644C6.41547 18.8474 6.63975 18.9643 6.883 18.993L7 19H11.5C11.7549 19.0003 12 19.0979 12.1854 19.2728C12.3707 19.4478 12.4822 19.687 12.4972 19.9414C12.5121 20.1958 12.4293 20.4464 12.2657 20.6418C12.1021 20.8373 11.8701 20.9629 11.617 20.993L11.5 21H7C6.23479 21 5.49849 20.7077 4.94174 20.1827C4.38499 19.6578 4.04989 18.9399 4.005 18.176L4 18V6C3.99996 5.23479 4.29233 4.49849 4.81728 3.94174C5.34224 3.38499 6.06011 3.04989 6.824 3.005L7 3H12ZM17.707 8.464L20.535 11.293C20.7225 11.4805 20.8278 11.7348 20.8278 12C20.8278 12.2652 20.7225 12.5195 20.535 12.707L17.707 15.536C17.5194 15.7235 17.2649 15.8288 16.9996 15.8287C16.7344 15.8286 16.48 15.7231 16.2925 15.5355C16.105 15.3479 15.9997 15.0934 15.9998 14.8281C15.9999 14.5629 16.1054 14.3085 16.293 14.121L17.414 13H12C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11H17.414L16.293 9.879C16.1054 9.69149 15.9999 9.43712 15.9998 9.17185C15.9997 8.90658 16.105 8.65214 16.2925 8.4645C16.48 8.27686 16.7344 8.17139 16.9996 8.1713C17.2649 8.1712 17.5194 8.27649 17.707 8.464Z"
            fill="#8C8C8E"
          />
        </g>
        <defs>
          <clipPath id="clip0_143_180">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Logout",
  },
];

export const heroCarouselData: IMovie[] = [
  {
    _id: "1",
    title: "Aquaman and the Lost Kingdom",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    releaseDate: "2023",
    runtime: "1h 46m",
    genres: ["Horror", "Mystery", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/iNgn9LP0iMuLSnWqolivcY3Y7F6.jpg",
  },
  {
    _id: "2",
    title: "Thanksgiving", //
    overview:
      "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
    releaseDate: "2023",
    runtime: "2h 4m",
    genres: ["Action", "Adventure", "Fantasy"],
    backdrop:
      "https://image.tmdb.org/t/p/original/meRwi0lVzv7cMnLNJKoZY59krMp.jpg",
  },
  {
    _id: "3",
    title: "The Beekeeper",
    overview:
      "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
    releaseDate: "2024",
    runtime: "1h 45m",
    genres: ["Action", "Thriller"],
    backdrop:
      "https://image.tmdb.org/t/p/original/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
  },
  {
    _id: "4",
    title: "Oppenheimer",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    releaseDate: "2023",
    runtime: "3h 1m",
    genres: ["Drama", "History"],
    backdrop:
      "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
  },
];

export const collectionsData: ICollection[] = [
  {
    _id: "1",
    name: "Must Watch Action",
    movies: [
      {
        _id: "1",
        title: "The Equalizer 3",
        overview:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        releaseDate: "2023",
        runtime: "1h 46m",
        genres: ["Horror", "Mystery", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/jojfdfuhh8pWVn5G0HmPspv3sja.jpg",
        backdropWithText:
          "https://image.tmdb.org/t/p/original/bQ4mX2lxnpDBnlKkj0nd1TNIJsk.jpg",
      },
      {
        _id: "2",
        title: "The Bricklayer",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        releaseDate: "2023",
        runtime: "2h 4m",
        genres: ["Action", "Adventure", "Fantasy"],
        backdrop:
          "https://image.tmdb.org/t/p/original/rsG3b17WzUaMKCgHjMRPNaBlfcM.jpg",
      },
      {
        _id: "3",
        title: "Dead for a Dollar",
        overview:
          "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        releaseDate: "2024",
        runtime: "1h 45m",
        genres: ["Action", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/sfrXFuVWcWpfjrbL8X7aCMCHfrf.jpg",
      },
      {
        _id: "4",
        title: "The Creator",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/nZQcowL2neIM5sMLiZiaUN0rPf1.jpg",
      },
      {
        _id: "5",
        title: "Freelance",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/ow5z2yWnSb5J2wQWAgGYbO0nBcw.jpg",
      },
    ],
  },

  {
    _id: "2",
    name: "Laugh Out Loud Comedies Cache",
    movies: [
      {
        _id: "1",
        title: "Wonka",
        overview:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        releaseDate: "2023",
        runtime: "1h 46m",
        genres: ["Horror", "Mystery", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/95ldoFNgoYinCn9K4D7JoIHDv4g.jpg",
      },
      {
        _id: "2",
        title: "Trolls Band Together",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        releaseDate: "2023",
        runtime: "2h 4m",
        genres: ["Action", "Adventure", "Fantasy"],
        backdrop:
          "https://image.tmdb.org/t/p/original/c6msiFybhohrgaBYxfR5gyDkn6L.jpg",
      },
      {
        _id: "3",
        title: "The Family Plan",
        overview:
          "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        releaseDate: "2024",
        runtime: "1h 45m",
        genres: ["Action", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/2R8VCFxHjcFbMwWepWd9QBH1AyF.jpg",
      },
      {
        _id: "4",
        title: "Ruby Gillman, Teenage Kraken",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/iu9bgjga2YymekAmUAMqU83IHFZ.jpg",
      },
      {
        _id: "5",
        title: "Chicken Run",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/aTydnWgZ32m41DnTIb7paXsLBs8.jpg",
      },
    ],
  },

  {
    _id: "3",
    name: "Heart-Pounding Horror Haven",
    movies: [
      {
        _id: "1",
        title: "Thanksgiving",
        overview:
          "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
        releaseDate: "2023",
        runtime: "1h 46m",
        genres: ["Horror", "Mystery", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/enCrVL80z58zNRF4AhZ9Unq8R4s.jpg",
      },
      {
        _id: "2",
        title: "The Nun II",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        releaseDate: "2023",
        runtime: "2h 4m",
        genres: ["Action", "Adventure", "Fantasy"],
        backdrop:
          "https://image.tmdb.org/t/p/original/tzqegi5m05VEFGmUX4Uk9xsSE1P.jpg",
      },
      {
        _id: "3",
        title: "Night Swim",
        overview:
          "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        releaseDate: "2024",
        runtime: "1h 45m",
        genres: ["Action", "Thriller"],
        backdrop:
          "https://image.tmdb.org/t/p/original/bgkhfC1U9FVgYU0QYf7N6M2ADfH.jpg",
      },
      {
        _id: "4",
        title: "A Quiet Place Part II",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/tJRSV7UsuLb65svcEASDFmt4k30.jpg",
      },
      {
        _id: "5",
        title: "The Boogyman",
        overview:
          "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        releaseDate: "2023",
        runtime: "3h 1m",
        genres: ["Drama", "History"],
        backdrop:
          "https://image.tmdb.org/t/p/original/bVrKmBSiv1OZHQjRLEke0wOYqaO.jpg",
      },
    ],
  },
];
