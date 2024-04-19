import { redirect } from 'next/navigation'

export default async function AddEventPage() {
  async function submit(formData) {
    "use server"

    let headersList = {
      Accept: "application/json",
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Prefer: "return=representation",
      "Content-Type": "application/json",
     }
     
     let bodyContent = JSON.stringify(  {
        name: formData.get("name"),
        when: formData.get("when"),
        description: formData.get("comment"),
       });
     
     let response = await fetch("https://nyguwfyqotcwrephctpb.supabase.co/rest/v1/eventplanning", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });

     let data = await response.json();
     const id = data[0].id;
     console.log(id);
     console.log(formData);
     redirect("/event/" + id)

  }
  return (
    <form className="grid grid-rows-3 w-1/2 "action={submit}>
        <div className="formcontrol">
            <label htmlFor="form_name">Title</label>
            <input id="form_name" name="name" type="text" required/>
        </div>
        <div className="formcontrol">
            <label htmlFor="form_when">When</label>
            <input id="form_when" name="when" type="date" required/>
        </div>
        <div className="formcontrol">
            <label htmlFor="form_comment">Any comments?</label>
            <input id="form_comment" name="comment" type="text" required/>
        </div>
        <button>Get</button>
    </form>
  )
}
