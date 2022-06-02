import {User} from "../../App";
import {HiDotsHorizontal} from "react-icons/hi";
import './PostHeader.css'

const PostHeader = (props: { user: User }) => {
    return (
        <div className={'post-header'}>
            <div className={'user'}><img
                src={props.user.picture.thumbnail}/>{props.user.name.first + props.user.name.last}</div>
            <HiDotsHorizontal className={'icon'}/>
        </div>
    )
}

export default PostHeader;
