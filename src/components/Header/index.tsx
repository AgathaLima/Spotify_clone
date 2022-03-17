import { Logo } from "../Logo";
import { Container } from "./styles";

export function Header(){
    return(
        
        <Container>
            <div className="logo">
            <Logo />
            </div>
        <div>
             
            <ul>
                <li>Premium</li>
                <li>Suporte</li>
                <li>Baixar</li>
                <li>|</li>
                <li>Inscvreva-se</li>
                <li>Entrar</li>
            </ul>
         </div>
        </Container>
        
    )
}