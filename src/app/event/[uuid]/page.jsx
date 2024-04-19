export default async function EventPage({ params }) {
    const uuid = params.uuid;

    let headersList = {
        Accept: "application/json",
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
       }
       
    let response = await fetch("https://nyguwfyqotcwrephctpb.supabase.co/rest/v1/eventplanning?id.eq." + uuid, { 
      headers: headersList
    });

    let data = await response.json();
    const eventInfo = data[0];
    
    return (
      <article>
        <h1>Hej</h1>
        <h1>{eventInfo.name}</h1>
        <dl>
          <dt>When</dt>
          <dd>{eventInfo.when}</dd>
          <dd>{eventInfo.description}</dd>
        </dl>
      </article>

  );
}