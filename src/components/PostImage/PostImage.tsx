import {useState} from "react";
import './PostImage.css'

const PostImage = (props: { id: string }) => {
    const [loading, setLoading] = useState<boolean>(true)

    return (
        <div className={'post-image'}>
            <div className={'image-placeholder'} style={!loading ? {display: 'none'} : {}}/>
            <img src={`https://picsum.photos/seed/${props.id}/470/470`} style={loading ? {display: 'none'} : {}}
                 onLoad={() => setLoading(false)}/>
        </div>
    )
}

export default PostImage;
