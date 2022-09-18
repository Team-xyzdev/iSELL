// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant module
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";

// JSX Component AlertModal
const AlertModal = () => {
    
    const modalAlert: any = useSelector(
        (state: RootState) => state.alert.alertModal.openModal
      );
      const modalContent: any = useSelector(
        (state: RootState) => state.alert.alertModal.modalContent
      );
// Starting React-dispatch to dispatch action in state in the component
  const dispatch = useDispatch();

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
      background: "green",
      color: "white",
      textTransform: "capitalize",
    }}
    >
     <p>{modalContent}</p>
    </div>
  )
}

export default AlertModal;