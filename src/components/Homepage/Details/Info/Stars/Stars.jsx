import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const Stars = ({vote}) => {
    const stars = Math.round(vote / 2)
    const starsImg = []

    for (let i=0; i<5; i++) {
        if (i< stars) {
            starsImg.push(<AiFillStar />)
        }
        else {
            starsImg.push(<AiOutlineStar />)
        }
    }     
    return starsImg;
} 

export default Stars