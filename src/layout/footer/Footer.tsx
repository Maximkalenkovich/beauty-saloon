import { styled } from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { Theme } from "../../styles/Theme"
import { Container } from "../../components/container/Container"


export const Footer = () => {
    return(
        <StyledFooter>
            
            <Container>

            
            <FooterContacts>
            <Icon iconId="center" width="40" height="40" viewBox="0 0 40 40"/>

            <Contact>
                <h3>Контакты</h3>
                <span>+7 (812) 123-45-67</span>
                <span>+7 (911) 123-45-67</span>
                <span>Новоостровский проспект, дом 36 лит. С</span>
            </Contact>

            <Time>
                <h3>Режим работы</h3>
                <span>C 10:00 до 21:00 (Пн-Пт)</span>
                <span>С 11:00 до 20:00 (Сб-Вс)</span>
            </Time>

            <Instagram>
                <h3>Мы в Instagram</h3>
                <Icon iconId="instagram"/>
            </Instagram>

            </FooterContacts>
         
            <Copiright>
            Copyright © 2017 - 2022
            </Copiright>
            
            </Container>
         
        </StyledFooter>

    )
} 

const StyledFooter = styled.footer`
margin-top: 100px;

background-color: ${Theme.colors.primaryBg};

h3{
    color: ${Theme.colors.font};
font-family: Garamond, sans-serif;
font-size: 24px;
font-weight: 700;
line-height: 120%; /* 28.8px */
}

span {
    color:${Theme.colors.font};

/* p / 18r */
font-family: "Cormorant Garamond", sans-serif;
font-size: 18px;

font-weight: 400;
line-height: 130%; /* 23.4px */
}

 
`
const FooterContacts = styled.div`
  border-top:1px solid ${Theme.colors.accent} ;
    border-bottom:1px solid ${Theme.colors.accent} ;
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-bottom: 30px;

    
`
const Contact = styled.div`
display: flex;
flex-direction: column;
    
`
const Time = styled.div`
display: flex;
flex-direction: column;
    
`
const Instagram = styled.div`
    
`
const Copiright = styled.h4`
text-align: center;
color: ${Theme.colors.font};
font-family: "Cormorant Garamond";
font-size: 18px;
font-weight: 700;
line-height: 140%;
margin-bottom: 30px;

`