import "./global.scss";
import Header from "./components/Header";
import styles from "./App.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt } from "react-icons/fa";

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.formTask}>
          <input type="text" placeholder="Adicione uma nova tarefa" />

          <button type="button">Criar <AiOutlinePlusCircle /></button>
        </div>

        <div className={styles.tasks}>
          <div className={styles.info}>
            <div className={styles.created}>
              Tarefas criadas
              <span className={styles.counter}>5</span>
            </div>

            <div className={styles.done}>
              Concluídas
              <span className={styles.counter}>2 de 5</span>
            </div>
          </div>

          <div className={styles.list}>
            {/**Map */}
            <div className={styles.task}>
              <span>
                <FaRegCircle size={20} className={styles.iconToDo} />
              </span>

              <div>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>

              <span>
                <FaRegTrashAlt size={16} className={styles.trash} />
              </span>
            </div>

            <div className={styles.task}>
              <span>
                <FaCheckCircle size={20} className={styles.iconDone} />
              </span>

              <div className={styles.done}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</div>

              <span>
                <FaRegTrashAlt size={16} className={styles.trash} />
              </span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
