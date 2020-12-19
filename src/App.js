import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./components/Header";
import TabHeader from "./components/TabHeader";
import Explore from "./components/Explore";
function App() {
  return (
    <div className={styles.base}>
      <Header />
      <TabHeader />
      <Explore />
    </div>
  );
}

export default App;
