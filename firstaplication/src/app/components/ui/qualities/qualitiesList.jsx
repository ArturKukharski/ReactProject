import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQuality";

const QualitiesList = (qualitiesList) => {
    const { isLoading, getQualityUser } = useQualities();
    const qualities = getQualityUser(qualitiesList);
    // console.log(qualities);
    if (!isLoading) {
        return qualities.map((qual) => <Quality key={qual._id} {...qual} />);
    } else return "Loading...";
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
