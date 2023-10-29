import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";



export const Menu = (props:{menuItmes: Array<string>}) =>{
    return(
        <StyledMenu>
        <ul>
              {props.menuItmes.map((item: string, index: number)=>{
                         return(
                         <li key={index}>
                            <a href="#">{item}</a>
                            </li>
                            )
                         
                        })}  
        </ul>
        </StyledMenu> 
    );
};

const StyledMenu = styled.nav`
position: absolute;
left:14%;
float: left;
flex-wrap: wrap;

ul{
    display: flex;
    gap:80px;
    list-style-type: none;
}

li:nth-child(4){
    margin-left:100px;

}

    
`