import AddComment from "@/components/AddComment";
export default async function EventPage({ params }) {
    const uuid = params.uuid;

    const headersList = {
        Accept: "application/json",
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
       }
       
    const response = await fetch("https://nyguwfyqotcwrephctpb.supabase.co/rest/v1/eventplanning?id.eq." + uuid, { 
      headers: headersList
    });

    let data = await response.json();
    const eventInfo = data;

    const responseComments = await fetch("https://nyguwfyqotcwrephctpb.supabase.co/rest/v1/events_comments?event_id.eq." + uuid, { 
      headers: headersList
    });
    const comments = await responseComments.json();
    
    return (
      <article>
        <h1>Hej</h1>
        <h1>{eventInfo.name}</h1>
        <dl>
          <dt>When</dt>
          <dd>{eventInfo.when}</dd>
          <dd>{eventInfo.description}</dd>
        </dl>
        <section>
          <h2>Comments</h2>
          {comments.map((c) => <div key={c.id}>
            <dl>
              <dt className="">{c.name}</dt>
              <dd>{c.comment}</dd>
            </dl>
          </div>)}
          <AddComment uuid={uuid}/>
        </section>
      </article>

  );
}