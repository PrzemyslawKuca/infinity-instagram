import {AiOutlineHeart, AiOutlineComment, AiOutlineSend} from "react-icons/ai";
import {MdOutlineSaveAlt} from "react-icons/md";
import {BsEmojiSmile} from "react-icons/bs";
import './PostButton.css'

const PostBottom = (props: { name: string }) => {
    return (
        <div className={'post-bottom'}>
            <div className={'icons-bar'}>
                <div>
                    <AiOutlineHeart/>
                    <AiOutlineComment/>
                    <AiOutlineSend/>
                </div>
                <MdOutlineSaveAlt/>
            </div>
            <div className={'description'}>
                <div className={'likes'}><b>Likes: 99</b></div>
                <div><b>{props.name}</b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua...
                </div>
            </div>
            <div className={'comment'}>
                <BsEmojiSmile className={'icon'}/>
                <textarea placeholder={'Add comment'}/>
                <button>Publish</button>
            </div>
        </div>
    )
}

export default PostBottom;
