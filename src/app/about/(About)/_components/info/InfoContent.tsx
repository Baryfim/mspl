import Typography from "@/ui/Typography/Typography";
import classesInfoContent from "./InfoContent.module.css";

const InfoContent = () => {
  return (
    <div className={classesInfoContent.info_content_wrapper}>
      <div className={classesInfoContent.info_content_container}>
        <div className={classesInfoContent.info_content_inner}>
          <div className={classesInfoContent.info_content_head}>
            <Typography size="small" color="dark">О лиге:</Typography>
            <p><span>MSPL</span> - МУЛЬТИ-СПОРТИВНАЯ ПРОФЕССИОНАЛЬНАЯ ЛИГА</p>
          </div>

          <p className={classesInfoContent.info_content_body_text}>
            MSPL активно развивает различные спортивные дисциплины и является крупным поставщиком стримингового контента, предлагая платформу для проведения официальных соревнований, где игроки могут продемонстрировать свое мастерство и соревноваться за призовые фонды. Стратегия организации направлена на создание конкурентной среды, стимулирующей рост уровня спортсменов и повышение зрелищности соревнований.
            <br /><br />
            Организация самостоятельно определяет правила и форматы проводимых турниров, обеспечивая прозрачность и доступность информации для участников и зрителей. Особое внимание уделяется соблюдению спортивных принципов и созданию справедливых условий для всех соревнующихся.
            <br /><br />
            MSPL стремится к расширению географии своих турниров, привлекая к участию спортсменов из разных регионов и стран.
            <br />
            Это способствует популяризации спортивных дисциплин и укреплению международных спортивных связей.
            <br /><br />
            Регламенты соревнований, а также расписания и протоколы завершившихся матчей по каждому виду спорта доступны в соответствующем разделе сайта.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoContent;
