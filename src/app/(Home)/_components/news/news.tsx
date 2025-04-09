import classesNews from './news.module.css';
import TwitchIcon from '@/icons/twitch.icon';
import Typography from '@/ui/Typography/Typography';


export default function News() {
    return (
        <div className={classesNews.news_divide}>
            <div className={classesNews.news_inner}>
                <Typography size="medium" color="light" center>
                    Новости
                </Typography>
                <div className={classesNews.news_list}>
                    <a href='https://t.me/mspl8'>
                        <img src='./social_media/tg.svg' alt='Telegram' />
                    </a>
                    <a href='https://www.youtube.com/@msplshow'>
                        <img src='./social_media/youtube.svg' alt='Youtube' />
                    </a>
                    <a href='https://vk.com/id1034894811'>
                        <img src='./social_media/vk.svg' alt='Vk' />
                    </a>
                    <a href='https://www.facebook.com/share/15MDQHjNud/?mibextid=wwXIfr'>
                        <img src='./social_media/fb.svg' alt='Facebook' />
                    </a>
                    <a href='https://www.instagram.com/msplofficial/'>
                        <img src='./social_media/instagram.svg' alt='Instagram' />
                    </a>
                    <a href='https://www.twitch.tv/mspllife'>
                        <img src='./social_media/twitch.svg' alt='Twitch' />
                    </a>
                </div>
            </div>
        </div>
    )
}