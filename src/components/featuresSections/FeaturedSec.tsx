import { BsPersonWorkspace } from "react-icons/bs"
import { GiClassicalKnowledge } from "react-icons/gi"
import { MdOutlineSupportAgent } from "react-icons/md"


const FeaturedSec = () => {
  return (
      <div className="featuredWrap">
          <div className="featured-card">
              <div className="feat-lft" id="feat1">
                 <BsPersonWorkspace style={{width:"40px", height:"40px"}} />
              </div>
              <div className="feat-rgt">
                  <h4>Best Instructors</h4>
                  <p>We have highly skilled & experienced instructors all over the globe.</p>
              </div>
          </div>
          <div className="featured-card">
              <div className="feat-lft" id="feat2">
                 <GiClassicalKnowledge style={{width:"40px", height:"40px"}} />
              </div>
              <div className="feat-rgt">
                  <h4>Live Classes</h4>
                  <p>We take live classes to give our student quality education.</p>
              </div>
          </div>
          <div className="featured-card">
              <div className="feat-lft" id="feat3">
                 <MdOutlineSupportAgent style={{width:"40px", height:"40px"}} />
              </div>
              <div className="feat-rgt">
                  <h4>1 to 1 Support</h4>
                  <p>Our student have the best supports 24/7 </p>
              </div>
          </div>
         
    </div>
  )
}

export default FeaturedSec