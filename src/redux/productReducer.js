import * as actions from './actions';

const initialState = {
    loading: false,
    error:"",
    products:[]
}

const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case actions.FETCH_START :
            return {...state,loading:true}
        case actions.FETCH_SUCCESS :
            return  {...state,loading:false,products:[...action.payload]}
        case actions.FETCH_FAIL :
            return {...state,loading:false,error:action.payload}
        default : return state
    }
}

export default productReducer