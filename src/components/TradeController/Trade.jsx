import React, { useState, useEffect } from "react";
import { findTrade } from "../../services/TradeServices";
import styles from "./Trade.module.scss";

export const Trade = () => {
    const [trade, setTrade] = useState([]);

    useEffect(() => {
    findTrade()
            .then(({data}) => {
            setTrade(data);
            });
    }, []);
  return (
    <>
        { trade.map(td => 
        <div className={styles.trade}>
            <div>ID: {td.id}</div>
            <div>BookId: {td.BookId} </div>
            <div>CounterPartyId: {td.CounterPartId}</div>
            <div>SecurityId: {td.SecurityId}</div>
            <div>Quantity: {td.Quantity}</div>
            <div>Status: {td.Status}</div>
            <div>Price: {td.Price}</div>
            <div>Buy_Sell: {td.Buy_Sell}</div>
            <div>TradeDate: {td.TradeDate}</div>
            <div>SettlementDate: {td.SettlementDate}</div>
        </div>) 
        }
    </>
  )
};
