import useTitleStore from "/src/stores/pneumonia-stores/use-title-store";
import Title from "./Title";

const DynamicTitle = () => {
  const title = useTitleStore(state => state.title);
  
  return <Title title={title} position={[-3.6, 3, 0]} />;
};

export default DynamicTitle; 