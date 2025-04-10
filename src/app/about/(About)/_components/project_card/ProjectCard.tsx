"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { IProject } from "@/shared/services/projects.handle";
import classes from "./ProjectCard.module.css";
import { useRouter } from "next/navigation";

interface ProjectCardProps extends Omit<IProject, "id"> {}

const lerp = (start: number, end: number, t: number): number =>
  start + (end - start) * t;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, url, img }) => {
  const router = useRouter();
  // Ссылка на внутренний элемент, для которого будем анимировать градиент
  const cardInnerRef = useRef<HTMLDivElement>(null);
  // Сохраним id анимации
  const animationRef = useRef<number | null>(null);
  // Прогресс анимации (от 0 до 1)
  const animationProgress = useRef(0);
  // Флаг направления анимации: true – наведение, false – уход курсора
  const animatingIn = useRef(true);
  // Длительность анимации в мс
  const duration = 300;
  // Для хранения времени начала анимации
  const startTime = useRef<number | null>(null);

  const animate = useCallback((timestamp: number) => {
    // Инициализируем стартовое время, если ещё не задано
    if (startTime.current === null) {
      startTime.current = timestamp;
    }
    const elapsed = timestamp - startTime.current;
    // Вычисляем прогресс анимации
    let t = Math.min(elapsed / duration, 1);
    // Если курсор уходит, инвертируем прогресс
    if (!animatingIn.current) {
      t = 1 - t;
    }
    animationProgress.current = t;

    // Интерполируем альфа-каналы для двух цветов
    const startAlpha = lerp(0, 1, t);
    const endAlpha = lerp(0.5, 1, t);

    // Формируем значение градиента
    const gradientValue = `linear-gradient(180deg, rgba(0, 0, 0, ${startAlpha}) 30%, rgba(216, 30, 55, ${endAlpha}) 100%)`;

    if (cardInnerRef.current) {
      cardInnerRef.current.style.background = gradientValue;
    }

    if (elapsed < duration) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Если анимация завершена – сбрасываем время начала для будущих запусков
      startTime.current = null;
    }
  }, [duration]);

  const handleMouseEnter = () => {
    animatingIn.current = true;
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
    startTime.current = null;
    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    animatingIn.current = false;
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
    startTime.current = null;
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      onClick={() => router.push(url)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes.project_card_wrapper}
      style={{
        background: `url(${img})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        ref={cardInnerRef}
        className={classes.project_card_inner}
        style={{
          // Начальное состояние градиента
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(216, 30, 55, 0.5) 100%)",
          transition: "padding-bottom 0.3s ease",
        }}
      >
        <ul>
          <h3>{title}</h3>
          {/* Можно добавить описание, если требуется */}
          <p>{description}</p>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
