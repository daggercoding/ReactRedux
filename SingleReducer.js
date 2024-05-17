const redux = require("redux");
const { create } = require("tar");
const { createStore ,combineReducers } = redux;

// THIS IS OUR ACTION
const BuyCake = "BUY_ONE_CAKE";
const BuyIceCream = "BUY_ONE_IceCream";

 

function buyCake() {
    return {
        type: BuyCake
    };
}
function buyIceCream(){
    return {
        type:BuyIceCream
    }
}


// THIS IS A REDUCER FUNCTION (STATE, ACTION) => NEW STATE
let initialState = {
    numOfCake: 10,
    numOfIceCream:20
};

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case BuyCake:
            return {
                ...state,
                numOfCake: state.numOfCake - 1 
            };
        case BuyIceCream:return{
            ...state,numOfIceCream:state.numOfIceCream-1
        }
        default:
            return state; 
    }
};

// Creating a store
const store = createStore(reducer);
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


