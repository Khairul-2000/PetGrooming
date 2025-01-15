import About from "./_componets/About";
import Header from "./_componets/Header";
import Section from "./_componets/Section";
import Services from "./_componets/Services";
import Story from "./_componets/Story";
import Transition from "./_componets/Transition";

export default function Home() {
  return (
    <div>
      <Transition>
        <Header />
        <Section>
          <About />
        </Section>
        <Story />
        <Services />
      </Transition>
    </div>
  );
}
