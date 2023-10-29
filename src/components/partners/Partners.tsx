import { styled } from "styled-components";
import { Icon } from "../icon/Icon"



export const Partners = () => {
    return(
        <StyledPartners>
            <Icon iconId="kevin" width="69" height="108" viewBox="0 0 69 108" />
            <Icon iconId="oribe" width="90" height="120" viewBox="0 0 90 120"/>
            <Icon iconId="alterna" width="190" height="98" viewBox="0 0 190 98"/>
            <Icon iconId="coppola" width="110" height="108" viewBox="0 0 110 108"/>
        </StyledPartners>
    );
};


const StyledPartners = styled.section`
    background-color: black;
    text-align: center;
    
`
