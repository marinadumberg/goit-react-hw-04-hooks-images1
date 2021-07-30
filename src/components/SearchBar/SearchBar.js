import { useState } from "react";
import { toast } from "react-toastify";
import s from "./SearchBar.module.css";

export default function SearchBarHooks({ onSubmit }) {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      toast.warn("Enter valid name,please!");
      return;
    }
    onSubmit(name);
    setName("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}></span>
        </button>

        <input
          onChange={handleNameChange}
          className={s.SearchFormInput}
          type="text"
          value={name}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

// export default class SearchBar extends Component {
//   state = {
//     imageName: "",
//   };
//   handleNameChange = (e) => {
//     this.setState({ imageName: e.currentTarget.value.toLowerCase() });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.imageName.trim() === "") {
//       return toast.error("Enter valid name,please!");
//     }
//     this.props.onSubmit(this.state.imageName);
//     this.setState({ imageName: "" });
//   };

//   render() {
//     return (
//       <header className={s.Searchbar}>
//         <form className={s.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={s.SearchFormButton}>
//             <span className={s.SearchFormButtonLabel}></span>
//           </button>

//           <input
//             onChange={this.handleNameChange}
//             className={s.SearchFormInput}
//             type="text"
//             value={this.state.imageName}
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
