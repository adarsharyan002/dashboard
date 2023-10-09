import { FaBattleNet,FaCircleUser} from "react-icons/fa6";


const Events = () => {
    return (
        <div className="events_container">
             
      <div className="equal-div">

         <div className="top">
                <FaCircleUser/> 
                New User
                <button className ="event-btn">see all</button>
         </div>
         <div className="bottom">
            <img style={{width:'2.5rem'}} src="/smile.svg" alt=""  />
            <span>
                <h4>Hubx</h4>
                <h5>24 minutes</h5>
            </span>
         </div>
      </div>
      <div className="equal-div">
      <div className="top">
                <FaBattleNet/> 
                How to sell coursed blog
                <button className ="event-btn">see all</button>
         </div>
         <div className="bottom2">
           <div className="paragraph">
           <p>Lorem ipsum dolor sit amet.</p>
            <p style={{color:'#C1D0DF'}}>7 days ago</p>
           </div>
           <div className="paragraph">
           <p >Lorem ipsum dolor sit amet.</p>
            <p style={{color:'#C1D0DF'}}>7 days ago</p>
           </div>
           <div className="paragraph">
           <p>Lorem ipsum dolor sit amet.</p>
            <p style={{color:'#C1D0DF'}}>7 days ago</p>
           </div>
           <div className="paragraph">
           <p>Lorem ipsum dolor sit amet.</p>
            <p style={{color:'#C1D0DF'}}>7 days ago</p>
           </div>
           <div className="paragraph">
           <p>Lorem ipsum dolor sit amet.</p>
            <p style={{color:'#C1D0DF'}}>7 days ago</p>
           </div>
         </div>
      </div>
      <div className="equal-div">
      <div className="top">
                <FaBattleNet/> 
                Events Log
                <button className ="event-btn">see all</button>
         </div>
         <div className="bottom">
            <FaBattleNet/>
            <div className="small_div">
                <p style={{color:'#00918e'}}>hubx</p>
                <p>Logges in</p>
                <p style={{color:'#00918e'}}>more info</p>
            </div>
         </div>
      </div>
      <div className="equal-div">
        <div className="circular-btn-div">
            <h3>Trial period</h3>
            <button className="circular-btn">30 days left</button>
        </div>
      </div>
    
        </div>
    );
}
 
export default Events;