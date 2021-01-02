import RoundFilterButton from "../components/shared/RoundFilterButton";
import Search_Input from "../components/shared/Search_Input";
import { chip_container } from "../css/searchSection.module.css";
const defaultChips = [
  { id: 1, label: "Facebook", src: "https://i.imgur.com/DkJIkWQ.png" },
  { id: 2, label: "Google", src: "https://i.imgur.com/8KhVFYA.png" },
  { id: 3, label: "Microsoft", src: "https://i.imgur.com/tc6VO28.png" },
  { id: 4, label: "AWS", src: "https://i.imgur.com/SEZpYZP.png" },
  { id: 5, label: "Alalala", src: "" },
  { id: 6, label: "More", src: "", showSVG: true },
];
// This is search component intended for search section , where i will have other buttons to filter companies jobs

// TODO: render <li> inside columns
export default function SearchComponent() {
  return (
    <>
      <div className={chip_container}>
        {defaultChips.map((x) => (
          <RoundFilterButton key={x.id} id={x.id} label={x.label} src={x.src} showSVG={x.showSVG} />
        ))}
      </div>
    </>
  );
}
