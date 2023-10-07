import { DotSpinner } from "@uiball/loaders";

const LoaderComponent = () => {
  return <div className="loader"><DotSpinner size={80} speed={0.9} color="white" />; </div> 
};
export default LoaderComponent;
