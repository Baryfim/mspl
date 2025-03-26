import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Разрешаем только GET-запросы
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Метод ${req.method} не поддерживается` });
  }

  try {
    // Здесь можно выполнить логику получения данных, например, запрос к базе или внешнему API
    const data = await fetchData(); // Ваша функция получения данных

    // Если данные успешно получены, возвращаем их
    return res.status(200).json(data);
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    return res.status(500).json({ error: 'Ошибка сервера' });
  }
}

// Пример асинхронной функции для получения данных (может быть заменена на вашу логику)
async function fetchData() {
  // Например, запрос к внешнему API или обращение к базе данных
  // Возвращаем тестовые данные для примера
  return { message: 'Данные успешно получены' };
}
