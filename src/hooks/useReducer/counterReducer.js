


export const initialState = {count:0};


export function reducer(state,action){
    switch(action.type){
        case "increase":
            return {...state,count:state.count+1};
        case 'decrease':
            return {...state,count:state.count-1};
        case "reset":
            return {...state,count:0};
        case "increaseByAmount":
            return {...state,count:state.count+action.payload}
        case 'decreaseByAmount':
            return {...state,count:state.count-action.payload}  
    }
}