import {fn} from '../action/axioss'

export default {
    namespace:'one',
    state:{
        num:1
    },
    effects:{
        *yes({payload},{put, call}){
            console.log(payload)
            var x = yield call(fn)
            yield put({
                type:"add",
                payload:x
            }) 
        }
    },
    reducers:{
        'add'(state,{payload}){
            console.log(payload)
            return {
                ...state,
                num: state.num +1
            }
        }
    }
}