import "./App.css";
import Premium from "./components/premium";

function App() {

  return (
    <>
      <div class="[*]:flex [*]:justify-center [*]:items-center">

        <h1 class="bg-blue-600 p-5 border-2 rounded-2xl">Tailwind CSS</h1>
      </div>
      
      <Premium username="Advanced Analytics Platform" pay="Premium" />
      <br />
      <Premium username="Asim Advance Analytics Platform" pay="Free"/>
    </>
  );
}

export default App;
