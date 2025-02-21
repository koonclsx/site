document.addEventListener("DOMContentLoaded", () => {
    const texts = {
        ru: {
            back: "Назад",
            about: "Обо мне",
            aboutme: "Привет! Я — Young Shame. Увлекаюсь веб-разработкой на любительском уровне, создаю различные проекты и всегда ищу что-то новое в этой сфере. Помимо разработки, я также люблю игры и музыку. В последнее время начал осваивать роль Achievement Hunter и рад зарабатывать трофеи в играх. Всё, что я делаю, вдохновляет меня и помогает развиваться в новых направлениях.",

        },
        en: {
            back: "Back",
            about: "About Me",
            aboutme: "Hi! I am a Young Shame. I am interested in web development at an amateur level, I create various projects and am always looking for something new in this field. Besides developing, I also love games and music. Recently, I have started to master the role of Achievement Hunter and am happy to earn trophies in games. Everything I do inspires me and helps me develop in new directions.",
        }
    };

    const langBtns = document.querySelectorAll(".lang-btn");
    const backButton = document.querySelector(".page-links a");
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

        // Обновление текста кнопки "Назад"
        if (backButton) {
            backButton.textContent = texts[lang].back;
        }

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
