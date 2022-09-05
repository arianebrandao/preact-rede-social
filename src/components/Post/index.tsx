interface PostProps {
    author: string;
    content: string;
}

export function Post(props: PostProps) {
    return (
        <div>
            <h3>{props.author}</h3>
            <p>{props.content}</p>
        </div>
    )
}