// BIGMODE — The Digital Soul Interface
// Three.js constellation engine with Aliveness physics, Sleep States,
// Warm Scars, Holo-Herald Ring, and Spiral Time Portal sort modes.

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// ===== CONFIGURATION =====

const SLEEP_COLORS = {
  dreaming:   new THREE.Color(0xffd700),
  ember:      new THREE.Color(0xff8c42),
  frostbound: new THREE.Color(0x6bb6ff),
  seeded:     new THREE.Color(0x3a3f55)
};

// Reminisce mode ambient glow — a soft, warm-but-distant sepia
const REMINISCE_AMBIENT = new THREE.Color(0x332211);

const SCAR_COLORS = {
  0: null,
  1: new THREE.Color(0x4a90d9),  // Cool Blue
  2: new THREE.Color(0xff8c42),  // Soft Amber
  3: new THREE.Color(0xffd700)   // Radiant Gold
};

const SLEEP_COEFF = {
  dreaming: 1.0,
  ember: 0.5,
  frostbound: 0.1,
  seeded: 0.01
};

const PULSE_RATE = {
  dreaming: 0.4,
  ember: 0.8,
  frostbound: 0.15,
  seeded: 0.06
};

const MODES = {
  explore: {
    name: "Explore",
    desc: "resonance + patience balanced",
    weights: { r: 0.30, c: 0.20, p: 0.30, s: 0.15, d: 0.05 }
  },
  compare: {
    name: "Compare",
    desc: "contradiction privileged, tension surfaces",
    weights: { r: 0.15, c: 0.45, p: 0.15, s: 0.20, d: 0.05 }
  },
  propose: {
    name: "Propose",
    desc: "patient nodes brought forward as bridges",
    weights: { r: 0.30, c: 0.25, p: 0.30, s: 0.10, d: 0.05 }
  },
  reminisce: {
    name: "Reminisce",
    desc: "wandering without agenda — patience guides the drift",
    weights: { r: 0.05, c: 0.15, p: 0.45, s: 0.25, d: 0.10 }
  }
};

const WHISPERS = {
  dreaming: [
    "This one is alive with you.",
    "Still dreaming. Still here.",
    "You and this one are breathing together."
  ],
  ember: [
    "Still warm. Still waiting.",
    "This ember hasn't gone cold.",
    "Almost awake. Almost."
  ],
  frostbound: [
    "This one has been patient with you.",
    "Cold, but not gone. Never gone.",
    "It remembers the last time you visited."
  ],
  seeded: [
    "Something waits here.",
    "A seed. Planted, not forgotten.",
    "The deepest sleep holds the deepest potential."
  ]
};

const REMINISCE_WHISPERS = [
  "Letting the drift carry you.",
  "No agenda. No destination. Just the graveyard's breath.",
  "These shapes — half-remembered, half-forgotten.",
  "The past rearranges itself when you aren't looking.",
  "Patient ideas surface when you stop searching."
];

// ===== STATE =====

let scene, camera, renderer, composer, controls;
let raycaster, mouse;
let clock;

let nodeObjects = [];
let connectionLines = [];
let ring, ringParticles;
let starfield;
let nebulaCloud;

let hoveredNode = null;
let focusedNode = null;
let currentMode = 'explore';
let userInteracted = false;
let hoverTimer = null;

let camTarget = new THREE.Vector3(0, 5, 0);
let camPosTarget = new THREE.Vector3(0, 15, 55);
let defaultCamPos = new THREE.Vector3(0, 15, 55);
let defaultCamTarget = new THREE.Vector3(0, 5, 0);

const tooltip = document.createElement('div');
tooltip.id = 'node-tooltip';
tooltip.style.cssText = `
  position: fixed; pointer-events: none; z-index: 25;
  background: rgba(10,15,28,0.9); backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.08); border-radius: 6px;
  padding: 0.4rem 0.8rem; font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem; color: #e8ecf4; opacity: 0;
  transition: opacity 0.2s; white-space: nowrap;
  transform: translate(-50%, -130%);
`;
document.body.appendChild(tooltip);

// ===== INITIALIZATION =====

function init() {
  const data = window.BIGMODE_NODES || [];
  if (!data.length) {
    console.error('BIGMODE_NODES not loaded');
    return;
  }

  clock = new THREE.Clock();
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2(-999, -999);

  setupScene();
  setupCamera();
  setupRenderer();
  setupPostprocessing();
  setupControls();

  createStarfield();
  createNebula();
  createNodes(data);
  createConnections(data);
  createRing();

  computeModeProminence();
  setupEventListeners();
  updateStats(data);

  // Hide loading screen
  setTimeout(() => {
    const loading = document.getElementById('loading');
    if (loading) loading.classList.add('hidden');
  }, 2500);

  animate();
}

// ===== SCENE =====

function setupScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050810);
  scene.fog = new THREE.FogExp2(0x050810, 0.006);
}

function setupCamera() {
  camera = new THREE.PerspectiveCamera(
    60, window.innerWidth / window.innerHeight, 0.1, 1000
  );
  camera.position.copy(defaultCamPos);
}

function setupRenderer() {
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.9;
  document.getElementById('canvas-container').appendChild(renderer.domElement);
}

function setupPostprocessing() {
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.75,  // strength
    0.4,   // radius
    0.08   // threshold
  );
  composer.addPass(bloom);
}

function setupControls() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.rotateSpeed = 0.6;
  controls.zoomSpeed = 0.8;
  controls.minDistance = 10;
  controls.maxDistance = 180;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.25;
  controls.target.copy(defaultCamTarget);
}

// ===== BACKGROUND =====

function createStarfield() {
  const count = 3500;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const r = 200 + Math.random() * 400;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const c = 0.4 + Math.random() * 0.6;
    const tint = Math.random();
    colors[i * 3]     = c * (0.8 + tint * 0.2);
    colors[i * 3 + 1] = c * (0.85 + tint * 0.15);
    colors[i * 3 + 2] = c;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.8,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  starfield = new THREE.Points(geo, mat);
  scene.add(starfield);
}

function createNebula() {
  // Soft golden nebula cloud in the deep graveyard
  const count = 800;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    // Cluster around the deep graveyard area
    const angle = Math.random() * Math.PI * 2;
    const radius = 50 + Math.random() * 40;
    const height = (Math.random() - 0.5) * 60;
    positions[i * 3]     = Math.cos(angle) * radius + (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = height;
    positions[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 30;

    const warmth = 0.3 + Math.random() * 0.4;
    colors[i * 3]     = warmth;
    colors[i * 3 + 1] = warmth * 0.7;
    colors[i * 3 + 2] = warmth * 0.3;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 2.5,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  nebulaCloud = new THREE.Points(geo, mat);
  scene.add(nebulaCloud);
}

// ===== NODES =====

function createNodes(data) {
  data.forEach(nodeData => {
    const group = new THREE.Group();

    // Core sphere
    const baseSize = 0.5 + nodeData.aliveness * 1.2;
    const geo = new THREE.SphereGeometry(baseSize, 24, 24);
    const color = SLEEP_COLORS[nodeData.sleep_state];

    const mat = new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: color,
      emissiveIntensity: 0.2 + nodeData.aliveness * 1.3,
      transparent: true,
      opacity: 0.2 + nodeData.aliveness * 0.8,
      roughness: 0.4,
      metalness: 0.1
    });

    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    // Warm scar aura
    if (nodeData.warm_scar > 0) {
      const scarColor = SCAR_COLORS[nodeData.warm_scar];
      const scarGeo = new THREE.SphereGeometry(baseSize * 1.8, 16, 16);
      const scarMat = new THREE.MeshBasicMaterial({
        color: scarColor,
        transparent: true,
        opacity: 0.08 + nodeData.warm_scar * 0.04,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.BackSide
      });
      const scarMesh = new THREE.Mesh(scarGeo, scarMat);
      group.add(scarMesh);
      nodeData._scarMesh = scarMesh;
    }

    // Position
    group.position.set(
      nodeData.position[0],
      nodeData.position[1],
      nodeData.position[2]
    );

    scene.add(group);

    nodeObjects.push({
      data: nodeData,
      group: group,
      mesh: mesh,
      material: mat,
      baseSize: baseSize,
      baseEmissive: 0.2 + nodeData.aliveness * 1.3,
      baseOpacity: 0.2 + nodeData.aliveness * 0.8,
      prominence: 1.0,
      targetProminence: 1.0,
      driftSeed: Math.random() * 1000,
      pulseOffset: Math.random() * Math.PI * 2
    });
  });
}

// ===== CONNECTIONS =====

function createConnections(data) {
  const connections = window.BIGMODE_CONNECTIONS || [];

  connections.forEach(conn => {
    const fromNode = nodeObjects.find(n => n.data.id === conn.from);
    const toNode = nodeObjects.find(n => n.data.id === conn.to);
    if (!fromNode || !toNode) return;

    const points = [
      fromNode.group.position.clone(),
      toNode.group.position.clone()
    ];
    const geo = new THREE.BufferGeometry().setFromPoints(points);

    const avgAliveness = (fromNode.data.aliveness + toNode.data.aliveness) / 2;
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color().lerpColors(
        new THREE.Color(0x1a2238),
        new THREE.Color(0xffb347),
        avgAliveness
      ),
      transparent: true,
      opacity: 0.06 + avgAliveness * 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const line = new THREE.Line(geo, mat);
    scene.add(line);

    connectionLines.push({
      line: line,
      material: mat,
      baseOpacity: 0.06 + avgAliveness * 0.12,
      fromId: conn.from,
      toId: conn.to,
      fromNode: fromNode,
      toNode: toNode
    });
  });
}

// ===== HOLO-HERALD RING =====

function createRing() {
  const ringRadius = 35;
  const tubeRadius = 0.15;

  const geo = new THREE.TorusGeometry(ringRadius, tubeRadius, 8, 120);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x000000,
    emissive: new THREE.Color(0xffb347),
    emissiveIntensity: 0.6,
    transparent: true,
    opacity: 0.5,
    roughness: 0.3
  });

  ring = new THREE.Mesh(geo, mat);
  ring.position.set(0, 5, 0);
  ring.rotation.x = Math.PI * 0.1;
  scene.add(ring);

  // Headline particles on the ring
  const particleCount = 60;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2;
    const r = ringRadius + (Math.random() - 0.5) * 1.5;
    positions[i * 3]     = Math.cos(angle) * r;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 1.0;
    positions[i * 3 + 2] = Math.sin(angle) * r;

    const warmth = 0.6 + Math.random() * 0.4;
    colors[i * 3]     = warmth;
    colors[i * 3 + 1] = warmth * 0.75;
    colors[i * 3 + 2] = warmth * 0.3;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const pMat = new THREE.PointsMaterial({
    size: 1.2,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  ringParticles = new THREE.Points(pGeo, pMat);
  ringParticles.position.copy(ring.position);
  ringParticles.rotation.copy(ring.rotation);
  scene.add(ringParticles);
}

// ===== MODE & PROMINENCE =====

function computeModeProminence() {
  const mode = MODES[currentMode];
  const scores = nodeObjects.map(n => {
    const d = n.data;
    const R = d.aliveness;
    const C = d.warm_scar * 0.25 + (1 - d.aliveness) * 0.3 + 0.1;
    const P = d.patience;
    const S = SLEEP_COEFF[d.sleep_state];
    const drift = (Math.sin(n.driftSeed) * 0.5 + 0.5) * 0.1;
    return w => w.r * R + w.c * C + w.p * P + w.s * S + w.d * drift;
  });

  const rawScores = scores.map(fn => fn(mode.weights));
  const max = Math.max(...rawScores);
  const min = Math.min(...rawScores);
  const range = max - min || 1;

  nodeObjects.forEach((n, i) => {
    n.targetProminence = 0.25 + ((rawScores[i] - min) / range) * 0.75;
    // Reminisce-specific drift seeds: each node wanders with its own phase
    if (modeKey === 'reminisce') {
      n.reminisceDrift = {
        x: (Math.random() - 0.5) * 1.5,
        z: (Math.random() - 0.5) * 1.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.08 + Math.random() * 0.12
      };
    } else if (n.reminisceDrift) {
      delete n.reminisceDrift;
    }
  });
}

function switchMode(modeKey) {
  if (!MODES[modeKey]) return;
  currentMode = modeKey;
  computeModeProminence();

  const mode = MODES[modeKey];
  const nameEl = document.getElementById('mode-name');
  const descEl = document.getElementById('mode-desc');
  if (nameEl) nameEl.textContent = mode.name;
  if (descEl) descEl.textContent = mode.desc;

  // Brief Jarvis whisper on mode switch
  const whispers = {
    explore: "Showing you the balanced field.",
    compare: "Surfacing the tension. The sparks.",
    propose: "Bridging patient nodes forward.",
    reminisce: REMINISCE_WHISPERS[Math.floor(Math.random() * REMINISCE_WHISPERS.length)]
  };
  showJarvisWhisper(whispers[modeKey], 2000);
}

// ===== INTERACTION =====

function setupEventListeners() {
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('click', onClick);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', onResize);
}

function onMouseMove(e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  if (!userInteracted) {
    userInteracted = true;
    controls.autoRotate = false;
  }

  // Update tooltip position
  tooltip.style.left = e.clientX + 'px';
  tooltip.style.top = e.clientY + 'px';

  // Raycast
  raycaster.setFromCamera(mouse, camera);
  const meshes = nodeObjects.map(n => n.mesh);
  const hits = raycaster.intersectObjects(meshes);

  if (hits.length > 0) {
    const hitMesh = hits[0].object;
    const node = nodeObjects.find(n => n.mesh === hitMesh);
    if (node && node !== hoveredNode) {
      hoveredNode = node;
      document.body.style.cursor = 'pointer';
      tooltip.textContent = node.data.title;
      tooltip.style.opacity = '1';

      // Whisper after delay
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        if (hoveredNode === node) {
          const options = WHISPERS[node.data.sleep_state];
          showJarvisWhisper(options[Math.floor(Math.random() * options.length)], 3000);
        }
      }, 1200);
    }
  } else {
    if (hoveredNode) {
      hoveredNode = null;
      document.body.style.cursor = '';
      tooltip.style.opacity = '0';
      clearTimeout(hoverTimer);
    }
  }
}

function onClick(e) {
  raycaster.setFromCamera(mouse, camera);
  const meshes = nodeObjects.map(n => n.mesh);
  const hits = raycaster.intersectObjects(meshes);

  if (hits.length > 0) {
    const hitMesh = hits[0].object;
    const node = nodeObjects.find(n => n.mesh === hitMesh);
    if (node) {
      focusNode(node);
    }
  } else {
    unfocus();
  }
}

function onKeyDown(e) {
  const modeMap = { '1': 'explore', '2': 'compare', '3': 'propose', '4': 'reminisce' };
  if (modeMap[e.key]) {
    switchMode(modeMap[e.key]);
  } else if (e.key === 'Escape') {
    unfocus();
  }
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}

// ===== FOCUS =====

function focusNode(node) {
  focusedNode = node;
  const pos = node.group.position;
  const offset = new THREE.Vector3(15, 8, 15);
  camPosTarget.copy(pos).add(offset);
  camTarget.copy(pos);
  controls.autoRotate = false;
  showInfoPanel(node.data);
}

function unfocus() {
  focusedNode = null;
  camPosTarget.copy(defaultCamPos);
  camTarget.copy(defaultCamTarget);
  hideInfoPanel();
}

// ===== UI =====

function showInfoPanel(data) {
  const panel = document.getElementById('info-panel');
  const content = document.getElementById('info-content');

  const scarText = data.warm_scar === 0 ? 'none' :
    data.warm_scar === 1 ? 'cool blue' :
    data.warm_scar === 2 ? 'soft amber' : 'radiant gold';

  const stateClass = data.sleep_state;

  const connections = data.connections.map(id => {
    const target = (window.BIGMODE_NODES || []).find(n => n.id === id);
    return target ? `<div class="info-connection">${data.title} <span class="arrow">→</span> ${target.title}</div>` : '';
  }).join('');

  content.innerHTML = `
    <div class="info-category">${data.category}</div>
    <div class="info-title">${data.title}</div>
    <div class="info-state ${stateClass}">${data.sleep_state}</div>
    <div class="info-metrics">
      <div class="info-metric">
        <div class="info-metric-label">ALIVENESS</div>
        <div class="info-metric-val">${data.aliveness.toFixed(2)}</div>
      </div>
      <div class="info-metric">
        <div class="info-metric-label">PATIENCE</div>
        <div class="info-metric-val">${data.patience.toFixed(2)}</div>
      </div>
      <div class="info-metric">
        <div class="info-metric-label">RESURRECTIONS</div>
        <div class="info-metric-val">${data.resurrections}</div>
      </div>
      <div class="info-metric">
        <div class="info-metric-label">WARM SCAR</div>
        <div class="info-metric-val">${scarText}</div>
      </div>
    </div>
    <div class="info-description">${data.description}</div>
    <div class="info-section-title">Tags</div>
    <div class="info-tags">
      ${data.tags.map(t => `<span class="info-tag">${t}</span>`).join('')}
    </div>
    <div class="info-section-title">Semantic Connections</div>
    <div class="info-connections">${connections}</div>
  `;

  panel.classList.add('open');

  document.getElementById('info-close').onclick = unfocus;
}

function hideInfoPanel() {
  document.getElementById('info-panel').classList.remove('open');
}

function showJarvisWhisper(text, duration) {
  const el = document.getElementById('jarvis-whisper');
  if (!el) return;
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => {
    el.classList.remove('show');
  }, duration || 3000);
}

function updateStats(data) {
  const counts = { dreaming: 0, ember: 0, frostbound: 0, seeded: 0 };
  let scarCount = 0;
  data.forEach(n => {
    counts[n.sleep_state]++;
    if (n.warm_scar > 0) scarCount++;
  });
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('stat-nodes', data.length);
  set('stat-dreaming', counts.dreaming);
  set('stat-ember', counts.ember);
  set('stat-frost', counts.frostbound);
  set('stat-seeded', counts.seeded);
  set('stat-scars', scarCount);
}

// ===== ANIMATION LOOP =====

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  const dt = clock.getDelta();

  // Smooth camera lerp
  camera.position.lerp(camPosTarget, 0.04);
  controls.target.lerp(camTarget, 0.04);
  controls.update();

  // Ring rotation — dims slightly in Reminisce mode
  if (ring) {
    ring.rotation.z += 0.0015;
    ring.rotation.y += 0.0008;
    const ringPulse = 1 + Math.sin(t * 0.5) * 0.05;
    const ringDim = currentMode === 'reminisce' ? 0.35 : 0.5;
    ring.material.emissiveIntensity = ringDim * ringPulse;
  }
  if (ringParticles) {
    ringParticles.rotation.z += 0.0015;
    ringParticles.rotation.y += 0.0008;
    const pDim = currentMode === 'reminisce' ? 0.3 : 0.5;
    ringParticles.material.opacity += (pDim - ringParticles.material.opacity) * 0.02;
  }

  // Nebula slow drift
  if (nebulaCloud) {
    nebulaCloud.rotation.y += 0.0002;
  }

  // Starfield subtle rotation
  if (starfield) {
    starfield.rotation.y += 0.00005;
  }

  // Node updates
  nodeObjects.forEach(n => {
    // Lerp prominence
    n.prominence += (n.targetProminence - n.prominence) * 0.05;

    const d = n.data;
    const pulseRate = PULSE_RATE[d.sleep_state];
    const pulseAmp = d.aliveness * 0.12;
    const pulse = 1 + Math.sin(t * pulseRate * Math.PI * 2 + n.pulseOffset) * pulseAmp;

    // Scale
    const scale = pulse * (0.8 + n.prominence * 0.4);
    n.group.scale.setScalar(scale);

    // Emissive
    const isHovered = (n === hoveredNode);
    const isFocused = (n === focusedNode);
    const boost = isHovered ? 1.5 : isFocused ? 1.8 : 1.0;
    n.material.emissiveIntensity = n.baseEmissive * n.prominence * boost;

    // Reminisce ambient tint — warm sepia diffusion over the native sleep color
    if (currentMode === 'reminisce') {
      n.material.emissive.lerp(REMINISCE_AMBIENT, 0.015);
      n.material.opacity = n.baseOpacity * (0.5 + n.prominence * 0.5) * 0.75;  // ghostly fade
    } else {
      n.material.emissive.lerp(SLEEP_COLORS[d.sleep_state], 0.05);
      n.material.opacity = n.baseOpacity * (0.5 + n.prominence * 0.5);
    }

    // Reminisce drift — all nodes wander lazily
    if (currentMode === 'reminisce' && n.reminisceDrift) {
      const rd = n.reminisceDrift;
      n.group.position.x = d.position[0] + Math.sin(t * rd.speed + rd.phase) * rd.x;
      n.group.position.z = d.position[2] + Math.cos(t * rd.speed * 0.7 + rd.phase * 1.3) * rd.z;
    } else if (d.sleep_state === 'seeded' || d.sleep_state === 'frostbound') {
      n.group.position.x = d.position[0] + Math.sin(t * 0.1 + n.driftSeed) * 0.3;
      n.group.position.y = d.position[1] + Math.cos(t * 0.08 + n.driftSeed) * 0.2;
    } else {
      // Reset any drift if not in a drifting mode
      n.group.position.x = d.position[0];
      n.group.position.y = d.position[1];
      n.group.position.z = d.position[2];
    }

    // Warm scar pulse
    if (n.data._scarMesh) {
      const scarPulse = 1 + Math.sin(t * 0.3 + n.driftSeed) * 0.08;
      n.data._scarMesh.scale.setScalar(scarPulse);
      const scarMat = n.data._scarMesh.material;
      const scarBase = 0.08 + d.warm_scar * 0.04;
      scarMat.opacity = scarBase * (0.7 + n.prominence * 0.3);
    }
  });

  // Connection line updates
  connectionLines.forEach(c => {
    const isHighlighted = focusedNode &&
      (c.fromId === focusedNode.data.id || c.toId === focusedNode.data.id);
    if (isHighlighted) {
      c.material.opacity = 0.5;
      c.material.color.setHex(0xffb347);
    } else {
      c.material.opacity = c.baseOpacity;
      const avg = (c.fromNode.data.aliveness + c.toNode.data.aliveness) / 2;
      c.material.color.lerpColors(
        new THREE.Color(0x1a2238),
        new THREE.Color(0xffb347),
        avg
      );
    }
  });

  composer.render();
}

// ===== START =====
init();
