import React, { useState, useEffect } from "react";
import { findSecurity } from "../../services/SecurityServices";
import styles from "./Security.module.scss";

export const Security = () => {
    const [security, setSecurity] = useState([]);

    useEffect(() => {
    findSecurity()
            .then(({data}) => {
            setSecurity(data);
            });
    }, []);
  return (
    <>
        { security.map(sc => 
        <div className={styles.security}>
            <div>ID: {sc.id}</div>
            <div>ISIN: {sc.ISIN} </div>
            <div>CUSIP: {sc.CUSIP}</div>
            <div>Issuer: {sc.Issuer}</div>
            <div>MaturityDate: {sc.MaturityDate}</div>
            <div>Coupon: {sc.Coupon}</div>
            <div>Type: {sc.Type}</div>
            <div>FaceValue: {sc.FaceValue}</div>
            <div>Status: {sc.Status}</div>
        </div>) 
        }
    </>
  )
};
