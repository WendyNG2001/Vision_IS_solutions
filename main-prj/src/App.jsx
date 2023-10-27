import { Admin, Resource, ListGuesser} from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase";



const pbProvider = PocketBaseProvider('https://fantastic-adventure-4j7w7vvgw5rrf7x49-8090.app.github.dev/'); //use it to access  collections in PocketBase 
//function returns the relevent code needed to create the collections as components
function App() {
  return (
    <Admin dataProvider={pbProvider.dataProvider} >
      <Resource name="Student" list={ListGuesser}/>
      <Resource name="Student" list={ListGuesser}/>
      <Resource name="Student" list={ListGuesser}/>
      <Resource name="Student" list={ListGuesser}/>
    </Admin>
  )
}

export default App