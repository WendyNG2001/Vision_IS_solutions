import { Admin, Resource, ListGuesser } from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase";


const pbProvider = PocketBaseProvider('https://sturdy-yodel-g475g54w5953wg97-8090.app.github.dev/');

function App() {
  return (
    <Admin dataProvider={pbProvider.dataProvider} >
      <Resource name="Student" list={ListGuesser}  />
    </Admin>
  )
}

export default App