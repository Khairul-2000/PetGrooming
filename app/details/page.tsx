import About from "../_componets/About";
import Transition from "../_componets/Transition";

const page = () => {
  return (
    <div>
      <Transition>
        <About />
      </Transition>
    </div>
  );
};

export default page;
