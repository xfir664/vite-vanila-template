// server.js
import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const PORT = 3000;

// Настройка CORS
app.use(cors());

// Настройка multer для обработки данных формы
const upload = multer();

app.post("/api/submit", (req, res) => {
  console.log(req.body); // Выводим данные в консоль сервера
  res.json({ message: "Данные успешно получены", data: req.body });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
