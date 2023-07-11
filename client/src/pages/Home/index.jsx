import {
  UserProfile,
  UserRecord,
  WeaterWidget,
  MapWidget,
} from "../../components";
import { useQuery } from "react-query";
import HomePageCss from "./homePage.module.css";


export default function HomePage() {
  const title = useQuery({
    queryKey: ["title"],
    queryFn: () => fetch("/api").then(res => console.log(res))
  });

  console.log(title);
  return (
    <>
      <div className="header">
        <h1>Hello Home Page</h1>
      </div>
      <div
        className="sections"
        style={{
          display: "flex",
        }}
      >
        <div className="left">
          <div className={`home section profile ${HomePageCss["section"]}`}>
            <UserProfile />
          </div>
          <div className={`home section record ${HomePageCss["section"]}`}>
            <UserRecord />
          </div>
        </div>
        <div className="right">
          <div className={`home section weather ${HomePageCss["section"]}`}>
            <WeaterWidget />
          </div>
          <div className={`home section news ${HomePageCss["section"]}`}>
            <MapWidget />
          </div>
        </div>
      </div>
    </>
  );
}
