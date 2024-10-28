export default function Task({ text }) {
  return (
    <li>
      <input type="checkbox" />
      {text}
      <button className="btn">Modifica</button>
      <button className="btn">Elimina</button>
    </li>
  );
}
