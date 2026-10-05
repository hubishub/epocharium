/**
 * Build Epocharium Industrial Humanoid GLB
 * Figure F.02–inspired industrial aesthetic (original geometry — no brand IP:
 * no F.02 text, no 2×2 logo, no Figure marks).
 *
 * Matte charcoal-grey panels, deep matte joints, glossy piano-black ovoid
 * head with white LED + dual lenses, ball shoulders, 5-finger hands,
 * planted shoe feet. Face +Z forward. Adult ~7.5 heads / 1.75 m.
 *
 * Usage: node scripts/build-industrial-humanoid.mjs  (from project root)
 */
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { writeFileSync, mkdirSync, statSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// Node lacks FileReader; GLTFExporter binary path needs onloadend.
if (typeof globalThis.FileReader === "undefined") {
  globalThis.FileReader = class FileReader {
    constructor() {
      this.result = null;
      this.onload = null;
      this.onerror = null;
      this.onloadend = null;
    }
    readAsArrayBuffer(blob) {
      const done = (buf) => {
        this.result = buf;
        const ev = { target: this };
        if (this.onload) this.onload(ev);
        if (this.onloadend) this.onloadend(ev);
      };
      const fail = (err) => {
        if (this.onerror) this.onerror(err);
        if (this.onloadend) this.onloadend({ target: this });
      };
      Promise.resolve(blob.arrayBuffer()).then(done).catch(fail);
    }
    readAsDataURL(blob) {
      const done = (buf) => {
        const b64 = Buffer.from(buf).toString("base64");
        const type = blob.type || "application/octet-stream";
        this.result = `data:${type};base64,${b64}`;
        const ev = { target: this };
        if (this.onload) this.onload(ev);
        if (this.onloadend) this.onloadend(ev);
      };
      const fail = (err) => {
        if (this.onerror) this.onerror(err);
        if (this.onloadend) this.onloadend({ target: this });
      };
      Promise.resolve(blob.arrayBuffer()).then(done).catch(fail);
    }
  };
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/models/industrial-humanoid/model.glb");
const TARGET_H = 1.75;
const SEG = 28; // high radial segments — smooth industrial read

// ── Materials (mid greys baked so even without remap they don't ghost) ─────
function mat(name, color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    name,
    color: new THREE.Color(color),
    metalness: opts.metalness ?? 0.18,
    roughness: opts.roughness ?? 0.72,
    emissive: new THREE.Color(opts.emissive ?? "#000000"),
    emissiveIntensity: opts.emissiveIntensity ?? 0,
  });
}

const MAT = {
  // Panels #8a–#a8 — clear grey read under museum light
  panelLight: mat("panelLight", "#a8a8a8", { metalness: 0.14, roughness: 0.66 }),
  panelGrey: mat("panelGrey", "#8e8e8e", { metalness: 0.16, roughness: 0.7 }),
  // Soft charcoal still mid — not near-black
  charcoalSoft: mat("charcoalSoft", "#5a5a5a", { metalness: 0.2, roughness: 0.62 }),
  charcoal: mat("charcoal", "#454545", { metalness: 0.22, roughness: 0.58 }),
  // Joints #2a–#45 — deep but separable from panels
  joint: mat("joint", "#323232", { metalness: 0.32, roughness: 0.42 }),
  headGloss: mat("headGloss", "#1a1a1a", { metalness: 0.42, roughness: 0.18 }),
  lens: mat("lens", "#0a0a0a", { metalness: 0.45, roughness: 0.14 }),
  lensRing: mat("lensRing", "#4a4a4a", { metalness: 0.28, roughness: 0.48 }),
  sole: mat("sole", "#2a2a2a", { metalness: 0.12, roughness: 0.88 }),
  // CRITICAL: name must be exactly `led` for HumanoidRobot.tsx detect
  led: mat("led", "#ffffff", {
    metalness: 0,
    roughness: 0.32,
    emissive: "#ffffff",
    emissiveIntensity: 1.35,
  }),
};

const root = new THREE.Group();
root.name = "IndustrialHumanoid";

function addMesh(geo, material, pos, rot, scale, name) {
  const mesh = new THREE.Mesh(geo, material);
  mesh.name = name || "part";
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  if (pos) mesh.position.set(pos[0], pos[1], pos[2]);
  if (rot) mesh.rotation.set(rot[0], rot[1], rot[2]);
  if (scale) mesh.scale.set(scale[0], scale[1], scale[2]);
  root.add(mesh);
  return mesh;
}

function capsule(r, len, matl, pos, name, segs = SEG) {
  const geo = new THREE.CapsuleGeometry(r, len, 10, segs);
  return addMesh(geo, matl, pos, null, null, name);
}

function cylinder(rTop, rBot, h, matl, pos, rot, name, segs = SEG) {
  const geo = new THREE.CylinderGeometry(rTop, rBot, h, segs);
  return addMesh(geo, matl, pos, rot, null, name);
}

function sphere(r, matl, pos, name, wSeg = 24, hSeg = 18) {
  const geo = new THREE.SphereGeometry(r, wSeg, hSeg);
  return addMesh(geo, matl, pos, null, null, name);
}

/** Flattened panel as thin scaled capsule (prefer over BoxGeometry). */
function panelShell(rx, ry, rz, matl, pos, name) {
  const m = capsule(Math.min(rx, rz) * 0.5, Math.max(0.01, ry - Math.min(rx, rz)), matl, pos, name);
  m.scale.set(
    (rx * 2) / Math.min(rx, rz),
    1,
    (rz * 2) / Math.min(rx, rz)
  );
  return m;
}

// ── Proportions (7.5-heads adult, H≈1.75) ──────────────────────────────────
const HEAD_H = 0.233;
const FOOT_H = 0.06;
const LOWER_LEG = 0.415;
const UPPER_LEG = 0.395;
const PELVIS_H = 0.135;
const TORSO_H = 0.49;
const NECK_H = 0.055;
const UPPER_ARM = 0.305;
const FOREARM = 0.285;

let y = 0;

// ── Feet — planted shoe-like ───────────────────────────────────────────────
function buildFoot(side) {
  const sx = side;
  const label = side > 0 ? "R" : "L";
  const ankleX = sx * 0.105;
  const z = 0.015;

  // Rubber sole — elongated capsule scaled flat
  const sole = capsule(0.042, 0.14, MAT.sole, [ankleX, 0.012, z + 0.04], `sole_${label}`, 24);
  sole.scale.set(1.25, 0.38, 1.85);

  // Shoe upper shell
  const upper = capsule(0.04, 0.1, MAT.charcoal, [ankleX, 0.038, z + 0.03], `shoe_${label}`, 24);
  upper.scale.set(1.2, 0.75, 1.55);

  // Toe box
  sphere(0.032, MAT.charcoalSoft, [ankleX, 0.032, z + 0.125], `toe_${label}`, 18, 14);

  // Instep panel (light grey accent)
  const instep = capsule(0.022, 0.06, MAT.panelGrey, [ankleX, 0.055, z + 0.045], `instep_${label}`, 20);
  instep.scale.set(1.4, 0.35, 1.1);

  // Heel counter
  sphere(0.03, MAT.charcoal, [ankleX, 0.04, z - 0.035], `heel_${label}`, 16, 12);

  // Ankle ball joint
  sphere(0.04, MAT.joint, [ankleX, FOOT_H + 0.008, z], `ankle_${label}`, 22, 16);
}

buildFoot(1);
buildFoot(-1);
y = FOOT_H + 0.015;

// ── Lower legs ─────────────────────────────────────────────────────────────
function buildLowerLeg(side) {
  const sx = side;
  const label = side > 0 ? "R" : "L";
  const x = sx * 0.105;
  const midY = y + LOWER_LEG / 2;

  // Main shin
  capsule(0.05, LOWER_LEG - 0.085, MAT.panelGrey, [x, midY, 0], `shin_${label}`);

  // Front shin armor (light)
  const shinP = capsule(0.028, LOWER_LEG * 0.48, MAT.panelLight, [x, midY + 0.02, 0.042], `shinArmor_${label}`, 22);
  shinP.scale.set(1.55, 1, 0.45);

  // Calf rear
  capsule(0.044, LOWER_LEG * 0.38, MAT.charcoalSoft, [x, midY - 0.05, -0.028], `calf_${label}`);

  // Lower cuff ring
  cylinder(0.052, 0.05, 0.028, MAT.charcoal, [x, y + 0.04, 0], null, `shinCuff_${label}`, 24);
}

buildLowerLeg(1);
buildLowerLeg(-1);
y += LOWER_LEG;

// Knees
for (const [sx, label] of [[1, "R"], [-1, "L"]]) {
  const x = sx * 0.105;
  sphere(0.052, MAT.joint, [x, y, 0], `knee_${label}`, 22, 16);
  // Knee cap armor
  const cap = sphere(0.038, MAT.panelLight, [x, y + 0.005, 0.032], `kneeCap_${label}`, 18, 14);
  cap.scale.set(1.15, 0.9, 0.7);
}

// ── Upper legs ─────────────────────────────────────────────────────────────
function buildUpperLeg(side) {
  const sx = side;
  const label = side > 0 ? "R" : "L";
  const x = sx * 0.105;
  const midY = y + UPPER_LEG / 2;

  capsule(0.06, UPPER_LEG - 0.1, MAT.panelGrey, [x, midY, 0], `thigh_${label}`);

  // Outer armor rail
  const rail = capsule(0.02, UPPER_LEG * 0.48, MAT.charcoal, [x + sx * 0.052, midY, 0], `thighRail_${label}`, 20);
  rail.scale.set(0.7, 1, 1.4);

  // Front thigh panel
  const front = capsule(0.032, UPPER_LEG * 0.4, MAT.panelLight, [x, midY + 0.02, 0.045], `thighFront_${label}`, 20);
  front.scale.set(1.5, 1, 0.4);
}

buildUpperLeg(1);
buildUpperLeg(-1);
y += UPPER_LEG;

// Hips
sphere(0.062, MAT.joint, [0.105, y, 0], "hip_R", 22, 16);
sphere(0.062, MAT.joint, [-0.105, y, 0], "hip_L", 22, 16);

// ── Pelvis ─────────────────────────────────────────────────────────────────
const pelvisY = y + PELVIS_H / 2;
const pelvis = capsule(0.115, PELVIS_H - 0.055, MAT.charcoal, [0, pelvisY, 0], "pelvis");
pelvis.scale.set(1.4, 1, 0.92);

cylinder(0.16, 0.152, 0.042, MAT.panelGrey, [0, pelvisY + 0.015, 0], null, "pelvisBelt", 32);

const pelvisFront = capsule(0.07, 0.04, MAT.panelLight, [0, pelvisY + 0.03, 0.095], "pelvisFront", 20);
pelvisFront.scale.set(1.6, 0.9, 0.35);

y += PELVIS_H;

// ── Torso — industrial chest + side rails ──────────────────────────────────
const torsoMid = y + TORSO_H / 2;

const torso = capsule(0.135, TORSO_H - 0.11, MAT.panelGrey, [0, torsoMid, 0], "torso");
torso.scale.set(1.18, 1, 0.82);

// Upper chest plate (light grey — Figure-like pectoral read)
const chest = capsule(0.1, 0.14, MAT.panelLight, [0, torsoMid + 0.09, 0.1], "chestPlate", 24);
chest.scale.set(1.55, 1, 0.42);

// Sternum seam (charcoal line)
const sternum = capsule(0.012, 0.2, MAT.charcoal, [0, torsoMid + 0.04, 0.125], "sternum", 16);
sternum.scale.set(0.8, 1, 0.5);

// Mid torso band
cylinder(0.158, 0.152, 0.048, MAT.charcoalSoft, [0, torsoMid - 0.04, 0], null, "torsoBand", 32);

// Abdomen lower plates
const absL = capsule(0.055, 0.08, MAT.panelGrey, [-0.055, torsoMid - 0.12, 0.09], "abs_L", 18);
absL.scale.set(1.1, 1, 0.4);
const absR = capsule(0.055, 0.08, MAT.panelGrey, [0.055, torsoMid - 0.12, 0.09], "abs_R", 18);
absR.scale.set(1.1, 1, 0.4);

// Side rails
const sideR = capsule(0.028, 0.3, MAT.charcoal, [0.148, torsoMid, 0], "sideRail_R", 20);
sideR.scale.set(0.65, 1, 1.5);
const sideL = capsule(0.028, 0.3, MAT.charcoal, [-0.148, torsoMid, 0], "sideRail_L", 20);
sideL.scale.set(0.65, 1, 1.5);

// Back plate / cooling pack
const back = capsule(0.08, 0.28, MAT.charcoalSoft, [0, torsoMid, -0.105], "backPack", 22);
back.scale.set(1.3, 1, 0.45);

// Collar / shoulder yoke
cylinder(0.155, 0.138, 0.048, MAT.charcoal, [0, y + TORSO_H - 0.018, 0], null, "collar", 32);

const shoulderY = y + TORSO_H - 0.035;
const shoulderX = 0.205;

// Ball shoulder joints + armor caps
for (const [sx, label] of [[1, "R"], [-1, "L"]]) {
  const x = sx * shoulderX;
  sphere(0.068, MAT.joint, [x, shoulderY, 0], `shoulder_${label}`, 24, 18);
  const cap = sphere(0.052, MAT.panelLight, [x, shoulderY + 0.022, 0.012], `shoulderCap_${label}`, 20, 14);
  cap.scale.set(1.1, 0.85, 1.05);
  // Deltoid armor
  const delt = capsule(0.04, 0.06, MAT.panelGrey, [x + sx * 0.02, shoulderY - 0.04, 0.01], `delt_${label}`, 18);
  delt.scale.set(1.2, 1, 1.1);
}

y += TORSO_H;

// ── Neck ───────────────────────────────────────────────────────────────────
cylinder(0.042, 0.052, NECK_H, MAT.charcoalSoft, [0, y + NECK_H / 2, 0], null, "neck", 24);
cylinder(0.055, 0.055, 0.016, MAT.joint, [0, y + 0.008, 0], null, "neckRing", 24);
y += NECK_H;

// ── Head — glossy piano-black ovoid, face +Z ───────────────────────────────
const headCenterY = y + HEAD_H * 0.48;

const head = sphere(0.108, MAT.headGloss, [0, headCenterY, 0.008], "head", 32, 24);
head.scale.set(0.9, 1.18, 1.02); // ovoid

// Face recess (slightly forward on +Z)
const face = sphere(0.082, MAT.charcoal, [0, headCenterY + 0.008, 0.07], "facePlate", 24, 18);
face.scale.set(0.82, 0.88, 0.42);

function cameraLens(lx, ly, lz, name) {
  cylinder(0.026, 0.026, 0.018, MAT.lensRing, [lx, ly, lz], [Math.PI / 2, 0, 0], `${name}_ring`, 20);
  cylinder(0.016, 0.016, 0.014, MAT.lens, [lx, ly, lz + 0.008], [Math.PI / 2, 0, 0], `${name}_lens`, 20);
  sphere(0.005, MAT.panelLight, [lx + 0.004, ly + 0.004, lz + 0.016], `${name}_glint`, 10, 8);
}

// Dual cameras on +Z face
cameraLens(-0.032, headCenterY + 0.018, 0.108, "camL");
cameraLens(0.032, headCenterY + 0.018, 0.108, "camR");

// Small white status LED (brow center, +Z)
sphere(0.011, MAT.led, [0, headCenterY + 0.068, 0.098], "statusLed", 14, 12);

// Side sensor pods
sphere(0.024, MAT.charcoalSoft, [0.092, headCenterY, 0], "ear_R", 14, 12);
sphere(0.024, MAT.charcoalSoft, [-0.092, headCenterY, 0], "ear_L", 14, 12);

// Crown seam ring
cylinder(0.078, 0.078, 0.01, MAT.joint, [0, headCenterY + 0.05, 0.005], null, "crownRing", 24);

// ── Arms — slight A-pose ───────────────────────────────────────────────────
const APOSE = (7 * Math.PI) / 180;

function buildArm(side) {
  const sx = side;
  const label = side > 0 ? "R" : "L";
  const ux = shoulderX * sx;
  const uy = shoulderY;

  const upperLen = UPPER_ARM;
  const out = Math.sin(APOSE) * upperLen;
  const down = Math.cos(APOSE) * upperLen;
  const upperMidX = ux + sx * out * 0.5;
  const upperMidY = uy - down * 0.5;
  const upperEndX = ux + sx * out;
  const upperEndY = uy - down;

  const upper = capsule(0.044, upperLen - 0.07, MAT.panelGrey, [upperMidX, upperMidY, 0], `upperArm_${label}`);
  upper.rotation.z = -sx * APOSE;

  // Bicep armor strip
  const bic = capsule(0.022, upperLen * 0.4, MAT.panelLight, [upperMidX + sx * 0.01, upperMidY, 0.03], `bicep_${label}`, 18);
  bic.rotation.z = -sx * APOSE;
  bic.scale.set(1.3, 1, 0.5);

  sphere(0.044, MAT.joint, [upperEndX, upperEndY, 0], `elbow_${label}`, 20, 14);

  const foreLen = FOREARM;
  const foreOut = Math.sin(APOSE * 0.65) * foreLen;
  const foreDown = Math.cos(APOSE * 0.65) * foreLen;
  const foreMidX = upperEndX + sx * foreOut * 0.5;
  const foreMidY = upperEndY - foreDown * 0.5;
  const foreEndX = upperEndX + sx * foreOut;
  const foreEndY = upperEndY - foreDown;

  const fore = capsule(0.037, foreLen - 0.055, MAT.panelLight, [foreMidX, foreMidY, 0.012], `forearm_${label}`);
  fore.rotation.z = -sx * APOSE * 0.65;

  // Forearm rail
  const fRail = capsule(0.014, foreLen * 0.42, MAT.charcoal, [foreMidX + sx * 0.03, foreMidY, 0.012], `foreRail_${label}`, 16);
  fRail.rotation.z = -sx * APOSE * 0.65;

  sphere(0.03, MAT.joint, [foreEndX, foreEndY, 0.012], `wrist_${label}`, 16, 12);

  buildHand(foreEndX, foreEndY - 0.015, 0.02, sx, label);
}

function buildHand(hx, hy, hz, sx, label) {
  // Palm
  const palm = capsule(0.027, 0.048, MAT.charcoalSoft, [hx, hy - 0.022, hz], `palm_${label}`, 20);
  palm.scale.set(1.4, 1, 0.62);

  // Dorsal panel
  const dorsal = capsule(0.02, 0.035, MAT.panelGrey, [hx, hy - 0.012, hz + 0.016], `handPanel_${label}`, 16);
  dorsal.scale.set(1.8, 1, 0.4);

  // Thumb
  const thumbX = hx + sx * 0.036;
  const thumb = capsule(0.01, 0.032, MAT.charcoal, [thumbX, hy - 0.008, hz + 0.022], `thumb_${label}`, 12);
  thumb.rotation.z = sx * 0.75;
  thumb.rotation.x = 0.45;
  sphere(0.01, MAT.joint, [thumbX + sx * 0.012, hy + 0.008, hz + 0.032], `thumbTip_${label}`, 10, 8);

  // Four fingers (index→pinky)
  const spreads = [-0.026, -0.009, 0.009, 0.026];
  const lengths = [0.052, 0.06, 0.058, 0.048];
  for (let i = 0; i < 4; i++) {
    const fx = hx + spreads[i];
    const fy = hy - 0.042 - lengths[i] * 0.32;
    const fz = hz + 0.004;
    capsule(0.0085, lengths[i] * 0.52, MAT.charcoal, [fx, fy, fz], `finger${i}_${label}`, 12);
    sphere(0.0095, MAT.joint, [fx, hy - 0.038, fz], `knuckle${i}_${label}`, 10, 8);
    sphere(0.0085, MAT.charcoalSoft, [fx, fy - lengths[i] * 0.26, fz], `tip${i}_${label}`, 10, 8);
  }
}

buildArm(1);
buildArm(-1);

// ── Normalize: soles y=0, height ≈ TARGET_H, center XZ ──────────────────────
root.updateMatrixWorld(true);
const box3 = new THREE.Box3().setFromObject(root);
const size = new THREE.Vector3();
box3.getSize(size);

if (size.y > 0.01) {
  const s = TARGET_H / size.y;
  root.scale.setScalar(s);
  root.updateMatrixWorld(true);
  const box2 = new THREE.Box3().setFromObject(root);
  root.position.y -= box2.min.y;
  root.position.x -= (box2.min.x + box2.max.x) / 2;
  root.position.z -= (box2.min.z + box2.max.z) / 2;
  root.updateMatrixWorld(true);
}

const finalBox = new THREE.Box3().setFromObject(root);
const finalSize = new THREE.Vector3();
finalBox.getSize(finalSize);

let meshCount = 0;
const matNames = new Set();
root.traverse((o) => {
  if (o.isMesh) {
    meshCount++;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    mats.forEach((m) => m?.name && matNames.add(m.name));
  }
});

console.log("Pre-export:");
console.log("  meshes:", meshCount);
console.log("  height:", finalSize.y.toFixed(4), "m");
console.log("  soles y:", finalBox.min.y.toFixed(4));
console.log("  materials:", [...matNames].sort().join(", "));
console.log("  has led:", matNames.has("led"));
console.log("  face forward: +Z (lenses/LED on +Z)");

const exporter = new GLTFExporter();
function exportAsync() {
  return new Promise((resolvePromise, reject) => {
    exporter.parse(
      root,
      (result) => resolvePromise(result),
      (err) => reject(err),
      { binary: true }
    );
  });
}

const buffer = await exportAsync();
const bytes = Buffer.from(buffer);
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, bytes);

const st = statSync(OUT);
console.log("Wrote:", OUT);
console.log("  file size:", (st.size / 1024).toFixed(1), "KB", `(${st.size} bytes)`);
console.log("  mesh count:", meshCount);
console.log("  height:", finalSize.y.toFixed(4), "m");
console.log("  LED material named `led`:", matNames.has("led"));
