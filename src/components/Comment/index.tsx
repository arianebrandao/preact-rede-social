import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./comment.module.css";

interface CommentProps {
    content: string;
}

export function Comment (props: CommentProps) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/arianebrandao.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <div className={styles.commentHeader}>
                        <div className={styles.authorAndTime}>
                            <strong>Ariane Brandão</strong>
                            <time title="05 de setembro às 18:02h" dateTime='2022-09-05 18:02:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </div>

                    <p>{props.content}</p>
                </div>

                <div className={styles.commentFooter}>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </div>
            </div>
        </div>
    );
}