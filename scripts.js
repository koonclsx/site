document.addEventListener("DOMContentLoaded", () => {
    const texts = {
        ru: {
            back: "Назад",
            about: "Обо мне",
            aboutme: "Привет! Я — Руслан. Увлекаюсь разработкой на любительском уровне, создаю различные проекты и всегда ищу что-то новое в этой сфере. Помимо разработки, я также люблю игры и музыку.  Всё, что я делаю, вдохновляет меня и помогает развиваться в новых направлениях.",
            back: "Назад"
        },
        en: {
            back: "Back",
            about: "About Me",
            aboutme: "Hi! I am a Ruslan. I am interested in development at an amateur level, I create various projects and am always looking for something new in this field. Besides developing, I also love games and music. Everything I do inspires me and helps me develop in new directions.",
            back: "Back"
        }
    };

    const langBtns = document.querySelectorAll(".lang-btn");
    
    const pageButtons = document.querySelectorAll(".page-button");
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    const switchLanguage = (lang) => {
        document.title = lang === "ru" ? "Young Shame Profile" : "Young Shame Profile";

        // Обновление текста всех элементов с атрибутом data-translate
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute("data-translate");
            if (texts[lang] && texts[lang][key]) {
                element.textContent = texts[lang][key];
            }
        });

        

        // Обновление текста всех страниц
        pageButtons.forEach((btn) => {
            (btn.href.includes("about.html"))
                btn.textContent = texts[lang].about;
        });

        // Обновление текста кнопок выбора языка
        langBtns.forEach((btn) => {
            btn.textContent = btn.dataset.lang === "ru" ? "RU" : "EN";
        });
    }

    // Слушаем изменения языка через кнопки
    langBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
            localStorage.setItem("language", lang);
        });
    });

    // Загружаем язык из localStorage
    const savedLang = localStorage.getItem("language") || "ru";
    switchLanguage(savedLang);
});
