import { CartProvider } from '../src/components/context/CartContext';

import MainRouter from "./routes/MainRouter";
import MainLayout from "./layouts/MainLayout";

//styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return(
    <CartProvider>
    <MainLayout>
    <MainRouter />
  </MainLayout>
  </CartProvider>
  )
}

export default App;
