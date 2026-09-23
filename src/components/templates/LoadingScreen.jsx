import React, { useState, useEffect } from 'react';
import NanoCanvas from './NanoCanvas.jsx';
import { WEB_LOGS } from '../../data/logsData.js';
import '../css/LoadingScreen.css';

export default function LoadingScreen({ children, onComplete, onLoaded }) {
  const shouldRunLoader = () => {
    try {
      const hasVisited = sessionStorage.getItem('anuix_visited');
      const navEntries = performance.getEntriesByType('navigation');
      const isReload = navEntries.length > 0
        ? navEntries[0].type === 'reload'
        : (performance.navigation && performance.navigation.type === 1);

      return !hasVisited || isReload;
    } catch {
      return false;
    }
  };

  const [needsLoader] = useState(shouldRunLoader);
  const [titleText, setTitleText] = useState('');
  const [subText, setSubText] = useState('');
  const [splashFade, setSplashFade] = useState(false);
  const [hudOpened, setHudOpened] = useState(false);
  const [clock, setClock] = useState('00:00:00');

  const [progress, setProgress] = useState(0);
  const [activePlugins, setActivePlugins] = useState(0);
  const [statusMsg, setStatusMsg] = useState('INITIALIZING BUFFER...');
  const [logs, setLogs] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const [hudFadeOut, setHudFadeOut] = useState(false);
  const [laserState, setLaserState] = useState('');
  const [pointState, setPointState] = useState('');
  const [rippleActive, setRippleActive] = useState(false);
  const [circumferenceExpand, setCircumferenceExpand] = useState(false);
  const [overlayFade, setOverlayFade] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(() => !needsLoader);

  useEffect(() => {
    if (!needsLoader) {
      if (typeof onComplete === 'function') onComplete();
      if (typeof onLoaded === 'function') onLoaded();
    }
  }, [needsLoader, onComplete, onLoaded]);

  useEffect(() => {
    if (!needsLoader) return;
    const timer = setInterval(() => {
      setClock(new Date().toTimeString().split(' ')[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, [needsLoader]);

  useEffect(() => {
    if (!needsLoader) return;

    const tTitle = "ANUIX HUB";
    const tSub = "[ WEB CORE ENVIRONMENT // V 2.3 ]";
    let i = 0;
    let j = 0;

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
  }, [needsLoader]);

  useEffect(() => {
    if (!needsLoader || !hudOpened || isCompleted) return;

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

        if (currentProgress < 30) setStatusMsg("LOADING MODULES FROM CORE...");
        else if (currentProgress < 70) setStatusMsg("SYNTHESIZING WEB ELEMENTS AND PLUGINS...");
        else if (currentProgress < 98) setStatusMsg("OPTIMIZING GRAY AND DOM DISPERSION...");
      }
    }, 45);

    return () => clearInterval(interval);
  }, [needsLoader, hudOpened, isCompleted]);

  useEffect(() => {
    if (!needsLoader || !isCompleted) return;

    const t1 = setTimeout(() => {
      setHudFadeOut(true);

      const t2 = setTimeout(() => {
        setLaserState('flash');

        const t3 = setTimeout(() => {
          setLaserState('vanish');
          setPointState('ignite');

          const t4 = setTimeout(() => {
            setPointState('kinetic-drop');

            const t5 = setTimeout(() => {
              setPointState('hidden');
              setRippleActive(true);

              const t6 = setTimeout(() => {
                setCircumferenceExpand(true);
                setOverlayFade(true);

                const t7 = setTimeout(() => {
                  setIsAnimationDone(true);
                  try {
                    sessionStorage.setItem('anuix_visited', 'true');
                  } catch {}
                  if (typeof onComplete === 'function') onComplete();
                  if (typeof onLoaded === 'function') onLoaded();
                }, 1000);

                return () => clearTimeout(t7);
              }, 260);

              return () => clearTimeout(t6);
            }, 850);

            return () => clearTimeout(t5);
          }, 320);

          return () => clearTimeout(t4);
        }, 300);

        return () => clearTimeout(t3);
      }, 1000);

      return () => clearTimeout(t2);
    }, 1300);

    return () => clearTimeout(t1);
  }, [needsLoader, isCompleted, onComplete, onLoaded]);

  if (!needsLoader || isAnimationDone) {
    return (
      <div className="anuix-app-root">
        <main className="anuix-main-site">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="anuix-app-root">
      <main className="anuix-main-site">
        {children}
      </main>

      <div className={`anuix-loader-overlay ${hudFadeOut ? 'dark-mode' : ''} ${overlayFade ? 'fade-out' : ''}`}>
        <div className="bg-grid"></div>

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

        <div className={`hud-grid ${hudOpened ? 'opened' : ''} ${hudFadeOut ? 'hud-hidden' : ''}`}>
          <div className="hud-box box-header">
            <div className="tab-handle">TAB:00 // SYS_TELEMETRY</div>
            <div className="tag">APP: <strong>ANUIX // RUNTIME</strong></div>
            <div className="tag">PLUGINS: <strong>{activePlugins}/8 ACTIVES</strong></div>
            <div className="tag">PULSE: <span>{clock}</span></div>
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
                  {isCompleted ? "SYSTEM STATE: AUTENTICATED" : "COMPILING ASSETS & PLUGINS"}
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

        <div id="laser-beam" className={laserState} />

        <div 
          id="laser-singularity" 
          className={pointState} 
          style={{ opacity: pointState === 'hidden' ? 0 : undefined }} 
        />

        <div id="ripple-container" className={rippleActive ? 'active' : ''}>
          <div className="ripple-wave wave-1" />
          <div className="ripple-wave wave-2" />
          <div className="ripple-wave wave-3" />
        </div>

        <div id="main-circumference" className={circumferenceExpand ? 'expand' : ''} />
      </div>
    </div>
  );
}