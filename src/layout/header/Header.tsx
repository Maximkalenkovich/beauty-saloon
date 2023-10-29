import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { Menu } from "./Menu"



const items = ["Главная","Мастера","Косметика","Акции","Отзывы","Контакты"]

export const Header = ()=>{
    return(
      <StyledHeader>
            <Icon iconId="instagram" /> 
            <div>
            <Icon  iconId="center" width="40" height="40" viewBox="0 0 40 40" /> 
            </div>
            <Menu menuItmes={items}/>

            
      </StyledHeader>
    )
}

// иконку можно добавить в бэк навигации

const StyledHeader = styled.header`
display: flex;
/* background-color: black; */
min-width: 1440px;
width: 100%;
position: fixed;
flex-wrap: wrap;

div{


    position: absolute;
    z-index: 0;
    left:45%;

}
`