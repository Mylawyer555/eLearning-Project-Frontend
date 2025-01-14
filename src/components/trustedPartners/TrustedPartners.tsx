import { trustedPartners } from "./TrustedPartnerData"


const TrustedPartners = () => {
    return (
        <div className="trustedCon">
            <div className="sm-yellow"></div>
            <div className="trusted-content">
                <div className="trusted-lft">
                    <p>Our Trusted partners & Proud investors around the globe</p>
                </div>
                <div className="trusted-rgt">
                    {trustedPartners.map((logo) => {
                        return (
                            <div className="logo-div" key={logo.id}>
                                <img src={logo.img} alt={"logo.alt" }  />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      
  )
}

export default TrustedPartners