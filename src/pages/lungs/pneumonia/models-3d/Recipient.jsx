const Recipient  = () => {

    return (
        <mesh position={[0, -3, 0]} rotation-x={-Math.PI / 2} receiveShadow={true}>
            <circleGeometry args={[9, 32]} />
            <meshStandardMaterial roughness={0.8} metalness={1} />
        </mesh>
    )
}

export default Recipient;