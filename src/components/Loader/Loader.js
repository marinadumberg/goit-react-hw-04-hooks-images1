import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import s from "../Loader/Loader.module.css";

export default function LoaderSpiner() {
  return (
    <div className={s.Loader}>
      <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
