import ReactDOM from "react-dom";
import ModalComponent from "../components/modalComponent/ModalComponent";

export const ModalContainer = ({projectName,modalClose})=>{
  // 작업
  return ReactDOM.createPortal(<ModalComponent projectName={projectName} modalClose={modalClose}/>,document.getElementById("modal"));
}

