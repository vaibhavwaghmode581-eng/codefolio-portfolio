function MinimalLayout({ data }) {

  return (

    <div>

      <h1>{data.name}</h1>

      <p>{data.bio}</p>

    </div>

  );

}

export default MinimalLayout;