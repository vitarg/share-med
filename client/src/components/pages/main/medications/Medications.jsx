import React, { useEffect, useState } from "react";
import MedicationsItem from "./MedicationsItem";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const Medications = ({ search }) => {
  const { id } = useParams();

  const medications = useSelector((state) => state.medications.medications);

  const filteredMedications = id
    ? medications.filter((e) => e.category._id === id)
    : medications;

  return filteredMedications
    .filter((item) =>
      search === ""
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((item) => {
      return <MedicationsItem item={item} />;
    });
};

export default Medications;
