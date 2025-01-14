import { IoPlayCircleOutline } from "react-icons/io5"


const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="left-section">
        <div className="hero-text">
          <h1>Get world class courses from proven mentors </h1>
          <p>Get quality courses with us with the best price. Now you can get the best price from us. We have top mentors around the globe.</p>

        </div>
       
       
        <div className="hero-btns">
          <button>Get Started</button>
          <a href="">          <IoPlayCircleOutline style={{marginLeft:"20px", width:"50px", height:"50px"}} />
          How it works?</a>
        </div>
      </div>
      <div className="right-section ">
        {/* <img src="/images/two success.jpg" alt="" /> */}
        <div className="hero-sm-div1">
          <h4>120k</h4>
          <p>Active Students</p>
        </div>
        <div className="hero-sm-div2">
          <h4>100+</h4>
          <p>Top class mentors</p>
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection