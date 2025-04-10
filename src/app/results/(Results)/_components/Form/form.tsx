"use client";
import { useEffect, useState } from "react";
import classesForm from "./form.module.css";
import GetProjects, { IProject } from "@/shared/services/projects.handle";
import GetResults, { IResult } from "@/shared/services/results.handle";
import { useRouter } from "next/navigation";

const Form = () => {
  // Устанавливаем сегодняшнюю дату в формате YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [game, setGame] = useState("");
  const [isFound, setIsFound] = useState(true);
  const [games, setGames] = useState<IProject[]>([]);

  const router = useRouter();

  useEffect(() => {
    const getGames = async () => {
      const projects = await GetProjects();
      if (projects !== undefined && projects.length > 0) {
        setGames(projects);
      }
    };
    getGames();
  }, []);

  // Функция для формирования запроса
  const handleSearch = () => {
    const newSplitDate = date.split("-");
    const newDate = `${newSplitDate[0]}-${newSplitDate[1]}-${newSplitDate[2]}`;

    const getUrl = async ({
      date,
      project,
    }: {
      date: string;
      project: string;
    }) => {
      const response = await GetResults({ date, project });
      if (response !== undefined) {
        router.push(response.url);
        return;
      }
      setIsFound(false);
      setTimeout(() => {
        setIsFound(true);
      }, 1700);
    };

    getUrl({ date: newDate, project: game });
  };

  return (
    <div className={classesForm.form_wrapper}>
      <div className={classesForm.form_inner}>
        <div className={classesForm.divie}>
          <div className={classesForm.from_content}>
            <div className={classesForm.date}>
              <h3>Дата</h3>
              <div className={classesForm.input_wrapper}>
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className={classesForm.game}>
              <h3>Выбор игр</h3>
              <div className={classesForm.select_wrapper}>
                <select
                  name="pets"
                  className={classesForm.select}
                  id="pet-select"
                  value={game}
                  onChange={(e) => setGame(e.target.value)}
                >
                  {games.map((game) => (
                    <option key={game.id} value={game.title}>
                      {game.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button className={classesForm.button_search} onClick={handleSearch}>
            {isFound ? (
              <img src="/SEARCH.svg" alt="Search" />
            ) : (
              <div className={classesForm.not_found}>
                <h1>!</h1>
                <h3>
                  Файл
                  <br />
                  Не найден
                </h3>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
