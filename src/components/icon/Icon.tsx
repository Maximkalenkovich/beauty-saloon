import iconSprite from "../image/icon-sprie.svg"


type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;

};


export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "26px"}
            height={props.height || "26px"}
            viewBox={props.viewBox || "0 0 26 26"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`} />
        </svg>
    );

};
