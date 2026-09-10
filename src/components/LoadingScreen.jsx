import React, { useState, useEffect, useRef } from 'react';
import NanoCanvas from './NanoCanvas.jsx'
import './css/LoadingScreen.css';

const WEB_LOGS = [
  { pill: "pill-plugin", type: "VITE", isPlugin: false, msg: "Iniciando compilador de dependencias..." },
  { pill: "pill-ok",     type: "PLUG", isPlugin: true,  msg: "Plugin 1/8: @anuix/core-runtime activo." },
  { pill: "pill-ui",     type: "UI  ", isPlugin: false, msg: "Montando layout modular Bento Grid..." },
  { pill: "pill-ok",     type: "PLUG", isPlugin: true,  msg: "Plugin 2/8: @anuix/webgl-particle-engine activo." },
  { pill: "pill-plugin", type: "WASM", isPlugin: true,  msg: "Plugin 3/8: @anuix/wasm-physics-v3 compilado." },
  { pill: "pill-ok",     type: "PLUG", isPlugin: true,  msg: "Plugin 4/8: @anuix/motion-physics-v2 activo." },
  { pill: "pill-ui",     type: "CSS ", isPlugin: false, msg: "Compilando tokens monocromáticos PBR..." },
  { pill: "pill-ok",     type: "PLUG", isPlugin: true,  msg: "Plugin 5/8: @anuix/pbr-shaders vinculado." },
  { pill: "pill-ok",     type: "PLUG", isPlugin: true,  msg: "Plugin 6/8: @anuix/service-worker-cache activo." },
  { pill: "pill-ok",     type: "PLUG", isPlugin: true,  msg: "Plugin 7/8: @anuix/tactile-feedback-core activo." },
  { pill: "pill-ok",     type: "PLUG", isPlugin: true,  msg: "Plugin 8/8: @anuix/auth-session-gate verificado." },
  { pill: "pill-ok",     type: "READY",isPlugin: false, msg: "Todos los módulos inicializados al 100%." },
];

export default function LoadingScreen({ children, onComplete, onLoaded }) {
  const [titleText, setTitleText] = useState('');
  const [subText, setSubText] = useState('');
  const [splashFade, setSplashFade] = useState(false);
  const [hudOpened, setHudOpened] = useState(false);
  const [clock, setClock] = useState('00:00:00');

  const [progress, setProgress] = useState(0);
  const [activePlugins, setActivePlugins] = useState(0);
  const [statusMsg, setStatusMsg] = useState('INICIALIZANDO BÚFER...');
  const [logs, setLogs] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Estados de animación cinemática
  const [shutterClosed, setShutterClosed] = useState(false);
  const [laserState, setLaserState] = useState('');
  const [pointState, setPointState] = useState('');
  const [rippleActive, setRippleActive] = useState(false);
  const [circumferenceExpand, setCircumferenceExpand] = useState(false);
  const [destPageActive, setDestPageActive] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  // 1. Reloj de pulso
  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date().toTimeString().split(' ')[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Mecanografía inicial
  useEffect(() => {
    const tTitle = "ANUIX HUB";
    const tSub = "[ WEB CORE ENVIRONMENT // V 4.2 ]";
    let i = 0, j = 0;

    const intervalTitle = setInterval(() => {
      if (i < tTitle.length) {
        setTitleText(tTitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(intervalTitle);
        const intervalSub = setInterval(() => {
          if (j < tSub.length) {
            setSubText(tSub.slice(0, j + 1));
            j++;
          } else {
            clearInterval(intervalSub);
            setTimeout(() => {
              setSplashFade(true);
              setTimeout(() => setHudOpened(true), 300);
            }, 700);
          }
        }, 28);
      }
    }, 75);

    return () => clearInterval(intervalTitle);
  }, []);

  // 3. Simulación de carga asíncrona
  useEffect(() => {
    if (!hudOpened || isCompleted) return;

    let currentProgress = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
      currentProgress += Math.random() * 0.85 + 0.35;

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setLogs(WEB_LOGS);
        setActivePlugins(8);
        setProgress(100);
        setIsCompleted(true);
      } else {
        setProgress(Math.floor(currentProgress));

        const targetLogIdx = Math.floor((currentProgress / 100) * WEB_LOGS.length);
        if (targetLogIdx > logIndex && logIndex < WEB_LOGS.length) {
          const newItems = WEB_LOGS.slice(logIndex, targetLogIdx);
          setLogs(prev => [...prev, ...newItems]);
          const pluginsAdded = newItems.filter(item => item.isPlugin).length;
          if (pluginsAdded > 0) {
            setActivePlugins(prev => Math.min(8, prev + pluginsAdded));
          }
          logIndex = targetLogIdx;
        }

        if (currentProgress < 30) setStatusMsg("CARGANDO MÓDULOS DEL NÚCLEO...");
        else if (currentProgress < 70) setStatusMsg("SINTETIZANDO ELEMENTOS Y PLUGINS WEB...");
        else if (currentProgress < 98) setStatusMsg("OPTIMIZANDO DISPERSIÓN DE GRISES Y DOM...");
      }
    }, 45);

    return () => clearInterval(interval);
  }, [hudOpened, isCompleted]);

  // 4. Secuencia cinemática final
  useEffect(() => {
    if (!isCompleted) return;

    const t1 = setTimeout(() => {
      setShutterClosed(true);

      const t2 = setTimeout(() => {
        setLaserState('flash');

        const t3 = setTimeout(() => {
          setLaserState('vanish');
          setPointState('ignite');

          const t4 = setTimeout(() => {
            setPointState('kinetic-drop');

            // Impacto en el suelo
            const t5 = setTimeout(() => {
              setPointState('hidden');
              setRippleActive(true);

              // Nacimiento de la circunferencia y expansión circular
              const t6 = setTimeout(() => {
                setCircumferenceExpand(true);
                setDestPageActive(true);

                // Fin total: desmontar loader y pasar a la web nativa
                const t7 = setTimeout(() => {
                  setIsAnimationDone(true);
                  if (typeof onComplete === 'function') onComplete();
                  if (typeof onLoaded === 'function') onLoaded();
                }, 1050);

                return () => clearTimeout(t7);
              }, 280);

              return () => clearTimeout(t6);
            }, 850);

            return () => clearTimeout(t4);
          }, 260);

          return () => clearTimeout(t3);
        }, 280);

        return () => clearTimeout(t2);
      }, 450);

      return () => clearTimeout(t1);
    }, 2400);

    return () => clearTimeout(t1);
  }, [isCompleted, onComplete, onLoaded]);

  // Al finalizar la animación, desmontamos el loader y dejamos la web nativa navegable
  if (isAnimationDone) {
    return (
      <main className="anuix-main-site">
        {children}
      </main>
    );
  }

  return (
    <div className="anuix-loader-container">
      <div className="bg-grid"></div>

      {/* 1. INTRO SPLASH */}
      <div id="splash-intro" className={splashFade ? 'fade-out' : ''}>
        <div className="typewriter-title">
          <span>{titleText}</span>
          {!subText && <span className="type-cursor" />}
        </div>
        <div className="typewriter-sub">
          <span>{subText}</span>
          {subText && <span className="type-cursor sub-cursor" />}
        </div>
      </div>

      {/* 2. HUD GRID */}
      <div className={`hud-grid ${hudOpened ? 'opened' : ''}`}>
        <div className="hud-box box-header">
          <div className="tab-handle">TAB:00 // SYS_TELEMETRY</div>
          <div className="tag">APP: <strong>ANUIX // RUNTIME</strong></div>
          <div className="tag">PLUGINS: <strong>{activePlugins}/8 ACTIVOS</strong></div>
          <div className="tag">PULSO: <span>{clock}</span></div>
        </div>

        <div className="hud-box box-canvas">
          <div className="tab-handle">TAB:01 // NANO_SYNTHESIS</div>
          <NanoCanvas />
        </div>

        <div className="hud-box box-shell">
          <div className="tab-handle">TAB:02 // DEV_SHELL</div>
          <div className="shell-inner">
            <div className="shell-bar">
              <span>WEB SYSTEM LOGS</span>
              <span>READY STATE: PREPARING</span>
            </div>
            <div className="shell-content">
              {logs.map((log, idx) => (
                <div key={idx} className="terminal-row">
                  <span className={`status-pill ${log.pill}`}>{log.type}</span>
                  <span>{log.msg}</span>
                </div>
              ))}
              <span className="shell-cursor" />
            </div>
          </div>
        </div>

        <div className="hud-box box-bottom">
          <div className="tab-handle">TAB:03 // LOADER_CORE</div>
          <div className="progress-meta">
            <div>
              <div style={{ fontSize: 10, color: '#888', marginBottom: 4 }}>
                {isCompleted ? "ESTADO DE SISTEMA: AUTENTICADO" : "COMPILANDO ASSETS & PLUGINS"}
              </div>
              <div className="status-text">
                {isCompleted ? (
                  <span className="welcome-pill">[ ACCESS GRANTED // WELCOME TO ANUIX HUB ]</span>
                ) : (
                  statusMsg
                )}
              </div>
            </div>
            <div className="status-percent">
              <span>{progress < 10 ? `0${progress}` : progress}</span>%
            </div>
          </div>
          <div className="progress-rail">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* COMPUERTAS BLINDADAS */}
      <div id="shutter-gate" className={shutterClosed ? 'closed' : ''}>
        <div className="shutter-panel shutter-top" />
        <div className="shutter-panel shutter-bottom" />
      </div>

      {/* LÁSER Y BOLA KINÉTICA */}
      <div id="laser-beam" className={laserState} />
      <div 
        id="laser-singularity" 
        className={pointState} 
        style={{ opacity: pointState === 'hidden' ? 0 : undefined }} 
      />

      {/* ONDAS EN EL IMPACTO INFERIOR */}
      <div id="ripple-container" className={rippleActive ? 'active' : ''}>
        <div className="ripple-wave wave-1" />
        <div className="ripple-wave wave-2" />
        <div className="ripple-wave wave-3" />
      </div>

      {/* CIRCUNFERENCIA EXPANSIVA BLANCA */}
      <div id="main-circumference" className={circumferenceExpand ? 'expand' : ''} />

      {/* REVELACIÓN CIRCULAR DEL HERO */}
      <div id="dest-reveal-circle" className={destPageActive ? 'active' : ''}>
        {children}
      </div>
    </div>
  );
}