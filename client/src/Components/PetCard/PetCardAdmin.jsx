import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const PetCardAdmin = ({ pet, index }) => {
  return (
    <div className="pet__card">
      <img
        className="pet__card--photo"
        src={`/uploads/${pet.photo}`}
        alt={pet.name}
      />
      <div className="flex-col-1">
        <p className="pet__card--name">{pet.name}</p>
        <p className="pet__card--breed">
          {pet.breed}
          <span className="pet__card--age">
            , {pet.age} {pet.gender}
          </span>
        </p>
        <p className="pet__card--weight">Weight: {pet.weight}</p>
      </div>
      <div className="flex-col-2">
        <p className="pet__card--date">Date Listed: {pet.dateListed}</p>
        <p className="pet__card--status">Status: {pet.status}</p>
        <div className="flex-end">
          <Link to={`/editpet/${pet._id}`}>
            <button className="pet__card--btn">
              EDIT PET <AiFillEdit />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCardAdmin;
