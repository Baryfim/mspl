import { MouseEventHandler } from 'react';
import classesPrimaryButton from './PrimaryButton.module.css'


interface PrimaryButtonProps {
    width: string;
    height: string;
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export default function PrimaryButton({
    width,
    height,
    text,
    onClick
}: PrimaryButtonProps) {
    return (
        <button onClick={onClick} className={classesPrimaryButton.banner_btn} style={{
            width: width,
            height: height
        }}>
            <div className={classesPrimaryButton.banner_btn__inner}>
                <span>{text}</span>
            </div>
        </button>
    )
}