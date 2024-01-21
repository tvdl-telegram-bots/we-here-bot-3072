import React from "react";

type Length = `${number}${"px" | "em"}`;

type Props = {
  className?: string;
  style?: React.CSSProperties;
  size?: Length;
};

export default function IconSafetyAndEmpathy({
  className,
  style,
  size = "1em",
}: Props) {
  return (
    <svg
      className={className}
      style={style}
      fill="none"
      viewBox="0 0 600 600"
      width={size}
      height={size}
    >
      <g fill="currentColor">
        <path d="M169.82 179.6c0-9.42.37-18.47-.06-27.49-1.76-36.69 12.28-63.73 47.65-78.44-7.03-10.76-9.33-22.3-5.94-34.62 2.44-8.85 7.54-15.97 14.97-21.39a39.85 39.85 0 0 1 49.3 1.82c15.47 13.17 17.95 31.72 7.1 54.03 5.24 2.8 10.44 5.69 15.77 8.32.9.44 2.5.04 3.53-.47 4.87-2.44 9.66-5.06 15-7.89-7-11.18-9.51-23.34-4.97-36.37a39.32 39.32 0 0 1 15.69-20.21 40.04 40.04 0 0 1 47.93 2.86c15.45 13.27 17.76 30.73 7 54.11 3.2 1.47 6.53 2.75 9.6 4.46 24.11 13.48 36.6 34.2 37.55 61.69.45 13 .08 26.03.08 39.26 11.2 2.56 22.34 4.44 33.06 7.73a230.88 230.88 0 0 1 31.53 12.21c10.71 5.1 16.13 13.65 15.49 26.42-.84 16.96-.3 33.99-.07 50.99.03 1.9 1.43 4.9 2.94 5.48 20.96 8.12 31.83 24.33 35.73 45.43 3.9 21.13-.34 40.89-15.38 56.81-5.49 5.81-13.25 9.68-20.43 13.59-2.93 1.59-4.18 2.96-4.5 6.11-9.49 91.24-81.24 167.74-171.48 182.94-114.39 19.27-219.88-53.04-243.02-166.62-1.17-5.72-1.56-11.6-2.7-17.33-.32-1.63-1.72-3.93-3.09-4.33-21.6-6.34-38.81-30.39-38.08-59.74.5-20.1 7.59-37.22 23.82-49.77 3.23-2.5 7-4.74 10.88-5.86 4.65-1.35 5.4-3.87 5.34-8.16-.22-17.37.25-34.76-.23-52.13-.27-9.88 4.07-16.52 11.79-21.68 13.43-8.98 28.75-13.06 44.17-16.77 7.69-1.85 15.49-3.24 24.02-5l.01.01Zm-59.64 65.23c-.1 1.66-.25 2.95-.25 4.25 0 43.43-.19 86.86.13 130.29a224.28 224.28 0 0 0 2.8 33.23C129.15 515.5 232 587.13 334.38 567.1c91.76-17.95 155.19-94.7 155.58-188.5.18-42.86.04-85.73.02-128.6 0-1.74-.21-3.49-.35-5.76-26.37 11.71-53.73 16.18-81.26 19.47-47.31 5.66-94.82 8-142.45 5.71-52.57-2.53-105.15-5.41-155.75-24.6l.01.01Zm299.6-34.79c0-24.09.24-47.68-.07-71.25-.3-23.14-16.86-43.06-39.73-47.18-8.81-1.59-18.04-1.18-27.07-1.2-31.8-.06-52.95 21.05-53.03 52.78-.05 20.39-.02 40.79 0 61.18 0 1.81.2 3.62.32 5.66h119.58v.01ZM285.36 96.62c-5.65-1.95-10.11-4.41-14.78-4.9a275.9 275.9 0 0 0-29.33-1.29c-29.89.08-51.22 21.59-51.33 51.52-.08 20.95-.02 41.9 0 62.85 0 1.64.19 3.28.3 5.05h79.75v-6.56c0-17.55.39-35.12-.11-52.66-.54-19.18 2.21-37.25 15.48-54.01h.02ZM109.71 221.13c2.32 1.66 4.07 3.44 6.19 4.35 5.7 2.45 11.44 4.92 17.36 6.7 27.23 8.17 55.27 12.01 83.47 14.42 67.53 5.77 134.98 5.32 202.19-4.36 20.35-2.93 40.58-6.68 59.68-14.71 4.01-1.69 7.63-4.31 12.92-7.37-19.84-12.45-40.49-15.74-60.83-20.05-.37 1.22-.57 1.58-.58 1.93-.05 5.28-.04 10.57-.1 15.85-.1 8.59-3.53 12.26-11.92 12.27-78.72.04-157.43.04-236.15 0-8.54 0-11.95-3.48-12.1-12.08-.1-5.8-.02-11.59-.02-17.41-19.69.97-51.54 11.63-60.12 20.44l.01.02ZM249.68 70.14a19.97 19.97 0 0 0 20.25-19.93 19.97 19.97 0 0 0-19.78-19.84A19.95 19.95 0 0 0 229.9 50.3a19.96 19.96 0 0 0 19.77 19.84h.01Zm100.33-.01a19.99 19.99 0 0 0 19.93-19.67 20 20 0 0 0-20.08-20.09 19.66 19.66 0 0 0-19.78 19.68 19.66 19.66 0 0 0 19.93 20.09v-.01Zm160.42 232.96v74.34c15.86-10.55 20.8-25.14 19.38-42.45-1.11-13.51-7.41-23.97-19.38-31.89Zm-420.75-.23C74.05 313.4 68.72 327.5 69.91 344.5c.98 13.95 7.21 24.91 19.77 33.1v-74.74Z" />
        <path d="M385.83 390.16c-7.62-.07-17.11-4.14-25.12-11.7-10.02-9.45-16.13-21.25-20.03-34.26-1.89-6.31.76-11.71 6.05-13.38 5.79-1.83 10.49 1.2 13.18 7.48 3.02 7.05 5.84 14.45 10.29 20.58 11.19 15.44 28.41 15.37 39.54-.1 4.32-6.01 7.18-13.17 10.09-20.06 2.83-6.7 7.52-9.84 13.43-7.87 5.25 1.75 7.8 7.16 5.88 13.48-3.94 12.99-10.04 24.81-20.08 34.23-8.35 7.83-18.26 11.81-33.22 11.6h-.01ZM209.03 390.21c-12.08.08-22.72-5.31-31.4-14.8-8.17-8.93-13.45-19.52-16.94-31-1.91-6.29.65-11.77 5.86-13.53 5.95-2 10.5 1.11 13.42 7.8 3.22 7.36 6.36 15.06 11.18 21.36 10.57 13.84 26.72 13.99 37.35.17 5.16-6.71 8.19-15.11 11.83-22.9 2.18-4.66 5.32-7.22 10.51-6.82 4.73.37 7.59 3.15 8.71 7.59.39 1.56.31 3.42-.13 4.97-3.92 13.84-10.31 26.3-21.09 36.14-7.99 7.29-17.45 10.99-29.3 11.01v.01ZM293.76 426.42c8.1-1.99 15.16-3.74 22.23-5.45 7.11-1.73 12.24.85 13.84 6.91 1.48 5.61-1.83 10.63-8.58 12.39a1538.9 1538.9 0 0 1-37.3 9.31c-9.66 2.26-15.7-3.78-13.34-13.42 6.27-25.62 12.72-51.19 19.18-76.76 1.78-7.06 6.91-10.58 12.67-9.03 5.93 1.6 8.53 6.86 6.78 13.95-5.03 20.29-10.1 40.56-15.47 62.1h-.01Z" />
      </g>
    </svg>
  );
}