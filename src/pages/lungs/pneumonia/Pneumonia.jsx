import "./Pneumonia.css";
import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import PneumoniaLungs from "./models-3d/PneumoniaLungs";
import FirstSectionReader from "./data/data_readers/first_section_reader";
import {pneumoniaFirstSection} from "./data/pneumonia-first-section";
import Recipient from "./models-3d/Recipient";


const Pneumonia = () => {

    return (
        <div className="pneumonia-container">
            {/* Content */}
            <FirstSectionReader data={pneumoniaFirstSection}/>
            <Canvas camera={{ position: [2, 0, 7] }} shadows={true}>
                <Lights />
                <Controls />
                <PneumoniaLungs scale={2} />
                <Recipient />
            </Canvas>
            
        </div>

    )
}

export default Pneumonia;