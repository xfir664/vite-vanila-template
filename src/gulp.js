import gulp from "gulp";
import glob from "glob";

const scripts = []; // Массив для хранения функций из модулей

// Импортируем все модули из папки modules
const modules = glob.sync("./modules/*.js");

// Функция для загрузки модулей
function loadModules() {
  // Перебираем все модули
  modules.forEach((modulePath) => {
    // Импортируем модуль
    const module = import(modulePath);

    // Перебираем все функции в модуле
    (async () => {
      const moduleExports = await module;
      Object.values(moduleExports).forEach((func) => {
        // Проверяем, является ли функция
        if (typeof func === "function") {
          // Добавляем функцию в массив
          scripts.push(func);
        }
      });
    })();
  });
  // Выполняем все функции из массива
  scripts.forEach((script) => script());
}

// Вызываем функцию загрузки модулей
gulp.task("default", loadModules);