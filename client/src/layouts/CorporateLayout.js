function CorporateLayout({ data }) {

  return (

    <div style={{
      background:"#f5f5f5",
      color:"black",
      minHeight:"100vh",
      padding:"40px"
    }}>

      <h1>{data.name}</h1>

      <p>{data.bio}</p>

    </div>

  );

}

export default CorporateLayout;