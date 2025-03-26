import TgIcon from '@/icons/tg.icon';
import classesNews from './news.module.css';
import YoutubeIcon from '@/icons/youtube.icon';
import VkIcon from '@/icons/vk.icon';
import FacebookIcon from '@/icons/facebook.icon';
import InstagramIcon from '@/icons/instagram.icon';
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
                        <TgIcon color='#fff' colorCircle='#D81E37' />
                    </a>
                    <a href=''>
                        <YoutubeIcon color='#fff' colorCircle='#D81E37' />
                    </a>
                    <a href=''>
                        <VkIcon color='#fff' colorCircle='#D81E37' />
                    </a>
                    <a href=''>
                        <FacebookIcon color='#fff' colorCircle='#D81E37' />
                    </a>
                    <a href=''>
                        <InstagramIcon color='#fff' colorCircle='#D81E37' />
                    </a>
                    <a href=''>
                        <TwitchIcon color='#fff' colorCircle='#D81E37' />
                    </a>
                </div>
            </div>
        </div>
    )
}