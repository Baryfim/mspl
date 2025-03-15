import PrimaryButton from "@/ui/PrimaryButton/PrimaryButton";
import classesBanner from "./banner.module.css"


export default function Banner() {
    return (
        <div className={classesBanner.banner_wrapper} style={{
            backgroundImage: `url('/bg1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        }}>
            <div className={classesBanner.banner_contrainer}>
                <div className={classesBanner.banner_inner}>
                    <div className={classesBanner.banner_inner__info}>
                        <h1 className={classesBanner.banner_inner__title}>
                            Multi-sport<br/>
                            professional league
                        </h1>
                        <p className={classesBanner.banner_inner__text}>MSPL стремится к расширению географии своих турниров, привлекая к участию спортсменов из разных регионов и стран. Это способствует популяризации бильярдного спорта и укреплению международных спортивных связей.</p>
                    </div>
                    <PrimaryButton
                        width="350px"
                        height="56px"
                        text="Подробнее О лиге"
                    />
                </div>
            </div>
        </div>
    );  
}