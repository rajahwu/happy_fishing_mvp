import { useQuery } from "react-query";

export default function MapWidget() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["mapData"],
    queryFn: () =>
      fetch(
        "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.3601,37.8312,9.43,0/300x200?access_token=pk.eyJ1IjoicmFqYWh3dSIsImEiOiJjbGp2a2h3aDUxYzhmM2xwYXIydHV5czlnIn0.MGF0sZl0Ko1M8ajsT6WocA"
      ),
      refetchOnWindowFocus: false,
      staleTime: 300000
  });

  if (isLoading) return "Loading ...";

  if (error) return "An error has occurred: " + error.message;


  console.log("map", data.url)

  return (
    <div>
      <h1>Map</h1>
      <div>
        <img src={data.url} alt="map" height="120px" width="120px" /> 
      </div>
    </div>
  );
}
