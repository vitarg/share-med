import React from "react";
import { useSelector } from "react-redux";
import medicationsSelectors from "../../../store/medications/selectors";
import { useParams } from "react-router";
import MedicationItem from "./medication-item";

interface MedicationsProps {
  search: string;
}

const Medications: React.FC<MedicationsProps> = ({ search }) => {
  const { id } = useParams<{ id?: string }>();

  const medications = useSelector(medicationsSelectors.medications);

  if (id) {
    return (
      <>
        {medications
          .filter((item) => item.category._id === id)
          .map((item) => (
            <MedicationItem key={item._id} item={item} />
          ))}
      </>
    );
  }

  if (search) {
    return (
      <>
        {medications
          .filter((item) =>
            !search.length
              ? item
              : item.name
                  .toLowerCase()
                  .includes(search.toString().toLowerCase())
          )
          .map((item) => {
            return <MedicationItem key={item._id} item={item} />;
          })}
      </>
    );
  }

  return (
    <>
      {medications.map((item) => {
        console.log("medication", item);

        return <MedicationItem key={item._id} item={item} />;
      })}
    </>
  );
};

export default Medications;
