import classesNews from './news.module.css';
import TwitchIcon from '@/icons/twitch.icon';
import Typography from '@/ui/Typography/Typography';


export default function News() {
    return (
        <div className={classesNews.news_divide}>
            <div className={classesNews.news_inner}>
                <Typography size="medium" color="light">
                    Новости
                </Typography>
                <div className={classesNews.news_list}>
                    <a href=''>
                        <img src='./social_media/tg.svg' alt='Telegram' />
                    </a>
                    <a href=''>
                        <img src='./social_media/youtube.svg' alt='Youtube' />
                    </a>
                    <a href=''>
                        <img src='./social_media/vk.svg' alt='Vk' />
                    </a>
                    <a href=''>
                        <img src='./social_media/fb.svg' alt='Facebook' />
                    </a>
                    <a href=''>
                        <img src='./social_media/instagram.svg' alt='Instagram' />
                    </a>
                    <a href=''>
                        <img src='./social_media/twitch.svg' alt='Twitch' />
                    </a>
                </div>
            </div>
        </div>
    )
}