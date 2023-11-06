import { styled } from "styled-components";
import barber from "../../../components/image/serviceimage/barber.jpg"
import manikur from "../../../components/image/serviceimage/manikur.jpg"
import pedikur from "../../../components/image/serviceimage/pedikur.jpg"
import cosmetology from "../../../components/image/serviceimage/cosmetology.jpg"
import estetic from "../../../components/image/serviceimage/estetic.jpg"
import visaj from "../../../components/image/serviceimage/visaj.jpg"
import { Container } from "../../../components/container/Container";
import { Theme } from "../../../styles/Theme";



export const Service = () => {
    return(
        <Styledservice>
         <Container>
             <Sphere>
                <Photo src={barber} alt="barber"/>
                <figcaption>Парикмахерские услуги</figcaption>
             </Sphere>
             <Sphere>
                <Photo src={manikur} alt="barber"/>
                <figcaption>Маникюр</figcaption>
             </Sphere>
             <Sphere>
                <Photo src={pedikur} alt="barber"/>
                <figcaption>Педикюр</figcaption>
             </Sphere>
             <Sphere>
                <Photo src={cosmetology} alt="barber"/>
                <figcaption>Косметология</figcaption>
             </Sphere>
             <Sphere>
                <Photo src={estetic} alt="barber"/>
                <figcaption>Эстетист по телу</figcaption>
             </Sphere>
             <Sphere>
                <Photo src={visaj} alt="barber"/>
                <figcaption>Визаж</figcaption>
             </Sphere>
             </Container>
        </Styledservice>

    );
};


const Styledservice = styled.section`
margin-top: 100px;
${Container}{
   display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  gap:24px;
}


`
const Sphere = styled.div`
figcaption {
    margin-top: 30px;
    color: ${Theme.colors.font};
font-family: Garamond, sans-serif;
font-size: 30px;
font-weight: 400;
line-height: 120%; /* 36px */
} 
position: relative;
z-index: 0;
margin-top: 65px;

&::before{
   content: "";
   width: 396px;
        height: 300px;
        border: 2px solid ${Theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
      }

`
const Photo = styled.img`
width: 396px;
height: 300px;  
`