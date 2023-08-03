"use client";

import {TextBoxIn} from "@/components/TextBox";
import {information} from "@/constants/data";
import styles from "@/styles/components/Animate.module.css";
import btn from "@/styles/components/Button.module.css";
import style from "@/styles/pages/Contact.module.css";
import {useState} from "react";

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className={` py-[8rem] background `}>
      <div className="max-w-[1200px] !px-2 bgtext mx-auto !pt-[2rem] w-full h-full flex justify-center flex-col z-30">
        <div className=" items-center  self-center z-30 flex">
          <TextBoxIn text="C" />
          <TextBoxIn text="O" />
          <TextBoxIn text="N" />
          <TextBoxIn text="T" />
          <TextBoxIn text="A" />
          <TextBoxIn text="C" />
          <TextBoxIn text="T" />
        </div>

        <div className={style.form}>
          <div className={style.field}>
            <label className={styles.label}>Subject</label>
            <input
              className={style.input}
              value={subject}
              placeholder={"your subject..."}
              onChange={(e) => setSubject(e.target.value)}
              id=""
              type="text"
            />
          </div>
          <div className={style.field}>
            <label className={styles.label}>Message</label>
            <textarea
              rows={7}
              className={style.input}
              value={message}
              placeholder={"write your message..."}
              onChange={(e) => setMessage(e.target.value)}
              id=""
            />
          </div>
          <a
            href={`mailto:${information.home.email}?subject=${subject}&body=${message}`}
            className={`${btn.button} ${btn.contactbutton}`}
          >
            Send
          </a>
        </div>
      </div>
    </div>
  );
}
