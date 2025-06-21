import {Stars} from "@react-three/drei";

const StagingPrevention = () => {
    return(
    <Stars
            radius={100} // Radius of the sphere in which stars are placed
            depth={50} // Depth of the star field, creating a layered effect
            count={500} // Total number of stars in the scene
            factor={4} // Star size factor, affecting how large they appear
            saturation={0} // Color saturation of the stars, 0 means grayscale
            fade // Enables fading effect for a more realistic sky
            speed={1} // Speed at which the stars move (if animated)
          />
    )
}
export default StagingPrevention;