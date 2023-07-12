import { useQuery } from "react-query";

export default function WeatherWidget() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["weatherData"],
    queryFn: () =>
      fetch(
        "http://api.weatherapi.com/v1/current.json?key=33e451fd8af640229f9212959230407&q=39.69616,-74.84490&aqi=no"
      ).then((res) => res.json()),
      refetchOnWindowFocus: false,
      staleTime: 300000
  });

  if (isLoading) return "Loading ...";

  if (error) return "An error has occurred: " + error.message;

  const currentWeather = data["current"];
  const location = data["location"];

  // console.log(currentWeather);
  // console.log(location);
  return (
    <div
      style={{
        backgroundColor: "pink",
        height: 120,
        overflow: "scroll",
      }}
    >
      <h2>{location.name}</h2>
      <p>
        <span>{location.region}</span>{" "}
        <span>
          {location.country.split(" ")[0]}
          {location.country.split(" ")[1]}
        </span>
      </p>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {Object.keys(currentWeather).map((entry, i) => (
          <li key={i}>
            {typeof currentWeather[entry] !== "object"
              ? `${entry} : ${currentWeather[entry]}`
              : "CONDITON: [ICON / TEXT]"}
          </li>
        ))}
      </ul>
    </div>
  );
}
