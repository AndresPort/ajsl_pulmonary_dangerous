import { Environment } from "@react-three/drei";

const Staging = () => {
    return (
        <Environment
            files={"staging/staging-e-c-p/hdris/docklands_02_2k.hdr"}
            ground={{
                height: 60,
                radius: 100,
                scale: 0,
            }}
            background
        />
    );
}

export default Staging;