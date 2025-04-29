"use client";
import { localeWithName } from "@/constants/locale";
import { useLocale } from "next-intl";
import { useState } from "react";
import classNames from "classnames";
import { FaChevronDown } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import "./LanguageSwitcher.scss";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { usePathname } from "@/i18n/navigation";
export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const selectedLocale = localeWithName.find((loc) => loc.code === locale);
  const handleLocaleChange = (newLocale: string) => {
    if (pathname) {
      const segments = pathname.split("/").filter(Boolean);
      segments[0] = newLocale; // Replace the locale code at the beginning
      const newPath = "/" + segments.join("/");
      router.push(newPath);
    }
  };
  return (
    <menu className="lang-switch">
      <div className="lang-switch-container">
        <span className="lang-icon">
          <MdLanguage />
        </span>
        <div className="lang-wrapper">
          <div onClick={() => setIsOpen(!isOpen)} className="selected-lang">
            <p>{selectedLocale?.name}</p>
            <FaChevronDown
              className={classNames("lang-icon-arrow", isOpen && "open")}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            exit={{ opacity: 0, height: 0 }}
            className={classNames("lang-options", isOpen && "open")}
          >
            {localeWithName
              .filter((loc) => loc.code != locale)
              .map((loc) => (
                <div
                  key={loc.code}
                  className="lang-option"
                  onClick={() => handleLocaleChange(loc.code)}
                >
                  {loc.name}
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </menu>
  );
}
