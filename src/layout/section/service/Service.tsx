import { styled } from "styled-components";
import barber from "../../../components/image/serviceimage/barber.jpg"
import manikur from "../../../components/image/serviceimage/manikur.jpg"
import pedikur from "../../../components/image/serviceimage/pedikur.jpg"
import cosmetology from "../../../components/image/serviceimage/cosmetology.jpg"
import estetic from "../../../components/image/serviceimage/estetic.jpg"
import visaj from "../../../components/image/serviceimage/visaj.jpg"
import { Partners } from "../../../components/partners/Partners";


export const Service = () => {
    return(
        <Styledservice>
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
        </Styledservice>

    );
};


const Styledservice = styled.section`
background-color: black;
border:2px solid red;
min-height: 100vh;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 2px;
    
`
const Sphere = styled.div`



figcaption {
    color: white;
}
    
`
const Photo = styled.img`
    
`