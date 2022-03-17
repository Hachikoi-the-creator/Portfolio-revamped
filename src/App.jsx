import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import "./app.css";
import EnglishData from "./lang/EnglishData";
import SpanishData from "./lang/EspanishData";
import AboutMe from "./components/AboutMe";
import ContacMe from "./components/ContacMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: EnglishData,
      },
      es: {
        translation: SpanishData,
      },
    },
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    fallbackLng: "en",
  });

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContacMe />
    </>
  );
}
