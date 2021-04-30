import { createActions } from 'redux-actions';
export const getType = (reduxAction) =>{
    return reduxAction().type;
}
export const getPosts = createActions({
    getPostRequest: undefined,
    getPostSuccess: (payload) => payload,
    getPostFail: (err) => err,
});
/*
{
type: 'getPostSucces,
payload:{ name: 'Test'}
 */
