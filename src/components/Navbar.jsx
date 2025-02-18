import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">SilverScreen</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/add-movie" className="mx-2">Add Movie</Link>
      </div>
    </nav>
  );
}
export default Navbar;