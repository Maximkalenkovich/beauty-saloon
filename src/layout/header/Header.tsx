import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { Menu } from "./Menu"
import { FlexWrapper } from "../../components/flexWrapper/FlexWrapper"
import { Container } from "../../components/container/Container"
import { Theme } from "../../styles/Theme"





const items = ["Главная","Мастера","Косметика","Акции","Отзывы","Контакты"]

export const Header = ()=>{
    return(
      <StyledHeader>

     <Container>
      <FlexWrapper  align="center">
            <Icon iconId="instagram"  width="26" height="26" viewBox="0 0 26 26" /> 
            <Menu menuItmes={items}/>
            </FlexWrapper>
            </Container>
      </StyledHeader>
    )
}

// иконку можно добавить в бэк навигации

const StyledHeader = styled.header`

padding: 20px 0;
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;

${Container}{
  border-bottom: 1px solid ${Theme.colors.accent};
  padding-bottom: 38px;
}




  


`