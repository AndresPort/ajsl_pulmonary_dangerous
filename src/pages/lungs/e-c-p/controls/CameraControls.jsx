import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function CameraControls() {
  const { camera } = useThree()
  const moveForward = useRef(false)
  const moveBackward = useRef(false)
  const moveLeft = useRef(false)
  const moveRight = useRef(false)
  const isMouseDown = useRef(false)
  const prevMousePosition = useRef({ x: 0, y: 0 })
  const velocity = useRef(new THREE.Vector3())
  const direction = useRef(new THREE.Vector3())
  const moveSpeed = 5
  const lookSpeed = 0.002
  
  
  const initialPosition = useRef(new THREE.Vector3())
  const initialRotation = useRef(new THREE.Euler())
  
  
  useEffect(() => {
    initialPosition.current.copy(camera.position)
    initialRotation.current.copy(camera.rotation)
  }, [camera])

  
  useEffect(() => {
    const onKeyDown = (e) => {
      switch (e.code) {
        case 'KeyW': moveForward.current = true; break
        case 'KeyS': moveBackward.current = true; break
        case 'KeyA': moveLeft.current = true; break
        case 'KeyD': moveRight.current = true; break
        case 'KeyC': 
          
          camera.position.copy(initialPosition.current)
          camera.rotation.copy(initialRotation.current)
          break
      }
    }

    const onKeyUp = (e) => {
      switch (e.code) {
        case 'KeyW': moveForward.current = false; break
        case 'KeyS': moveBackward.current = false; break
        case 'KeyA': moveLeft.current = false; break
        case 'KeyD': moveRight.current = false; break
      }
    }

    const onMouseDown = (e) => {
      if (e.button === 0) { 
        isMouseDown.current = true
        prevMousePosition.current = { x: e.clientX, y: e.clientY }
      }
    }

    const onMouseUp = (e) => {
      if (e.button === 0) {
        isMouseDown.current = false
      }
    }

    const onMouseMove = (e) => {
      if (isMouseDown.current) {
        const deltaX = e.clientX - prevMousePosition.current.x
        const deltaY = e.clientY - prevMousePosition.current.y
        
        
        camera.rotation.y -= deltaX * lookSpeed
        
        
        camera.rotation.x -= deltaY * lookSpeed
        camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x))
        
        prevMousePosition.current = { x: e.clientX, y: e.clientY }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [camera])

  useFrame((_, delta) => {
    
    direction.current.set(0, 0, 0)
    
    
    if (moveForward.current) direction.current.z -= 1
    if (moveBackward.current) direction.current.z += 1
    if (moveLeft.current) direction.current.x -= 1
    if (moveRight.current) direction.current.x += 1
    
    
    if (direction.current.length() > 0) {
      direction.current.normalize()
    }
    
    
    const moveX = direction.current.x * moveSpeed * delta
    const moveZ = direction.current.z * moveSpeed * delta
    

    camera.translateX(moveX)
    camera.translateZ(moveZ)
  })

  return null
}