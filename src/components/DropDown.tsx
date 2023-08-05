const DropDown = () => {
  const items: string[] = ["Add a User", "Create Audit List"];

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Main Menu
      </button>
      <ul className="dropdown-menu">
        {items.map((item, index) => (
          <li key={item} onClick={() => console.log(item, index)}>
            <a className="dropdown-item" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
