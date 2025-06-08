import { Text } from "@react-three/drei";
import "./Title.css";

const Title = ({ title }) => {
    return (
        <Text
            center
            position ={[0,4,-6]}
            transform
            distanceFactor={5}
            wrapperClass="title"
            fontSize={0.8}
        >
            {title}
        </Text>
    );
};


export default Title;