import { useEffect } from "react";

/**
 * Hook that validates number numbers
 */
function useNumberValidator(number, setNumber, cb) {
  useEffect(() => {
    if (number) {
      if (number?.charAt(0) !== "0") {
        setNumber("");
        cb(true);
      } else {
        cb(false);
      }
    }

    if (number?.charAt(1) === "0") {
      cb(true);
    }

    if (number?.length !== 10) {
      cb(true);
    }

    const acceptedNumbers = [
      "055",
      "054",
      "024",
      "059",
      "020",
      "050",
      "023",
      "030",
      "027",
      "057",
      "026",
      "056",
      "028",
    ];
    if (number?.length === 10) {
      const firstThree = number?.slice(0, 3);
      if (!acceptedNumbers?.includes(firstThree)) {
        cb(true);
      } else {
        cb(false);
      }
    }
  }, [number, cb, setNumber]);
}

export default useNumberValidator;
