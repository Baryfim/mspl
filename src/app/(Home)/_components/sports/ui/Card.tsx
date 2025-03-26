"use client"
import { title } from 'process';
import classesCard from './Card.module.css';
import { useRouter } from 'next/navigation';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';


interface CardProps {
    img: string;
    title: string;
    description: string;
    path: string;
}

export default function Card({
    img,
    title,
    description,
    path
}: CardProps) {
    const router = useRouter();

    return (
        <div className={classesCard.card_divide}>
            <div className={classesCard.card_img}>
                <img src={img} alt={title} width={540} height={451} />
            </div>
            <div className={classesCard.card_info}>
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </div>
            <PrimaryButton onClick={() => router.push(path)} width='180px' height='41px' text='Узнать больше' />
        </div>
    )

}