import {useState} from 'react'
import './courosel.css';

const Courosel = () => {
    const[mode1, setMode1] = useState(false);
    const[mode2, setMode2] = useState(false);
    const[mode3, setMode3] = useState(false);
    return (
        <div className='courosel'>
        <h2 style={{color:'white'}}>Quick tips <i style={{color:'yellow'}} class="fa-solid fa-face-smile-wink"></i></h2>
          <div className='slider'>
             <div className={mode1 ? 'item dark' : 'item'}>
             <div className='mode' onClick={() => setMode1(!mode1)}> 
             {mode1 ? (
                <p> Change to light <i class="fas fa-sun"></i></p>
              ) : (<p>Change to dark <i class="fas fa-moon"></i> </p>)}
             </div>
                 <p className='content'>4 years in college, Pursed a bachelors degree in fields like IT, business, medical etc and in need of a job. Don't worry. In Equisitart media , you can easily connect with potential employers or client. Just stay tuned and active.</p>
                 <div className='item-img'>
                     <img src={require('../assets/career.jpg').default} alt=''/>
                 </div>
             </div>
             <div className={mode2 ? 'item dark' : 'item'}>
             <div className='mode' onClick={() => setMode2(!mode2)}> 
             {mode2 ? (
                <p> Change to light <i class="fas fa-sun"></i></p>
              ) : (<p>Change to dark <i class="fas fa-moon"></i> </p>)}
             </div>
                 <p className='content'>Your life partner can be waiting for you here in exquisitart. The long wait has been shortened to an absolute short wait. We help you converse with new people who turns to friend and later to good friend and finally <b>Lovers</b></p>
                 <div className='item-img'>
                      <img src={require('../assets/couple.jpg').default} alt=''/>
                 </div>
             </div>
             <div className={mode3 ? 'item dark' : 'item'}>
               <div className='mode' onClick={() => setMode3(!mode3)}> 
             {mode3 ? (
                <p> Change to light <i class="fas fa-sun"></i></p>
              ) : (<p>Change to dark <i class="fas fa-moon"></i> </p>)}
             </div>
                 <p className='content'>Would you like to know more place across the world? How things are operating in a country far from your native land. Then continue <b>browsing</b> here and discover more than you expect. </p>
                  <button className='news--btn' disabled={true}>Check our latest news</button>
                 <div className='item-img'>
                      <img src={require('../assets/news.jpg').default} alt=''/>
                 </div>
              
                </div>
          </div>
        </div>
    );
}

export default Courosel;
