import RoundFilterButton from "../components/shared/RoundFilterButton";
import Search_Input from "../components/shared/Search_Input";

const defaultChips = [
  { id: 1, label: "Facebook", src: "https://i.imgur.com/DkJIkWQ.png" },
  { id: 2, label: "Google", src: "https://i.imgur.com/8KhVFYA.png" },
  { id: 3, label: "Microsoft", src: "https://i.imgur.com/tc6VO28.png" },
  { id: 4, label: "AWS", src: "https://i.imgur.com/SEZpYZP.png" },
  { id: 5, label: "Alalala", src: "" },
];
// This is search component intended for search section , where i will have other buttons to filter companies jobs

const containerStyle = {
  display: "flex",
  flexDirrection: "row",
  /* align-items: center; */
  textAlign: "left",
  zIndex: 2,
  position: "absolute",
  top: "50%",
  padding: "1rem",
  /* hide any child if they overlap this container*/
  // overflow: hidden;
  // transition: height var(--speed) ease;
  // height: 150px;
  boxShadow:
    "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 1.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
  borderRadius: "10px",
  background: "#fff",
  overflow: "visible",
  width: "400px",
};
const column_rowStyle = {
  // width: "400px",
};
const columnStyle = {
  display: "flex",
  flexDirection: "columns",
};
export default function SearchComponent() {
  return (
    <>
      {/* render examples  */}
      {defaultChips.map((x) => (
        <RoundFilterButton id={x.id} label={x.label} src={x.src} />
      ))}
      <div id="container" style={containerStyle}>
        <div style={column_rowStyle}>
          <Search_Input />
        </div>
        <div style={columnStyle}>Test 1111111111111</div>
        <div style={columnStyle}>Test 2</div>
      </div>

      {/* TODO : add Search_Input into custom container div, and make layout in it for <li> data */}
    </>
  );
}
{
  /* <div id="search_popup">
  <div className="search_popupContainer">
    <h5>
      <RoleIcon width={iWidth} height={iHeight} />
      Role
      <br />
      <SearchInput data={roles} listName="roles" onChangeCallback={handleRoleChange} />
    </h5>
  </div>
  <div className="search_popupContainer">
    <h5>
      <LocationIcon width={iWidth} height={iHeight} />
      Location
      <br />
      <SearchInput data={countries} listName="countries" onChangeCallback={handleLocationChange} />
    </h5>
  </div>
</div>; */
}
