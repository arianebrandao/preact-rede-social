import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./app.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ariane Brandão"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aliquid reiciendis animi, quis at modi inventore facilis repudiandae distinctio amet exercitationem dolores assumenda! Harum tempore veniam natus? Voluptatum, praesentium nobis."
          />
          <Post author="Aleksandar" content="Aleksandar" />
        </main>
      </div>
    </>
  );
}
