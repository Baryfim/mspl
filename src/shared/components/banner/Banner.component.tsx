import classesBanner from './Banner.module.css';


interface IHeadBannerProps {
    size: 'small' | 'large';
    children: React.ReactNode;
}

const HeadBanner = ({ size, children }: Readonly<IHeadBannerProps>) => {
    return (
        <div className={`${classesBanner.banner_wrapper} ${size === 'small' && classesBanner.banner_small}`} style={{
            backgroundImage: `url('/bg1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        }}>
            <div className={classesBanner.banner_contrainer}>
                <div className={classesBanner.banner_inner}>
                    {children}
                </div> 
            </div>
        </div>
    )
}

export default HeadBanner;