import { Theme } from "./Theme"


type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}


export const font = ({Fmin, Fmax, family, weight,color, lineHeight}: FontPropsType) =>`
font-family: ${family || "Garamond"};
font-weight: ${weight || 400};
color: ${color || Theme.colors.font};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 360px)/(1300 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`