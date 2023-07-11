import { Link, useNavigate } from "react-router-dom";

export default function NewTripButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/new-trip")}>Start A New Trip</button>
  );
}

export const OnTrip = () => {
  const navigate = useNavigate();

  return (
    <>
      <Link to="/">Home</Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "15vw",
          width: 250,
          backgroundColor: "green",
        }}
      >
        <h1> On Trip</h1>
        <div
          style={{
            width: 250,
            height: 100,
            backgroundColor: "pink",
          }}
        >
          Forcast | Map
        </div>
        <div
          style={{
            display: "flex",
            margin: 0,
            width: 250,
            height: 30,
            color: "black",
            backgroundColor: "bisque",
          }}
        >
          <p style={{ margin: 0 }}>catches: 🐟🐟🐟</p>
          <button style={{ marginLeft: "10px" }}>Catch</button>
        </div>
        <div
          style={{
            width: 250,
            height: 200,
            color: "white",
            backgroundColor: "red",
          }}
        >
          <p>other fishermen</p>
          <ul style={{ listStyle: "none" }}>
            <li>✅ james: 🐟🐟</li>
            <li>🎣 chris: 🪱</li>
            <li>🎣 matt: 🐟</li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "yellow",
          }}
        >
          <button onClick={() => navigate("/done-trip")}>Done</button>
        </div>
      </div>
    </>
  );
};

export const DoneTrip = () => {
  const navigate = useNavigate();
  return (
    <form style={{ display: "flex" }}>
      <label htmlFor="story">Story</label>
      <textarea name="story" type="text" placeholder="Talk about your trip" />
      <label htmlFor="image">Image</label>
      <input name="image" type="text" placeholder="image url" />
      <button onClick={() => navigate("/")}>End Trip</button>
    </form>
  );
};
