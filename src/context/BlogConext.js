import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {

     switch (action.type) {

        //Now we usring jsonServer so , no need of 'insert' case
        // case 'insert': return [...state, {
        //     id: Math.floor(Math.random() * 99),
        //     title: action.payload.title,
        //     content: action.payload.content,
        // }];

        case 'update': return state.map(blogPost => {
            return blogPost.id === action.payload.id ? action.payload : blogPost
        });
        case 'delete': return state.filter(blogPost => blogPost.id !== action.payload);
        case 'select' : return action.payload
        default: return state;
    }
};


const getBlogPost = dispatch =>{
    return async () =>{
       const response = await jsonServer.get('/blogPosts');
       dispatch({type: 'select' , payload: response.data});
    }
}

const addBlogPost = dispatch => {
    return async(title, content, callback) => {

        await jsonServer.post('/blogPosts', {title,content});
        // dispatch({ type: 'insert', payload: { title, content } }); // key are same so avoid redumsion
        if (callback()) {
            callback();
        }

    };
};


const updateBlogPost = dispatch => {
    return async(id, title, content, callback) => {

        await jsonServer.put(`/blogPosts/${id}`, {title,content});
        
        dispatch({ type: 'update', payload: { id, title, content } });
        if (callback()) {
            callback();
        }
    };
};


const deleteBlogPost = dispatch => {
    return async(id) => {
        await jsonServer.delete(`/blogPosts/${id}`);
        dispatch({ type: 'delete', payload: id })
    };
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, updateBlogPost , getBlogPost },
    []
);

