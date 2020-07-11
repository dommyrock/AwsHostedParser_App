import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

/*Usage
const DropDown = () => {
    const { ref, isComponentVisible } = useComponentVisible(true);
    return (
       <div ref={ref}>
          {isComponentVisible && (<p>Dropdown Component</p>)}
       </div>
    );

}
https://stackoverflow.com/questions/32553158/detect-click-outside-react-component?page=1&tab=active#tab-top
*/
