// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/api/hello`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default function ssr({ data }) {
  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          <img src={data.photo}></img>
          <h1>{data.name}</h1>
        </div>
      ))}
    </div>
  );
}
