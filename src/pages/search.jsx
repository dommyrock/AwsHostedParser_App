import RoundFilterButton from "../components/shared/RoundFilterButton";
import { main_container, chip_container } from "../css/searchSection.module.css";
import { useStore } from "../store";
// This is search component intended for search section , where i will have other buttons to filter companies jobs

// TODO: render <li> inside columns
export default function SearchComponent() {
  const { keywords, companies } = useStore();
  return (
    <div className={main_container}>
      <div className={chip_container}>
        {companies.map((x) => (
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
        {keywords.map((x) => (
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
