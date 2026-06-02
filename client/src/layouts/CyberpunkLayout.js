function CyberpunkLayout({ data }) {

  return (

    <div
      style={{
        background: "black",
        color: "#00ff99",
        minHeight: "100vh",
        padding: "40px"
      }}
    >

      <h1>{data.name}</h1>

      <h2>{data.bio}</h2>

    </div>

  );

}

export default CyberpunkLayout;