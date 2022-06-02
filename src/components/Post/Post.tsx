import {User} from '../../App'
import PostHeader from "../PostHeader/PostHeader";
import PostImage from "../PostImage/PostImage";
import PostBottom from "../PostBottom/PostBottom";
import './Post.css'

const Post = (props: { user: User }) => {
    const {user} = props;

    return (
        <div className={'post'}>
            <PostHeader user={user}/>
            <PostImage id={user.id.value}/>
            <PostBottom name={user.name.first + user.name.last}/>
        </div>
    )
}

export default Post;
