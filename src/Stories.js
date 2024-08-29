export default function Stories(){
    return(
        <div className="container-fluid" id="story">
            <div className="row">
                <div className="col-sm-4 img-container">
                    <img src="/img/5.png" className="storiesimg1" id=""></img>
                    <label id="storyimgtext"><span style={{fontSize:"10px"}}>Food and culture</span><br/> Looking for an <br/>extra push for<br/> your workout <br/>session
                    </label>
                </div>
                <div className="col-sm-8 img-container">
                    <img src="/img/6.png" className="storiesimg1" id=""></img>
                    <label id="storyimgtext"><span style={{fontSize:"10px"}}>Travel guide</span><br/>Protein-packed snack like cottage <br/>cheese or a protein bar aids
                    </label>
                </div>
            </div><br></br>
            <div className="row">
                <div className="col-sm-12 img-container">
                    <img src="/img/7.png" className="storiesimg2" id=""></img>
                    <label id="storyimgtext"><span style={{fontSize:"10px"}}>Things to do</span>
                        <br/>Replenish your body with nutrients
                    </label>
                </div>
            </div>
        </div>
    )
}