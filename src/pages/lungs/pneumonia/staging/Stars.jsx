import { Stars } from "@react-three/drei";

const StarsEffect = () => {
    return (
        <Stars
            radius={360}
            depth={10}
            count={10000}
            factor={10}
            saturation={0}
        />
    )
}

export default StarsEffect;