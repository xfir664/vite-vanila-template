const scripts = []; // Массив для хранения функций из модулей

// Импортируем все модули из папки modules
const modules = import.meta.glob("./modules/*.js");

// Асинхронная функция для загрузки модулей
async function loadModules() {
  // Перебираем все модули
  for (const modulePath in modules) {
    // Импортируем модуль
    const module = await modules[modulePath]();

    // Перебираем все функции в модуле
    Object.values(module).forEach((func) => {
      // Проверяем, является ли функция
      if (typeof func === "function") {
        // Добавляем функцию в массив
        scripts.push(func);
      }
    });
  }
  // Выполняем все функции из массива
  scripts.forEach((script) => script());
}

// Вызываем функцию загрузки модулей
loadModules();

const obj = {
  method: function ss() {
    console.log("method called");
  },
  values: "value",
};

class MyClass {
  values = "value";

  ss() {
    console.log("method called");
  }
}
