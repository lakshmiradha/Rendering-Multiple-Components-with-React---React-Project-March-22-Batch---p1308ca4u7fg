import './App.css';
import ProjectList from './ProjectList';

function App() {
  return (
    <div className="App">
     <ProjectList name="1) Amazon clone using Reactjs" description="In this project, you will be recreating some essential functionality of Amazon using React, Firebase and even integrate payment options using the Stripe API, making it even more real-world."/>
     <ProjectList name="2) React FizzBuzz" description="counting incrementally,any no. divisible by 3 with FIZZ and no. divisible by 5 with BUZZ"/>
     <ProjectList name="3) React Password Generator" description="Whenever we need to create a password for any website or any kind of Mobile application, it becomes hectic for us to think about a strong password at that moment. So using react, you can create a password generator where you can create your strong passwords and can copy them to your clipboard."/>
    </div>
  );
}

export default App;