import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import useManStore from "/src/stores/pneumonia-stores/use-man-store";
import useTitleStore from "/src/stores/pneumonia-stores/use-title-store";

// Estilos para el overlay
const overlayStyle = (fade) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'black',
    pointerEvents: fade > 0 ? 'all' : 'none',
    opacity: fade,
    transition: 'opacity 0.4s',
    zIndex: 1000,
});


const ButtonMan = () => {
    const setCurrentAnimation = useManStore(state => state.setCurrentAnimation);
    const setNeedlePosition = useManStore(state => state.setNeedlePosition);
    const setChairVisible = useManStore(state => state.setChairVisible);
    const setPauseSitting = useManStore(state => state.setPauseSitting);
    const setNeedleVisible = useManStore(state => state.setNeedleVisible);
    const setPauseRunning = useManStore(state => state.setPauseRunning);

    // Store del título
    const setTitle = useTitleStore(state => state.setTitle);

    // Interpolación manual de la posición de la jeringa
    const animateNeedle = async (from, to, duration = 1500) => {
        return new Promise(resolve => {
            const start = Date.now();
            const animate = () => {
                const now = Date.now();
                const elapsed = now - start;
                const t = Math.min(elapsed / duration, 1);
                const lerp = (a, b) => a + (b - a) * t;
                const newPos = [
                    lerp(from[0], to[0]),
                    lerp(from[1], to[1]),
                    lerp(from[2], to[2])
                ];
                setNeedlePosition(newPos);
                if (t < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            animate();
        });
    };

    const handleSequence = async () => {
        // 1. Espera 1s
        await new Promise(res => setTimeout(res, 1000));
        // 2. Pausar animación Sitting
        setPauseSitting(true);
        // 3. Animar jeringa
        await animateNeedle([1.5, -0.5, 0.1], [0.99, -0.5, 0.1], 1500);
        // 4. Espera 0.5s
        await new Promise(res => setTimeout(res, 500));
        // 5. Cambia a Running y oculta la silla
        setPauseSitting(false);
        setNeedleVisible(false);
        setCurrentAnimation("Running");
        setChairVisible(false);
    };

    const [visible, setVisible] = useState(true);
    const [fade, setFade] = useState(0); // 0 = sin overlay, 1 = overlay negro

    // Fade local para transición
    const fadeOut = () => new Promise(res => {
        setFade(1);
        setTimeout(res, 400);
    });
    const fadeIn = () => new Promise(res => {
        setFade(0);
        setTimeout(res, 400);
    });

    const handleSequenceWithFade = async () => {
        setVisible(false);
        // 1. Ejecuta la secuencia hasta antes de cambiar a Running
        await new Promise(res => setTimeout(res, 1000));
        setPauseSitting(true);
        // Mueve la aguja hacia adelante
        await animateNeedle([1.5, -0.5, 0.1], [0.99, -0.5, 0.1], 1500);
        // Espera 1 segundo antes de devolver la aguja
        await new Promise(res => setTimeout(res, 1000));
        // Devuelve la aguja lentamente a su posición inicial
        await animateNeedle([0.99, -0.5, 0.1], [1.5, -0.5, 0.1], 1500);
        // Espera 0.5s
        await new Promise(res => setTimeout(res, 500));
        setPauseSitting(false);
        // 2. Fade out justo antes de cambiar a Running
        await fadeOut();
        // 3. Cambia el título a "Vida Sana"
        setTitle("Vida Sana");
        // 4. Cambia a Running y oculta silla/jeringa
        setNeedleVisible(false);
        setCurrentAnimation("Running");
        setChairVisible(false);
        // 5. Fade in
        await fadeIn();
    };


    const currentAnimation = useManStore(state => state.currentAnimation);
    // Estado para el texto de reinicio
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (currentAnimation === "Running" && (e.key === "r" || e.key === "R")) {
                // Reinicia todos los estados relevantes
                setCurrentAnimation("Sitting");
                setChairVisible(true);
                setNeedleVisible(true);
                setNeedlePosition([1.5, -0.5, 0.1]);
                setVisible(true);
                setPauseSitting(false); // Asegura que la de sentado esté activa
                // Reinicia el título a "Vacunación"
                setTitle("Vacunación");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentAnimation, setCurrentAnimation, setChairVisible, setNeedleVisible, setNeedlePosition, setTitle]);

    return (
        <>
        <Html fullscreen>
            {/* Overlay de fade local */}
            <div style={overlayStyle(fade)} />
            {visible && (
                <button
                    onClick={handleSequenceWithFade}
                    style={{
                        position: 'absolute',
                        top: '80%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1001
                    }}
                >
                    Prevención
                </button>
            )}
            {currentAnimation === "Running" && (
                <div
                    className="blinking text-reset"
                    style={{
                        position: 'absolute',
                        top: '90%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1002,
                        fontWeight: 'bold',
                        fontSize: '1.3rem',
                        color: '#fff',
                        textShadow: '0 0 8px #000',
                        pointerEvents: 'none',
                    }}
                >
                    Presiona R para reiniciar
                </div>
            )}
        </Html>
        </>
        
    )
}

export default ButtonMan;