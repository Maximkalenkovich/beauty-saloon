import { styled } from "styled-components";
import background from "../../../components/image/bgc-min.webp"
import { Icon } from "../../../components/icon/Icon";
import { Theme } from "../../../styles/Theme";




export const Main = () => {
    
    return(
        <StyledMain>
            <Title>Салон красоты 
                «Delote-Beauty» 
                на Крестовском</Title>
             
               <Scroll>
               <Icon iconId="scroll" width="20" height="30" viewBox="0 0 20 30"/>
                <a href="#Contact">Прокрутите вниз</a>
               </Scroll>
        </StyledMain>


    );
};

const StyledMain = styled.section`
/* display: flex; */
height: 1040px;
background-image: url(${background});
background-size:cover;
background-position: center center;
background-repeat: no-repeat; 
background-attachment: fixed;  
`

const Title = styled.h1`

margin: 0 auto;
margin-top: 360px;
max-width: 540px;


color: ${Theme.colors.font};
text-align: center;
font-family: Garamond, sans-serif;
font-size: 72px;
font-weight: 700;
line-height: 120%;
  
`

const Scroll = styled.div`
z-index: 1;
position: sticky;
display: flex;
justify-content: center;
margin-top:260px;

   a {
  
    color: ${Theme.colors.font};
font-family: "Cormorant Garamond", sans-serif;
font-size: 18px;
line-height: 140%;
margin-left :20px ;
text-align: center;
scroll-behavior: smooth;

   }
`