"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Naposobulung - HKBP Tanjung Mulia";
  }, []);
};

export default SEO;