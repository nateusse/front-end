import Lista from "./Lista";
import Profile from "./Profile";
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default function App(){
  return(
    <>
    <h1>Welcome to my app</h1>
    <MyButton />
    <Profile/>
    <Lista></Lista>
    </>
  )
}