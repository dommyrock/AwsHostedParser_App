import RoundFilterButton from "../components/shared/RoundFilterButton";
import Search_Input from "../components/shared/Search_Input";
import { chip_container } from "../css/searchSection.module.css";
const defaultChips = [
  { id: 1, label: "Facebook", src: "https://i.imgur.com/DkJIkWQ.png" },
  { id: 2, label: "Google", src: "https://i.imgur.com/8KhVFYA.png" },
  { id: 3, label: "Microsoft", src: "https://i.imgur.com/tc6VO28.png" },
  { id: 4, label: "AWS", src: "https://i.imgur.com/SEZpYZP.png" },
  { id: 5, label: "Alalala", src: "" },
  { id: 5, label: "More", src: "", showSVG: true },
];
// This is search component intended for search section , where i will have other buttons to filter companies jobs

const containerStyle = {
  display: "flex",
  flexDirrection: "row",
  textAlign: "left",
  position: "absolute",
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  borderRadius: "10px",
  background: "#fff",
  overflow: "hidden",
  minWidth: "350px",
  // top: "50%", //move to center of screen while testing
  padding: "3px",
};

const columnStyle = {
  marginTop: "55px",
  display: "flex",
  flexDirection: "columns",
  padding: "0.5rem",
};
// TODO: render <li> inside columns
export default function SearchComponent() {
  return (
    <>
      <div className={chip_container}>
        {defaultChips.map((x) => (
          <RoundFilterButton id={x.id} label={x.label} src={x.src} showSVG={x.showSVG} />
        ))}
      </div>
      {/* Display on More chip click */}
      {/* <div style={containerStyle}>
        <Search_Input />
        <div style={columnStyle}>Test 1111111111111</div>
        <div style={columnStyle}>Test 2</div>
      </div> */}
    </>
  );
}
