import { styled } from "styled-components"
import { Theme } from "../../../../styles/Theme"



export const TabMenu = (props: { menuItems: Array<string> }) => {

    return (
        <StyledTabMenu>
            <ul>

                {props.menuItems.map((item: string, index: number) => {
                    return(
                    <ListItem key={index}>
                        <LinkWork href="a">{item}</LinkWork>
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
        gap : 60px
    }
`
const ListItem = styled.li`
    
`
const LinkWork = styled.a`
color: ${Theme.colors.font};
font-family: "Cormorant Garamond", sans-serif;
font-size: 24px;
font-weight: 400;
line-height: 130%;

&:hover {
    color: ${Theme.colors.accent};
    text-decoration: underline;
}
    
`