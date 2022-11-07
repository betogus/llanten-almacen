import { setLoading, setProducts } from "./features/productSlice";

export const getProducts = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(setLoading())
        const resp = await fetch(`https://llantenalmacen-default-rtdb.firebaseio.com/`)
        const data = await resp.json();
        console.log(data)
        dispatch(setProducts({pokemons: data.results, page: page + 1}))
    }

}
