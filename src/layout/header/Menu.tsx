import { styled } from "styled-components";
import { Theme } from "../../styles/Theme";
import backroundNav from "../../components/image/backroundNav.svg"



type StyledMenuPropsType = {
    Image: string;
}


export const Menu = (props:{menuItmes: Array<string>}) =>{
    return(
        <StyledMenu>
        <ul>
              {props.menuItmes.map((item: string, index: number)=>{
                         return(

                         <ListItem key={index}>
                            <LinkItem href="../section/masterts/Masters.tsx" target="_blank">{item}</LinkItem>
                            
                            </ListItem>
                            
                            )
                           
                        })}  
                     
        </ul>
        </StyledMenu> 
    );
};

const StyledMenu = styled.nav`
position: absolute;



ul{
    background-image: url(${backroundNav});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    position: relative;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    list-style: none;
    gap:80px; 
    left: 140px ;
    right: 113px;



} 
`
const ListItem = styled.li`

&:nth-child(3){
    padding-right:120px;
   
}
&:nth-child(4){
   padding-left:120px;
}
`
const LinkItem = styled.a`
    color: ${Theme.colors.font};

font-family: "Cormorant Garamond", sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 130%;

&:hover {
    color: ${Theme.colors.accent};
    text-decoration: underline;
}
`