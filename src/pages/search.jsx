import RoundFilterButton from "../components/shared/RoundFilterButton";
import Search_Input from "../components/shared/Search_Input";
import { main_container, chip_container } from "../css/searchSection.module.css";
const defaultChips = [
  { id: 1, label: "Facebook", src: "https://i.imgur.com/DkJIkWQ.png", type: "keyword" },
  { id: 2, label: "Google", src: "https://i.imgur.com/8KhVFYA.png", type: "keyword" },
  { id: 3, label: "Microsoft", src: "https://i.imgur.com/tc6VO28.png", type: "keyword" },
  { id: 4, label: "AWS", src: "https://i.imgur.com/SEZpYZP.png", type: "keyword" },
  // { id: 5, label: "Alalala", src: "" },
  { id: 16, label: "More", src: "", showSVG: true, type: "" },
  { id: 27, label: "Test 1", type: "keyword" },
  { id: 228, label: "Test 12", type: "keyword" },
  { id: 29, label: "Test 123", type: "keyword" },
  { id: 310, label: "Test 24", type: "keyword" },
  { id: 47, label: "Test 45", type: "keyword" },
  { id: 48, label: "Test 566", type: "keyword" },
  { id: 94, label: "Test 121212", type: "keyword" },
  { id: 140, label: "Test 145454", type: "keyword" },
];
const defaultRoles = [
  { id: 32, label: "SWE", type: "company" },
  { id: 44, label: "Software developer", type: "company" },
  { id: 55, label: "Backend developer", type: "company" },
  { id: 136, label: "More", showSVG: true, type: "" },
  { id: 66, label: "Frontend developer", type: "company" },
  { id: 77, label: "Dev-ops", type: "company" },
  { id: 88, label: "Project manager", type: "company" },
  { id: 99, label: "Data scientist", type: "company" },
  { id: 122, label: "Engineering lead", type: "company" },
  { id: 123, label: "Tech lead", type: "company" },
];
// This is search component intended for search section , where i will have other buttons to filter companies jobs

// TODO: render <li> inside columns
export default function SearchComponent() {
  return (
    <div className={main_container}>
      <div className={chip_container}>
        {defaultChips.map((x) => (
          <RoundFilterButton
            key={x.id}
            id={x.id}
            label={x.label}
            src={x.src}
            showSVG={x.showSVG}
            type={x.type}
          />
        ))}
      </div>
      <div className={chip_container}>
        {defaultRoles.map((x) => (
          <RoundFilterButton
            key={x.id}
            id={x.id}
            label={x.label}
            src={x.src}
            showSVG={x.showSVG}
            type={x.type}
          />
        ))}
      </div>
    </div>
  );
}
