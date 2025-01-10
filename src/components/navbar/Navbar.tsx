import  { navlinks } from '../../../constants/Constant'
const Navbar = () => {
  return (
    <div className="nav__bar">
      <div className="logo__img">
       <h2>FUTURIFY</h2>
      </div>
      <div className="nav_right">
        <div className="nav__link">
          {navlinks.map((navlink) => {
            return (
              <a key={navlink.id} href={navlink.url}>{navlink.title}</a>
            )
          })}
        </div>
        <div className="nav__btn">
          <a className='signin' href="">Sign In</a>
          <button className='get_started_btn'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar