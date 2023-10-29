import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

export const Slogan = ()=>{
    return(
        <StyledSlogan>
            <SloganBlock>
            <Icon iconId='sloganicon' width="80" height="64" viewBox="0 0 80 64"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis. 
Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.</p>
</SloganBlock>
        </StyledSlogan>

    );
};

const StyledSlogan = styled.section`
background-color: black;
min-height: 60vh;


`

const SloganBlock = styled.div`
flex-direction: column;
padding-top: 60px;
text-align: center;


       p{
        display: flex;
        color: white;
        flex-wrap: wrap;
    }
`