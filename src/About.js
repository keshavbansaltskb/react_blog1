import 'bootstrap/dist/css/bootstrap.min.css';

export default function About(){
    return(
        <div className='container-fluid' id="about">
                <div className='row'>
                    <div className='col-lg-7'>
                        <img src="/img/4.jpg" className='img-fluid'></img>
                    </div>
                    <div className='col-lg-5' id="abouttext" style={{backgroundColor:" #f4cbbd"}}>
                        <label className='abouttext'>Get Rid of Your Backpain with these 3 Simple Exercises</label>
                        <br/>
                        <label className='abouttext1'>Let’s Discover more about yournext destination</label><br/>
                        <button class="aboutbutton">READ FULL STORY</button><br></br>
                    </div>
                </div>
        </div>
    )
}