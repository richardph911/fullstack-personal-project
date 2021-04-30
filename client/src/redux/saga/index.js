import {takeLatest, call} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

//generator,
function* fetchSaga(action){
    const posts = yield call(api.fetchPosts); //co ket qua yield xong moi return ket qua
    console.log('[posts]', posts);
}
function* mySaga(){
    //generate function ES6
    yield takeLatest(actions.getPosts.getPostRequest,)
}

export default mySaga;
