import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./app.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/arianebrandao.png',
      name: 'Ariane Brandão',
      role: 'Web developer'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galera!' },
      { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que eu fiz no NLW Return, evento da Rocketseat.' },
      { id: 3, type: 'link', content: 'github.com/arianebrandao' }
    ],
    publishedAt: new Date('2023-12-12 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gabrielteixeiralobo.png',
      name: 'Gabriel Lobo',
      role: 'Dev'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galera!!' },
      { id: 2, type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aliquid reiciendis animi, quis at modi inventore facilis repudiandae distinctio amet exercitationem dolores assumenda!' },
      { id: 3, type: 'link', content: 'github.com/gabrielteixeiralobo' }
    ],
    publishedAt: new Date('2023-12-13 10:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/arianebrandao.png',
      name: 'Ariane Brandão',
      role: 'Web developer'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galera!!!' },
      { id: 2, type: 'paragraph', content: 'Quidem aliquid reiciendis animi, quis at modi inventore facilis repudiandae distinctio amet exercitationem dolores assumenda! Harum tempore veniam natus? Voluptatum, praesentium nobis.' },
      { id: 3, type: 'link', content: 'github.com/arianebrandao' }
    ],
    publishedAt: new Date('2023-12-14 17:30:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
            )
          })}
        </main>
      </div>
    </>
  );
}
