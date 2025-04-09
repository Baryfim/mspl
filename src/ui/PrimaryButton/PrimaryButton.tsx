import { MouseEventHandler } from 'react';
import classesPrimaryButton from './PrimaryButton.module.css'


interface PrimaryButtonProps {
    width: string;
    height: string;
    text: string;
    fontSize?: string;
    borderRadius?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export default function PrimaryButton({
    width,
    height,
    text,
    fontSize,
    borderRadius,
    onClick
}: PrimaryButtonProps) {
    return (
        <button onClick={onClick} className={classesPrimaryButton.banner_btn} style={{
            width: width,
            height: height,
            borderRadius: borderRadius,
        }}>
            <div className={classesPrimaryButton.banner_btn__inner} style={{
                borderRadius: borderRadius
            }}>
                <span style={{
                    fontSize: fontSize
                }}>{text}</span>
            </div>
        </button>
    )
}