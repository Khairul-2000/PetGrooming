import About from "./_componets/About";
import Header from "./_componets/Header";
import Services from "./_componets/Services";
import Story from "./_componets/Story";
import Transition from "./_componets/Transition";

export default function Home() {
  return (
    <div>
      <Transition>
        <Header />
        <About />
        <Story />
        <Services />
      </Transition>
    </div>
  );
}
