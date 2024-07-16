function App() {
  return (
    <div>
      <h1>Welcome to your first challange in our team!</h1>
      <h1 className="text-lightBlue">Nugo</h1>
      <input
        type="text"
        placeholder="Enter your text here"
        className="p-2 bg-input-lightGrey border border-input-mediumGrey text-inputText"
      />
      <ul className="list-none">
        <li className="flex items-center mb-2">
          <span className="h-2 w-2 rounded-full bg-listSecondary mr-2"></span>
          List item 1
        </li>
      </ul>
    </div>
  );
}

export default App;
