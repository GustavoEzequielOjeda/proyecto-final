import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useCollection } from "../hooks/useCollection"

const Home = () =>{
    const{data, loading} = useCollection("products")

    return loading ? <h1>Cargando...</h1> : <ItemListContainer productsData={data} />
}

export default Home