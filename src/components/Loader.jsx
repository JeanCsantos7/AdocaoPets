
import { TailSpin} from "react-loader-spinner";

export default function Loader() {
  return (
      
    
        <TailSpin
          visible={true}
          height="45"
          width="80"
          color="#f3f3f3"
          ariaLabel="tail-spin-loading"
          radius="1"
        />
  );
}
