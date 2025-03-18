export default function Main() {
  return (
    <main className="main">
      <form className="main-form">
        <input
          className="main-form-input"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button className="main-form-button">+ Add ingredient</button>
      </form>
    </main>
  )
}
