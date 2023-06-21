import PostsForm from './components/posts-form';
import PostsList from './components/posts-list';

function Posts() {

    return (
        <div className="container mx-auto mt-16 w-11/12">
            <h1 className="font-bold text-primary text-xl">Post Your Idea</h1>
            <PostsForm/>
            <PostsList/>
        </div>
    )
}

export default Posts
