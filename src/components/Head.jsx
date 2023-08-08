import logo from "../assets/logo.jpg";

function Head() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(192, 195, 184, 1)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(5px)",
      }}
    >
      <img src={logo} alt="" style={{ width: "200px", height: "200px" }} />
    </div>
  );
}

export default Head;
