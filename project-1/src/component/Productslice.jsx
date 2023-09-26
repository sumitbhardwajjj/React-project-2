import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


const initialState = {
    data:[],
    status: "idle",
}

const productslice = createSlice({
    name: "products",
    initialState,
    reducers:{
    //  fetchProducts(state,action){
    //     state.data= action.payload
    //  }
    },
    
        extraReducers:(builder)=>{
            builder
            .addCase(getProducts.pending,(state,action)=>{
                state.status = "loading";
            })
            .addCase(getProducts.fulfilled,(state,action)=>{
                state.data= action.payload
                state.status = "idle"
            })
            .addCase(getProducts.rejected,(state,action)=>{
                state.status = "ERROR"
            })
        }
    
})

export const {fetchProducts} = productslice.actions
export default productslice.reducer

export const getProducts = createAsyncThunk('product/get',async()=>{
    const data = await fetch('https://fakestoreapi.com/products')
        const result =await data.json();
        return result;
})

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result =await data.json();
//         dispatch(fetchProducts(result))
        
//     }
// }
