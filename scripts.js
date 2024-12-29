document.addEventListener("DOMContentLoaded", () => {
    const texts = {
        ru: {
            back: "Назад",
            about: "Обо мне",
            anime: "Моя статистика по аниме",
            games: "Моя статистика по играм",
            aboutme: "Привет! Я — Young Shame. Увлекаюсь веб-разработкой на любительском уровне, создаю различные проекты и всегда ищу что-то новое в этой сфере. Помимо разработки, я также люблю игры и музыку. В последнее время начал осваивать роль Achievement Hunter и рад зарабатывать трофеи в играх. Всё, что я делаю, вдохновляет меня и помогает развиваться в новых направлениях.",
            leg: "Легенда списка",
            leg1: "#🎫 = Лицензия (Куплена или получена в официальном магазине.)",
            leg2: "#✴️ = Платина (Выполнение всех достижений.)",
            leg3: "#🎬 = Смотрю",
            leg4: "#📝 = В планах",
            leg5: "#✅ = Просмотрено",
            leg6: "#🎮 = Прохожу",
            leg7: "#✅ = Прошел",

        },
        en: {
            back: "Back",
            about: "About Me",
            anime: "My Anime Stats",
            games: "My Games Stats",
            aboutme: "Hi! I am a Young Shame. I am interested in web development at an amateur level, I create various projects and am always looking for something new in this field. Besides developing, I also love games and music. Recently, I have started to master the role of Achievement Hunter and am happy to earn trophies in games. Everything I do inspires me and helps me develop in new directions.",
            leg: "List Legend",
            leg1: "#🎫 = License (Purchased or obtained from the official store.)",
            leg2: "#✴️ = Platinum (Completing all achievements.)",
            leg3: "#🎬 = I'm looking",
            leg4: "#📝 = In the plans",
            leg5: "#✅ = Viewed",
            leg6: "#🎮 = I'm passing",
            leg7: "#✅ = Passed",
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
            if (btn.href.includes("about.html")) {
                btn.textContent = texts[lang].about;
            } else if (btn.href.includes("anime.html")) {
                btn.textContent = texts[lang].anime;
            } else if (btn.href.includes("games.html")) {
                btn.textContent = texts[lang].games;
            }
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
