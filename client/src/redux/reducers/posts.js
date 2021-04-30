import  {INIT_STATE} from '../../constant';
import {getPosts, getType} from '../actions';
export default function postsReducer(state = INIT_STATE, action){
    switch(action.type){
        case getType(getPosts.getPostRequest()):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getPosts.getPostSuccess()):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostFail()):
            return {
                ...state,
                isLoading: false,
            }
           
        default:
            return state;

    }
}
