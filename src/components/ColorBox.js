export default function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "120px",
        height: "120px",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "8px",
      }}
    >
      {color}
    </div>
  );
}