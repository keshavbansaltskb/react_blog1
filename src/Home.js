import About from "./About";
import Stories from "./Stories";
import Post from "./Post";
import Health from "./Health";
import Love from "./Love.js";
import FeatPost from "./FeatPost.js";
import Footer from "./Footer";
export default function Home(){
    return(
        <div>
            <div className="container" id="home">
                <br></br><br></br>
                <About />
                <br></br><br></br><br></br><br></br>
                <label style={{fontSize:"40px",fontWeight:"bold",marginLeft:"10px"}}>Popular Stories</label>
                <br></br><br></br>
                <Stories/>
                <br></br><br></br>
                <label style={{fontSize:"40px",fontWeight:"bold",marginLeft:"10px"}}>Featured Post</label>
                <br></br><br></br>
                <Post/>
                <br></br>
                <label style={{fontSize:"40px",fontWeight:"bold",marginLeft:"10px"}}>Health & Happiness</label>
                <br/><br/><br/>
                <Health/>         
                <label style={{fontSize:"40px",fontWeight:"bold",marginLeft:"10px"}}>Love & Relationship</label>
                <br/><br/>
                <Love/>
                <label style={{fontSize:"40px",fontWeight:"bold",marginLeft:"10px"}}>Featured Posts</label>
                <br/><br/>
                <FeatPost/>
            </div>
            <div className="row">
                <Footer/>
            </div>
        </div>
    )
}