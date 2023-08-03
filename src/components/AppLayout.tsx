"use client";

import logo from "@/assets/image/logo.png";
import styles from "@/styles/components/Layout.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import SlideBar from "../components/SlideBar";

const AppLayout = ({children}: any) => {
  const [open, setOpen] = useState(false);

  return (
    <main className={styles.main}>
      <div className={`${open && styles.containerOpen}  ${styles.container}`}>
        <Link href={"/"} className={styles.logo}>
          <Image src={logo} alt="okafor henry logo" className={styles.logo} />
        </Link>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {children}
      </div>
      <SlideBar open={open} setOpen={setOpen} />
    </main>
  );
};

export default AppLayout;
