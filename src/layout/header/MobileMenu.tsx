import { css, styled } from "styled-components";
import { Theme } from "../../styles/Theme";
import { useState } from "react";





export const MobileMenu: React.FC<{menuItmes: Array<string>}> = (props:{menuItmes: Array<string>}) =>{
   const [menuIsOpen, setmenuIsOpen] = useState(false)
   const onBurgerBtnClick = () => {setmenuIsOpen( !menuIsOpen)}
   
    return(
        <StyledMobileMenu>

            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
             <span></span>
        </BurgerButton>
        <MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
        <ul>
              {props.menuItmes.map((item: string, index: number)=>{
                         return(

                         <ListItem key={index}>
                            <LinkItem href="../section/masterts/Masters.tsx" target="_blank">{item}</LinkItem>         
                            </ListItem>   
                            )
                           
                        })}  
                     
        </ul>
        </MobileMenuPopup>
        </StyledMobileMenu> 
    );
};

const StyledMobileMenu = styled.nav`
position: absolute;
display: none;



@media screen and (max-width: 1299px){
    display:block ;

}


`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #08070773;
    z-index: 99999;
    display: none;
    

    ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
        
    `}


ul{
    display: flex;
    list-style: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:30px;
    

} 
`


const BurgerButton = styled.button<{isOpen: boolean}>`
position: fixed;
width: 50px;
height: 50px;
top: 25px;
right: 15px;
z-index: 999999;
background-color: transparent;




span {
    display: block;
    width: 40px;
    height: 2px;
    background-color: white;
    position: absolute;
    left: 7%;
  

    ${props => props.isOpen && css<{isOpen: boolean}>`
    background-color: rgba(255, 255, 255, 0);

        
    `}

    &::before{
        content: "";
        display: block;
    width: 40px;
    height: 2px;
    background-color: ${Theme.colors.font};
    position: absolute;
    transform: translateY(-10px);

    ${props => props.isOpen && css<{isOpen: boolean}>`
    transform: rotate(-45deg) translateY(0);
        
    `}

    }
    &::after{
        content: "";
        display: block;
    width: 40px;
    height: 2px;
    background-color : ${Theme.colors.font};
    position: absolute;

    transform: translateY(10px);

    ${props => props.isOpen && css<{isOpen: boolean}>`
    transform: rotate(45deg) translateY(0);
    width: 36px;
        
    `}
    }

}
    
`
const ListItem = styled.li`

/* &:nth-child(3){
    padding-right:120px;
   
}
&:nth-child(4){
   padding-left:120px;
} */
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