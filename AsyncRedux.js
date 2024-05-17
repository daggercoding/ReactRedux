const { createStore, applyMiddleware } = require('redux');
const thunkMiddleware = require('redux-thunk')
const axios = require("axios");

const FETCH_USER_REQ = "FETCH_USER_REQ";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const initialData = {
  loading:false,
  data:[],
  error:""
}

const fetchUserReq =()=>{
  return {
    type:FETCH_USER_REQ
  }
}
const fetchUserSucess =(user)=>{
  return {
    type:FETCH_USER_SUCCESS,
    payload:user
  }
}
const fetchUserError =(error)=>{
  return {
    type:FETCH_USER_ERROR,
    payload:error

  }
}

const reducer= (state=initialData,action)=>{
  switch(action.type){
    case FETCH_USER_REQ:
      return{
       ...state,loading:true
      }
    case FETCH_USER_SUCCESS:
      return{
       ...state,loading:false,data:action.payload
      }
    case FETCH_USER_ERROR:
      return{
        ...state,error:action.payload
      }
  }
}

const fetchData =()=>{
  return (dispatch)=>{
  dispatch(fetchUserReq)
  axios.get("https://dummyjson.com/products")
  .then(data=>dispatch(fetchUserSucess(data.id)))
  .catch(err=>dispatch(fetchUserError(err)))
  }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>console.log(store.getState()))
store.dispatch(fetchData())



