import './header.css';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
    
            <div className="headerWrapper">
                <div className="headerInfo2">
                <div className="headerInfoContent">
                    <h1>Exquisitart Poetry | Articles | Devotions</h1>
                    <h4>Media</h4>
                    <div className='moveWrapper'>
                    <div className='move--element'>
                        <div className='move'>Educative</div>
                        <div className='move'>Inspiring</div>
                        <div className='move'>Entertaining</div>
                    </div>
                    </div>
                    <p>View peoples poems | Article | Devotions</p>
                    <p>Register to create an account and login to create a post.</p>
                  <Link to='/register'><button className="registerBtn">Register</button></Link>
                  </div>
                </div>
                <div className="headerImage">
                    <img src={require("../assets/img-4.png").default} alt=''/>
                </div>
               
            </div>
              
        </div>
    )
}

export default Header
