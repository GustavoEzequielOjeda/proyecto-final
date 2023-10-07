import { useParams } from "react-router-dom"
import { useItemCollection } from "../hooks/useItemCollection"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import LoaderComponent from "../components/LoaderCompontent/LoaderComponent";



const ItemDetails = () => {

    const {itemId} = useParams();

    const {data, loading} = useItemCollection("products", itemId)

  return loading ? <LoaderComponent/> : <ItemDetailContainer productData={data} />
}

export default ItemDetails