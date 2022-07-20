function baseApperal (){
    return(
        <div className="card" style={{width: "400px;"}}>
            <div className="row g-0">
                <div className="col">
                    <div className="card-body">
                            <p className="card-title"><img src="logo.svg" alt="Picture of company logo"/></p>
                            <p className="card-text big-text"><span id="span1">WE'RE </span><span id="span2">COMING SOON</span></p>
                            <p className="card-text small-text">Hello fellow shoppers! We're curently bulding our new fashion store. Add youre email bellow to stay up-to-date with announcments and our launch deals.</p>
                            <form name="form">
                            <div className="row g-0">
                                <div className="col-8"> 
                                <div className="form-floating">
                                    <input type="email" name="email" className="form-control rounded-5" id="Email" aria-describedby="email" placeholder="name@example.com"/>
                                    <label className="lbl" for="Email">Email Address</label>
                                </div>
                                </div>
                                <div className="col-4"><button className="btn rounded-5"><img src="icon-arrow.svg" className="img-fluid img" alt="Button"/></button>
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
                            <div className="col">
                                <img src="hero-desktop.jpg" className="img-fluid img" alt="Picture of woman"/>
                            </div>
            </div>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(baseApperal())