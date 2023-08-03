"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import type {NextComponentType, NextPageContext} from "next";
import {ReactNode, useEffect} from "react";
import AppLayout from "./AppLayout";

interface Props {
  children: ReactNode;
}

const AosProvider: NextComponentType<NextPageContext, {}, Props> = ({children}: Props) => {
  useEffect(() => {
    AOS.init({
      throttleDelay: 50,
      offset: 80, // offset (in px) from the original trigger point
      delay: 10, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
  });
  return <AppLayout>{children}</AppLayout>;
};

export default AosProvider;
