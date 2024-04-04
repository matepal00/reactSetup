import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

export default class I18n {
  public static options: InitOptions = {
    defaultNS: "shared",
    fallbackNS: "shared",
    backend: {
      loadPath: "/public/locales/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  };

  public static init = (options: InitOptions = {}) =>
    i18next
      .use(Backend)
      .use(initReactI18next)
      .init({ ...I18n.options, ...options });
}
