const scripts = [];

const modules = import.meta.glob("./modules/*.js");

async function loadModules() {
  for (const modulePath in modules) {
    const module = await modules[modulePath]();

    // Перебираем все функции в модуле
    Object.values(module).forEach((func) => {
      if (typeof func === "function") {
        scripts.push(func);
      }
    });
  }

  scripts.forEach((script) => script());
}

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
