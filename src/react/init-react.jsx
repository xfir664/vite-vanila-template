import React from "react";
import { createRoot } from "react-dom/client"; // Импортируйте createRoot

const App = () => {
  return <h1>Привет, мир!</h1>;
};

// Получите элемент root
const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Создайте корень

// Используйте root.render для рендеринга вашего приложения
root.render(<App />);
