// pages/index.js
export async function getServerSideProps(context) {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      // Explicitly throw error with status code
      const message = `API request failed with status ${res.status}`;
      throw new Error(message);
    }
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error('Error fetching data:', error); 
    // Return a custom error page
    return {
      props: { error: error.message },
      notFound: res ? !res.ok : true //check if the request even went out
    };
  }
}

function Home({ data, error }) {
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  } else if (!data) {

    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div>
      {/* ... */}
    </div>
  );
}