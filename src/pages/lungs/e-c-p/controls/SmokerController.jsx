import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import useSmoker2Store from '/src/stores/e-c-p-stores/use-smoker2-store'

const SmokerController = ({ targetRef }) => {
    const keys = useRef({})
    const { setCurrentAnimation } = useSmoker2Store()

    useEffect(() => {
        const down = (e) => {
            keys.current[e.code] = true;

            if (['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
                setCurrentAnimation('Walking');
            }

            if (e.code === 'KeyR' && targetRef.current) {
                targetRef.current.position.set(1, -0.85, 3.5);
                targetRef.current.rotation.set(0, 0, 0);
                setCurrentAnimation('Idle');
            }
        };


        const up = (e) => {
            keys.current[e.code] = false
            if (e.code === 'KeyW') setCurrentAnimation('Idle')
            if (e.code === 'KeyA') setCurrentAnimation('Idle')
            if (e.code === 'KeyS') setCurrentAnimation('Idle')
            if (e.code === 'KeyD') setCurrentAnimation('Idle')
        }

        window.addEventListener('keydown', down)
        window.addEventListener('keyup', up)
        return () => {
            window.removeEventListener('keydown', down)
            window.removeEventListener('keyup', up)
        }
    }, [])

    useFrame(() => {
        if (!targetRef.current) return

        const speed = 0.05
        const direction = new THREE.Vector3()

        if (keys.current['KeyW']) direction.z -= 1
        if (keys.current['KeyS']) direction.z += 1
        if (keys.current['KeyA']) direction.x -= 1
        if (keys.current['KeyD']) direction.x += 1

        direction.normalize().multiplyScalar(speed)

        targetRef.current.position.x += direction.x
        targetRef.current.position.z += direction.z

        if (direction.length() > 0) {
            const angle = Math.atan2(direction.x, direction.z)
            targetRef.current.rotation.y = angle
        }
    })

    return null
}

export default SmokerController;
