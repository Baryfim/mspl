import TgIcon from '@/icons/tg.icon';
import classesNews from './news.module.css';
import YoutubeIcon from '@/icons/youtube.icon';
import VkIcon from '@/icons/vk.icon';
import FacebookIcon from '@/icons/facebook.icon';
import InstagramIcon from '@/icons/instagram.icon';
import TwitchIcon from '@/icons/twitch.icon';


export default function News() {
    return (
        <div className={classesNews.news_divide}>
            <div className={classesNews.news_inner}>
                <h1>Новости</h1>
                <div className={classesNews.news_list}>
                    <a href=''>
                        <TgIcon />
                    </a>
                    <a href=''>
                        <YoutubeIcon />
                    </a>
                    <a href=''>
                        <VkIcon />
                    </a>
                    <a href=''>
                        <FacebookIcon />
                    </a>
                    <a href=''>
                        <InstagramIcon />
                    </a>
                    <a href=''>
                        <TwitchIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}