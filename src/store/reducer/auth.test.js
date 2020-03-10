import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

// passing an empty action to check if the reducer is returning the initial state

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

// deploying an action (in this case idToken/userId) to test if the actionType/reducer is functioning properly
    it('should store the token upon login', () =>{
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        },{
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    });
})