import PointStylingChart from "./Chart";
import { FaUserPlus ,FaBattleNet,FaApple,FaBandcamp,FaBuffer} from "react-icons/fa6";

const Header = () => {
    return ( 
        <div className="header_container">
            <div className="right_box">
                
            <PointStylingChart/>
            </div>

            <div className="left_box">

            <div className="parent-container">
      <div className="child"><div className="icon"><FaUserPlus/> All users </div><span>1</span></div>
      <div className="child"><div className="icon"><FaBattleNet/> All users</div> <span>0</span></div>
      <div className="child"><div className="icon"><FaApple/> All users </div><span>2</span></div>
      <div className="child"><div className="icon"> <FaBandcamp/> All users </div><span>5</span></div>
      <div className="child"><div className="icon"><FaBuffer/> All users </div><span>7</span></div>
      <div className="child"><div className="icon"><FaUserPlus/> All users</div> <span>0</span></div>
    </div>

            </div>
        </div>
     );
}
 
export default Header;