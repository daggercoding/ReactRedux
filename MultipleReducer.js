const redux = require("redux")
const{createStore,combineReducers} = redux
//=======================>>>>>>>>>> We can simplify by seprating the Reducers
// THIS IS OUR ACTION
const BuyCake = "BUY_ONE_CAKE"; 
const BuyIceCream = "BUY_ONE_IceCream"; 

function buyCake() {
    return {
        type: BuyCake
    };
}
function buyIceCream(){
    return{
        type:BuyIceCream
    }
}


// THIS IS A REDUCER FUNCTION (STATE, ACTION) => NEW STATE
let cakeState = {
    numOfCake: 10,
};

let iceCreamState = {
    numOfIceCream: 10,
};

let cakeReducer = (state=cakeState,action)=>{
    switch(action.type){
        case BuyCake:return{
            ...state,numOfCake:state.numOfCake-1
        }
        default: return state
    }
}

let iceCreamReducer = (state=iceCreamState,action)=>{
    switch(action.type){
        case BuyIceCream:return{
            ...state,numOfIceCream:state.numOfIceCream-1
        }
        default: return state
    }
}

let rootReducer = combineReducers(
    {
    cake:cakeReducer,
    iceCream:iceCreamReducer
}
)
////=========================>>>>>> Created One Store BY Combining two Reducers

const store = createStore(rootReducer)
console.log("The Initial State is", store.getState());
//it will return a method to unSubscribe for the changes
let unSubscribe = store.subscribe(()=>console.log("updatedSate" , store.getState()))
 
//here we are passsing our Action Object in the dispatch function
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

//here we unsubscribe for the changes means ay any changes out application did not respnd
unSubscribe()
