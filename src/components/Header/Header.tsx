import './Header.css'
import {AiFillHome, AiOutlineCompass, AiOutlineHeart, AiOutlineSend} from "react-icons/ai";
import {GoDiffAdded} from "react-icons/go";

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'controls'}>
                <span>InstaClone</span>
                <input type={'text'} placeholder={'Search...'}/>
                <div className={'icons'}>
                    <AiFillHome/>
                    <AiOutlineSend/>
                    <GoDiffAdded/>
                    <AiOutlineCompass/>
                    <AiOutlineHeart/>
                </div>
            </div>
        </div>
    )
}

export default Header;
