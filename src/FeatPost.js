export default function FeatPost(){
    return(
        <div className="container-fluid" id="featpost">
            <div className="row">
                <div className="col-sm-5 img-container">
                    <img src="/img/8.png" className="storiesimg1" id=""></img>
                    <label id="storyimgtext"><button class="btn" style={{backgroundColor:"black",color:"white"}}>HEALTH AND FITNESS</button>
                    <br/> 7 Signs You’re Burnt out <br/>(And How to Bounce <br/>Back)
                    </label>
                </div>
                <div className="col-sm-7 featpostright">
                    <div class="postrightcontent">
                        <label class="postline1">DATING AND RELATIONSHIPS</label><br></br>
                        <label class="postline2">How 'Weak Ties' Can Strengthen Our Relationships</label>
                    </div>
                    <hr style={{border:"1px dashed black",marginLeft:"50px"}}></hr>
                    <div class="postrightcontent1">
                        <label class="postline1">DATING AND RELATIONSHIPS</label><br></br>
                        <label class="postline2">What It's Really Like to Date While Fat</label>
                    </div>
                    <hr style={{border:"1px dashed black",marginLeft:"50px"}}></hr>
                    <div class="postrightcontent1">
                        <label class="postline1">HEALTH TIPS</label><br></br>
                        <label class="postline2">How Often You Should Wash Your Hair</label>
                    </div>
                    <hr style={{border:"1px dashed black",marginLeft:"50px"}}></hr>
                    <div class="postrightcontent1">
                        <label class="postline1">HEALTH TIPS</label><br></br>
                        <label class="postline2">How Often You Should Wash Your Hair</label>
                    </div>
                    <hr style={{border:"1px dashed black",marginLeft:"50px"}}></hr>
                </div>
            </div>
        </div>
    )
}