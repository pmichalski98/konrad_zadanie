import axios from "axios";
import avatar from "../../../assets/avatar.png";
import {useQuery} from "react-query";

// TO POWINNO BYC W INNYM PLIKU GDZIES
export interface Post {
    id: number;
    title: string;
    content: string;
}

// TO MOZE JAKO ENV VARIABLE
export const URL = 'https://axence-recruitment.azurewebsites.net/posts';

function PostsList() {
    const {data: posts, isLoading, error} = useQuery('posts', async () => {
            const res = await axios.get(URL);
            const posts: Post[] = res.data;
            return posts;
        }
    );

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Something went wrong...</div>

    return (
        <div className=" container mx-auto ">
            <h2 className="my-8 font-bold text-primary">People Ideas</h2>
            <div className="pl-4 border-l-2 border-dashed">
                <ul>
                    {posts?.map(post => {
                        return <li className="mb-6" key={post.id}>
                            <div className="flex gap-3 mb-2">
                                {/*MOZE AVATAR JAKO OSOBNY KOMPONENT*/}
                                <img className="h-12" src={avatar} alt="Avatar"/>
                                <h3 className="text-primary capitalize font-semibold "> {post.title}</h3>
                            </div>
                            <p className="text-secondary text-sm ">{post.content}</p>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default PostsList
