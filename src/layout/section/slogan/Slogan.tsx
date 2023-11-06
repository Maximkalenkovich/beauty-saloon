import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { Theme } from "../../../styles/Theme";
import { font } from '../../../styles/Common';


export const Slogan = () => {
    return (
        <StyledSlogan>
            <SloganBlock>
                <Icon iconId='sloganicon' width="80" height="64" viewBox="0 0 80 64" />
                <TextSlogan>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit.
                    Id at quisque accumsan risus ac ipsum ut.
                    Sit elit, facilisi proin non malesuada sociis tristique.
                    Viverra augue lorem ut quisque quam tortor, malesuada iaculis.
                    Et elementum at nulla venenatis, faucibus integer.
                    Auctor neque eros, viverra rutrum.
                    Fames ultrices condimentum tortor nec penatibus.
                    Velit imperdiet sapien fringilla vestibulum sit fames.</TextSlogan>
            </SloganBlock>
        </StyledSlogan>

    );
};

const StyledSlogan = styled.section`
margin-top: 120px;

@media ${Theme.media.mobile}{
margin: 0 15px 015px;

}

@media ${Theme.media.tablet}{
margin: 0 15px 015px;

}
`

const SloganBlock = styled.div`
flex-direction: column;
padding-top: 60px;
text-align: center;
`

const TextSlogan = styled.p`

${font({family: "Cormorant Garamond",weight:700, color: Theme.colors.font, Fmax: 27, Fmin:20})}
max-width: 856px;
margin: 0 auto;
margin-top: 60px;
/* font-size: 27px; */
line-height: 130%;
    
`