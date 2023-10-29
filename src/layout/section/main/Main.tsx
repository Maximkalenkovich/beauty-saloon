import { styled } from "styled-components";
import background from "../../../components/image/bgc.png"
import { Icon } from "../../../components/icon/Icon";



export const Main = () => {

    return(
        <StyledMain>
            <Title>Салон красоты «Delote-Beauty» на Крестовском</Title>
             
               <Scroll>
               <Icon iconId="scroll" width="20" height="30" viewBox="0 0 20 30"/>
                <span>Прокрутите вниз</span>
                
               </Scroll>

        </StyledMain>


    );
};

const StyledMain = styled.section`
min-height: 100vh;
min-width: 1440px;
width: 100%;
display: flex;

background-image: url(${background});
background-size: contain;
background-repeat: no-repeat;
    
`

const Title = styled.h1`
position: absolute;
text-align: center;
margin: 0 auto; 
    color: white;
    font-size: 72px;
    font-weight: 700;
    top:25%;
  
`

const Scroll = styled.div`
    color: white;
    position: absolute;
   bottom: 77px;
   left:50%;

   span {
    margin-bottom:20px;
   }
`