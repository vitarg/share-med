import React from "react";
import MedicationsItem from "./MedicationsItem";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const Medications = ({ search }) => {
  const { id } = useParams();

  const medications = useSelector((state) => state?.medications.medications);

  if (id) {
    return medications
      .filter((item) => item.category._id === id)
      .map((item) => <MedicationsItem key={item._id} item={item} />);
  }

  if (search) {
    return medications
      .filter((item) =>
        search === ""
          ? item
          : item.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((item) => {
        return <MedicationsItem key={item._id} item={item} />;
      });
  }

  return medications.map((item) => (
    <MedicationsItem key={item._id} item={item} />
  ));
};

export default Medications;
