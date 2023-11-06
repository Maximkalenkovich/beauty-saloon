import { styled } from "styled-components";
import { Icon } from "../icon/Icon"
import { Container } from "../container/Container";
import { Theme } from "../../styles/Theme";




export const Partners = () => {
    return(
        <StyledPartners>
            <Container>
            <Icon iconId="kevin" width="69" height="108" viewBox="0 0 69 108" />
            <Icon iconId="oribe" width="90" height="120" viewBox="0 0 90 120"/>
            <Icon iconId="alterna" width="190" height="98" viewBox="0 0 190 98"/>
            <Icon iconId="coppola" width="110" height="108" viewBox="0 0 110 108"/>
            </Container>
          
        </StyledPartners>
    );
};


const StyledPartners = styled.section`


margin-top: 157px;

${Container}{
    display: flex;
justify-content: space-around;

@media ${Theme.media.mobile}{
display: flex;
flex-wrap: wrap;
gap:40px;
}
} 



    
`
