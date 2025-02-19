import { useState } from "react";

const AddMovieForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [note, setNote] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !posterURL || !note) return;

        onAdd({ title, description, posterURL, note: Number(note) });

        setTitle("");
        setDescription("");
        setPosterURL("");
        setNote("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 border rounded">
            <input className="p-2 border" type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className="p-2 border" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input className="p-2 border" type="text" placeholder="Image URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
            <input className="p-2 border" type="number" placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Ajouter</button>
        </form>
    );
};

export default AddMovieForm;
