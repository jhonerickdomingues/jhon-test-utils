import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ptBr from "./locale/pt-br.json";
import enUs from "./locale/en-us.json";

const resources = {
  enUs: {
    translation: enUs,
  },
  ptBr: {
    translation: ptBr,
  },
};

const seti18n = () => {
  i18n.use(initReactI18next).init({
    resources, // Where we're gonna put translations' files
    lng: "ptBr",
    debug: false,
  });
};

export { seti18n, useTranslation };
