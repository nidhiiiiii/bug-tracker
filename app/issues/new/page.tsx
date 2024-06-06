'use client'
import React from 'react'
import { TextField,Button } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm ,Controller} from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Issue{
  title:string;
  description:string;
}
const newIssue=() =>{
  const {register,control,handleSubmit}=useForm<Issue>();
  const router = useRouter();
  // console.log(register('title'))
  return (
    <form 
      className='max-w-xl space-y-3' 
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data);
        router.push('/issues');
      })}>
        <TextField.Root placeholder='Title' {...register('title')}> 
        <TextField.Slot h-10 w-5/>
        </TextField.Root>
        <Controller
        name='description'
        control={control}
        render={({field})=><SimpleMDE placeholder="Description" {...field}/>}/>
        <Button>add</Button>
    </form>
  )
}

export default newIssue
