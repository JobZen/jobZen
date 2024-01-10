import Navbar1 from "../Navbar1/page";
import Footer from "../footer/page";
import Main from "../main/page"

const Home =()=>{
    return(
        <div className='bg-white '>
            <Navbar1/>
            <div className="mt-[7cm]"><Main/></div>
            <Footer/>
            </div>
    )
}
export default Home;