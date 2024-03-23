import Image from 'next/image';
import { Icon } from './icon';

export const ArrowRight: React.FC<Icon> = ({
    size = 16,
    color = 'currentColor',
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 6L1 6M7.75 11L13 6L7.75 1"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
