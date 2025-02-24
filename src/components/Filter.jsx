// import { useState } from "react";

// const Filter = ({ onFilter }) => {
//   const [title, setTitle] = useState("");
//   const [rating, setRating] = useState("");

//   return (
//     <div className="flex gap-4 p-4">
//       {/* Champ de recherche */}
//       <input
//         type="text"
//         placeholder="Rechercher un film..."
//         value={title}
//         onChange={(e) => {
//           setTitle(e.target.value);
//           onFilter(e.target.value, rating);
//         }}
//         className="border p-2 rounded"
//       />

//       {/* Filtre par note */}
//       <select
//         value={rating}
//         onChange={(e) => {
//           setRating(e.target.value);
//           onFilter(title, e.target.value);
//         }}
//         className="border p-2 rounded"
//       >
//         <option value="">Tous</option>
//         <option value="8">8+ ⭐</option>
//         <option value="7">7+ ⭐</option>
//         <option value="6">6+ ⭐</option>
//         <option value="5">5+ ⭐</option>
//       </select>
//     </div>
//   );
// };

// export default Filter;
