import MainRouter from "./routes/MainRouter";
import MainLayout from "./layouts/MainLayout";

//styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return <MainLayout>
    <MainRouter />
    </MainLayout>
}

export default App;
