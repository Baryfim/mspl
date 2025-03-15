import classesSports from './sports.module.css';
import Card from './ui/Card';


export default function Sports() {
    return (
        <div className={classesSports.sports_wrapper}>
            <h1 className={classesSports.sports_label}>Виды спорта</h1>
            <div className={classesSports.sport_inner}>
                <div className={classesSports.sports_inner}>
                    <Card img='https://s3-alpha-sig.figma.com/img/6c74/93de/ccb40562451848990b168f9fa6dbc911?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kwjVxWcBEX-EtYqGUqwmm~6cf8fOZqnSyQk0xgR~AYkh7hEyUBlDealXGM3pvN9thEOUPCusbwvq47PxoG1SWN~8BtVrNSgmpFRZnGdldt40b7SJlPR9jvynfOnDN2iy6V~FR2tzjPx441AW4xK0lbQwAdSw1VQny0LqDtgk9fPYv9JtZMTkhFcySRwSE8TN35wBU6E5vLoKqHiIUJggVqMs785yccok6YPrA2IH6rQ83Q3iJuAY~5iO1rdXcO6FNWm638Rh-UuS6R8O4MEfN189UhhLzn2i~34W7ZLP2gTMmt-9dd9Xwk-mKN2X5FHZB9dyx8lnzpHIzD0eSnUWTQ__' title='Бильярд "PULL 8"' description='Подзаголовок' path='123' />
                    <Card img='https://s3-alpha-sig.figma.com/img/4674/0b9a/25f317f192c3993e25c114cebd481a9e?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fbm8WWaIu1rnlJqK-QUZFnfuxmLkh00qZA-UkoohXmeOvlS~RJOEyPRn4WH6WKcBlRk~xjJtx6n0jAVMWEHDjKEFuEhKLuu4z1KIF~AMzn97fOH9jdOkNpS-BZTk~keOHn0hUUakMZPOLvoruVb0VvIwBNUB6P2fxJEMJ29hc6w3C7CiuKAu-v1Xamnmy1lcjZqsGkDEjbN5rs-6VUBI4GhiSv1H6LJNGefO65bWTcnbyY6Ff5K1bjq7xpSLfCUXFA1ptM4~~ACmSfZNVvMxNjbrTK2EgnHnaJoZp1wFu0B7NeKlgiMWAGLtjoElg8XTyNRmomWU94yaYtf2CFdyKA__' title='Бильярд "PULL 8"' description='Подзаголовок' path='123' />
                </div>
            </div>
        </div>
    )
}