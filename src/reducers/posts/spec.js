import {types} from './../../actions/types'
import postsReducer from './reducer';


describe('Posts Reducer', () =>{

    it('Should return new state', () =>{
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([])
    })

    it('should return new state if receieving type', () =>{
        const posts = [{title: 'hellohello hey', title: 'hellohello hey',title: 'hellohello hey'}];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        })
        expect(newState).toEqual(posts)
    })
})