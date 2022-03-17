import { ListasFooter } from "../ListasFooter";
import { Logo } from "../Logo";
import { NavFooter } from "../NavFooter";
import { Redes } from "../Redes";
import { Container } from "./style";

export function Footer(){
    return(
        <Container>
            <nav>
                <Logo />
                <ListasFooter/>
                <Redes/>
            </nav>
            <NavFooter />
        </Container>
    )
}