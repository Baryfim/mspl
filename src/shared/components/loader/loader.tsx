"use client";

import { useEffect, useState } from "react";
import classesLoader from "./loader.module.css";
import { usePathname } from "next/navigation";

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);
  
  const pathname = usePathname();
  const isCPRoute = pathname.startsWith("/cp");
  if (isCPRoute) return null;

  useEffect(() => {
    const minDelay = 1000;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = minDelay - elapsed;
      setTimeout(() => {
        setShowLoader(false);
      }, remaining > 0 ? remaining : 0);
    };

    if (document.readyState === "complete") {
      // Если страница уже загружена, запускаем обработчик сразу
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!showLoader) return null;

  return (
    <div className={classesLoader.loader_wrapper}>
      <img src="/logo.svg" width={400} alt="Logo" />
      <div className={classesLoader.progress_bar}>
        <div className={classesLoader.progress_fill}></div>
      </div>
    </div>
  );
}
