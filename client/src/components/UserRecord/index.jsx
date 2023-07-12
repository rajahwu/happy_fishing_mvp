import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import NewTripButton from "../NewTripButton";

const Catch = ({ numberOfCatches }) => {
  const catches = numberOfCatches ? "🐟".repeat(numberOfCatches) : "🪱";
  return <th>{catches}</th>;
};

export default function UserRecord() {
  const currentDate = faker.date.recent().toDateString();
  const { isLoading, error, data } = useQuery({
    queryKey: ["tripData"],
    queryFn: () => fetch("/api/trips").then((res) => res.json()),
    refetchOnWindowFocus: false,
    staleTime: 300000
  });

  if (isLoading) return "Loading ...";

  if (error) return "An error has occurred: " + error.message;

  console.log("trips", data);

  return (
    <>
      <h1>User Record</h1>
      <NewTripButton />
      <table style={{ color: "white", fontSize: "1.2rem" }}>
        <thead>
          <tr>
            <th>
              <Link to="/trips">Trips</Link>
            </th>
            <th>
              <Link to="/catches">Catches</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentDate}</td>
            <Catch numberOfCatches={0} />
          </tr>
          <tr>
            <td>{currentDate}</td>
            <Catch numberOfCatches={3} />
          </tr>
          <tr>
            <td>{currentDate}</td>
            <Catch numberOfCatches={4} />
          </tr>
          <tr>
            <td>{currentDate}</td>
            <Catch numberOfCatches={1} />
          </tr>
        </tbody>
      </table>
    </>
  );
}
