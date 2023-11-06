import { styled } from "styled-components"
import { Theme } from "../../../../styles/Theme"
import { font } from '../../../../styles/Common';

type tabMenuPropsType = {
     menuItems: Array<{status:"Педикюр"| "Маникюр"| "Парикмахерские услуги"|  "all", title: string}>,
     changeFilterStatus: (value: "Педикюр"| "Маникюр"| "Парикмахерские услуги"|  "all") => void


}

export const TabMenu = (props: tabMenuPropsType) => {

    return (
        <StyledTabMenu>
            <ul>

                {props.menuItems.map((item, index: number) => {
                    return(
                    <ListItem key={index}>
                        <LinkWork active={true}  onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</LinkWork>
                    </ListItem>)

                })}

            </ul>

        </StyledTabMenu>
    )
}

const StyledTabMenu = styled.nav`
display: flex;
justify-content: center;
margin-top: 80px;
    ul{
        display:flex;
        gap : 60px;

        @media ${Theme.media.mobile}{
        display: flex;
        gap:10px;
    }
    }
`
const ListItem = styled.li`
`

const LinkWork = styled.a<{active: boolean}>`
${font({color:Theme.colors.font,family:'"Cormorant Garamond", sans-serif', weight: 400,Fmax:24, Fmin:18})}
line-height: 130%;
cursor: pointer;

&:hover {
    color: ${Theme.colors.accent};
    text-decoration: underline;
}
    
`