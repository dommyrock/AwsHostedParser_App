import RoundFilterButton from "../components/shared/RoundFilterButton";
import Search_Input from "../components/shared/Search_Input";
import { main_container, chip_container } from "../css/searchSection.module.css";
const defaultChips = [
  { id: 1, label: "Facebook", src: "https://i.imgur.com/DkJIkWQ.png", type: "company" },
  { id: 2, label: "Google", src: "https://i.imgur.com/8KhVFYA.png", type: "company" },
  { id: 3, label: "Microsoft", src: "https://i.imgur.com/tc6VO28.png", type: "company" },
  { id: 4, label: "AWS", src: "https://i.imgur.com/SEZpYZP.png", type: "company" },
  // { id: 5, label: "Alalala", src: "" },
  { id: 16, label: "More", src: "", showSVG: true, type: "company" },
  { id: 27, label: "Test 1", type: "company" },
  { id: 228, label: "Test 12", type: "company" },
  { id: 29, label: "Test 123", type: "company" },
  { id: 310, label: "Test 24", type: "company" },
  { id: 47, label: "Test 45", type: "company" },
  { id: 48, label: "Test 566", type: "company" },
  { id: 94, label: "Test 121212", type: "company" },
  { id: 140, label: "Test 14545445455", type: "company" },
];
const defaultRoles = [
  { id: 32, label: "SWE", type: "keyword" },
  { id: 44, label: "Software developer", type: "keyword" },
  { id: 55, label: "Backend developer", type: "keyword" },
  { id: 136, label: "More", showSVG: true, type: "keyword" },
  { id: 66, label: "Frontend developer", type: "keyword" },
  { id: 77, label: "Dev-ops", type: "keyword" },
  { id: 88, label: "Project manager", type: "keyword" },
  { id: 99, label: "Data scientist", type: "keyword" },
  { id: 122, label: "Engineering lead", type: "keyword" },
  { id: 123, label: "Tech lead", type: "keyword" },
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
