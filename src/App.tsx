// import { useEffect } from "react";
import { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import { useActions } from "./hooks/useActions";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const { setCheckToken } = useActions();

  useEffect(() => {
    setCheckToken();
  }, []);

  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
