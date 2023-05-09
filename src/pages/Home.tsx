import { Button, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import storeImage from './store.png'

export default function Home() {
    return (
    <div>
        <h1>Home</h1>
        <p style={{fontSize: "1.5rem"}}>This website is a shopping-cart site clone with TypeScript and Json data. A user can save the shopping data each time.</p>
        <div className=" d-flex justify-content-center">
            <img style={{width: '50%', height: 'auto'}} src={storeImage} alt="" />
        </div>
        <div className=" d-flex justify-content-center">
        <p style={{fontSize: "2rem", padding:'5% 0% 0% 0%'}}>Just play around click the "Store" button below.</p>
        </div>
        <div className=" d-flex justify-content-center">
        <Button><Nav.Link to='/store' as={NavLink} >Store</Nav.Link></Button>
        </div>
    </div>
    )
}