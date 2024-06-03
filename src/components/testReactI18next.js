import { useTranslation } from "react-i18next";

const TestReacti18next = () => {
    const { t, i18n } = useTranslation();
    return <>
        <h1>{t("Hello World")}</h1>
        <button onClick={() => i18n.changeLanguage("en-US")}>ENG</button>
        <button onClick={() => i18n.changeLanguage("vi-VN")}>VN</button>
    </>
}

export default TestReacti18next;