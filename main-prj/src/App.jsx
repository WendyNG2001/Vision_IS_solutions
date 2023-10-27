import { Admin, Resource, ListGuesser} from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase";
import { Stu_comp } from "./Stu_comp";


const pbProvider = PocketBaseProvider('https://fantastic-adventure-4j7w7vvgw5rrf7x49-8090.app.github.dev/');

function App() {
  return (
    <Admin dataProvider={pbProvider.dataProvider} >
      <Resource name="Student" list={ListGuesser}/>
    </Admin>
  )
}

export default App