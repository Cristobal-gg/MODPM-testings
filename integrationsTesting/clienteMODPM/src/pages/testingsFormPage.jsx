import {useForm} from 'react-hook-form';
import { createBook } from '../api/Booklist.api';

export function TestingsFormPage() {

    const{register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = handleSubmit(async data => {
        const res = await createBook(data);
        console.log(res);
    })
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="title" 
                    {...register("title", {required:true })}
                />
                {errors.title && <span>this field is required</span>}
                <textarea 
                    rows="3" 
                    placeholder="author"
                    {...register("author", {required:true })}
                ></textarea>
                {errors.author && <span>this field is required</span>}
                <input 
                    type="date" 
                    {...register("date", {required:true })}
                />
                {errors.date && <span>this field is required</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}