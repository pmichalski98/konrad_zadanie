import avatar from './../../../assets/avatar.png'
import {FormEvent, useState} from "react";
import axios from "axios";
import {Post, URL} from "./posts-list";
import {useMutation, useQueryClient} from "react-query";


function PostsForm() {
    const [formData, setFormData] = useState<Omit<Post, "id">>({} as Post);
    // to bym dał jako env variable
    const queryClient = useQueryClient();
    const {mutate, isLoading,} = useMutation('posts', async () => {
        await axios.post(`${URL}`, formData)
    }, {
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['posts']})
        }
    });

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        mutate();
        setFormData({title: '', content: ''});
    }

    return (
        // bez flex?
        <div className="flex gap-8 border-y-2 py-8 mt-6 max-w-screen-lg">
            <img className="h-fit" src={avatar} alt="Avatar"/>
            <div className="w-3/5">
                <h2 className="font-bold text-primary text-2xl">Hello!</h2>
                <span className="text-secondary ">Post your message here:</span>
                <form onSubmit={handleSubmit} className="mt-6 text-sm gap-4 flex flex-col">
                    <input value={formData.title}
                           onChange={(e) => setFormData({...formData, title: e.target.value})}
                           className="border-line-primary outline-none border-2  rounded-2xl py-3 px-4" type="text"
                           name="title" placeholder="Add a title"/>
                    <textarea value={formData.content}
                              onChange={(e) => setFormData({...formData, content: e.target.value})}
                              placeholder="Add your post"
                              className=" border-line-primary w-full h-36 resize-none outline-none border-2 rounded-2xl py-3 px-4"
                              name="content"/>
                    <button
                        disabled={isLoading}
                        className="self-end bg-gradient-to-tr from-btn-first to-btn-second text-center rounded-lg w-1/3  py-2 text-sm text-white"
                        type="submit">
                        Add post
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PostsForm
