// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant module
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// JSX Component AlertModal
const ErrorMessage = () => {
    
 const modalAlert: any = useSelector(
        (state: RootState) => state.error.errorMessage.openModal
      );
 const modalContent: any = useSelector(
        (state: RootState) => state.error.errorMessage.modalContent
      );


  return(
    <div
    style={{
      position : "fixed",
      zIndex : "1000",
      top: "89px",
      right: "48px",
      display: `${modalAlert ? "flex" : "none"}`,
      border : "1px solid grey",
      borderRadius : "5px",
      height: "22px",
      padding : "0px 10px 0 10px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "row",
      background: "brown",
      color: "white",
      textTransform: "capitalize",
    }}
    >
     <p style={{
         display: "flex",
         fontSize: "14px"
     }}>{modalContent}</p>
    </div>
  )
}

export default ErrorMessage;