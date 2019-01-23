
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from "redux";


const storeConfig = (preloadedState) => {
    const middleware = []
    
    const middlewareEnhancer =  applyMiddleware(...middleware)
    
    const storeEnhancer = [middlewareEnhancer]

    const composeEnhancer = composeWithDevTools(...storeEnhancer)

    const store = createStore(
        rootReducer, preloadedState, composeEnhancer
    )


    if(process.env.NODE_ENV !== 'production'){
        if(module.hot){
            const path = '../reducers/rootReducer'
            module.hot.accept(path, ()=>{
                const newRootReducer = require(path).default
                store.replaceReducer(newRootReducer)
            })
        }
    }

    return store;
}



export default storeConfig
