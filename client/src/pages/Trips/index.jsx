import { Link } from "react-router-dom";
import { NewTripButton } from "../../components";

const Catch = ({numberOfCatches}) => {
  const catches = numberOfCatches ? "🐟".repeat(numberOfCatches) : "🪱"
  return (
    <th>{catches}</th>
  )
}

export default function TripsPage() {
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Trips</h1>
      <form action="">
      <NewTripButton />
      </form>
      <div>
        <h2>Past Trips</h2>
        <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Catches</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>Wed Jul 05 2023</td>
            <Catch numberOfCatches={5} />
          </tr>
          <tr>
            <td>Wed Jul 05 2023</td>
            <Catch numberOfCatches={2} />
          </tr>
          <tr>
            <td>Wed Jul 05 2023</td>
            <Catch numberOfCatches={0} />
          </tr>
          <tr>
            <td>Wed Jul 05 2023</td>
            <Catch numberOfCatches={1} />
          </tr>
        </tbody>
        </table>
      </div>
    </>
  );
}
