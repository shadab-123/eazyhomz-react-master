import { useEffect, useState } from 'react';
import './go_to.css';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';

function GoToTop(){
    const [isVisible, setIsVisible] = useState(false);
    function handleClick(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior:'smooth'
        })
    }
    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
    
        if (winScroll > heightToHidden) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
      }, []);
    return isVisible ? (
        <div onClick={handleClick} className='go_to_top'>
            <KeyboardArrowUpSharpIcon fontSize='large'/>
        </div>
    ) : (<></>)
}

export default GoToTop;