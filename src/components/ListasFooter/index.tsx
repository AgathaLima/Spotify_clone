import { Container } from "./style";

export function ListasFooter(){

    return(
        <Container>
            <div>
                <ul>
                    <small>EMPRESAS</small>
                    <a>Sobre</a>
                    <a>Empregos</a>
                    <a>For the Reccord</a>
                </ul>
            </div>
            <div>
                <ul>
                    <small>COMUNIDADES</small>
                    <a>Para Artistas</a>
                    <a>Desenvolvedores</a>
                    <a>Publicidade</a>
                    <a>Investidores</a>
                    <a>Fornecedores</a>
                </ul>
            </div>
            <div>
                <ul>
                    <small>LINKS ÚTEIS</small>
                    <a>Suporte</a>
                    <a>Player da Web</a>
                    <a>Aplicativo móvel grátis</a>
                </ul>
            </div>
        </Container>
    )
}