"use client"
import { useState } from "react"
export default function AddComment({uuid}) {
    const {userComments, setUserComments} = useState([]);
    async function submit(e) {
        e.preventDefault();
        const data = new FormData(e.target);

        const headersList = {
            Accept: "application/json",
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            Prefer: "return=representation",
            "Content-Type": "application/json",
           }
           
           const bodyContent = JSON.stringify(  {
              name: formData.get("name"),
              comment: formData.get("comment"),
              event_id: uuid,
             });
           
           const response = await fetch("https://nyguwfyqotcwrephctpb.supabase.co/rest/v1/events_comments", { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           });
      
           const newComment = await response.json();
           console.log(newComment);
           setUserComments((currentComments) => currentComments.concat(newComment[0]));

    }
  return (
  <>
    {userComments.map((c) => (
    <div key={c.id}>
    <dl>
        <dt>{c.name}</dt>
        <dd>{c.comment}</dd>
    </dl>
    </div>
    ))}
    <form onSubmit={submit}>
        <label htmlFor="name">What's your name?</label>
        <input type="text" name="name"/>
        <textarea name="comment" id="" ></textarea>
        <button>Comment NOW</button>
    </form>
  </>
  )
}