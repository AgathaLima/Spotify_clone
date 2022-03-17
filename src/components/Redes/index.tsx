import {RiFacebookFill} from 'react-icons/ri'
import {RiTwitterFill} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
import { Container } from './style'

export function Redes(){
    return(
        <Container>
            <div><p><RiFacebookFill/></p></div>
            <div><p><RiTwitterFill/></p></div>
            <div><p><RiInstagramLine/></p></div>
        </Container>

        
    )
}