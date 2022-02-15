import React from "react";
import MedicationsItem from "./MedicationsItem";
import { useSelector } from "react-redux";
import medicationsSelectors from "../../../store/selectors/medications";
import { useParams } from "react-router";

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
            <MedicationsItem key={item._id} item={item} />
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
            return <MedicationsItem key={item._id} item={item} />;
          })}
      </>
    );
  }

  return (
    <>
      {medications.map((item) => (
        <MedicationsItem key={item._id} item={item} />
      ))}
    </>
  );
};

export default Medications;
