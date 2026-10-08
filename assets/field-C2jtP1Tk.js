import{n as e,t}from"./main-DGKZsjqN.js";import{a as n,i as r,n as i}from"./config-BfOEjthh.js";var a=e=>`"${e}", "SS Glyphs", ui-monospace, monospace`,o=Object.entries(n.families),s=new Set(n.fixed);async function c(e,t=2500){if(!document.fonts)return;let n=o.map(([,e])=>e).join(``),r=[document.fonts.load(`400 24px "${e}"`,n),document.fonts.load(`400 24px "SS Glyphs"`,n)];await Promise.race([Promise.allSettled(r),new Promise(e=>setTimeout(e,t))])}var l={"─":[`EW`,`l`],"│":[`NS`,`l`],"┌":[`ES`,`l`],"┐":[`WS`,`l`],"└":[`NE`,`l`],"┘":[`NW`,`l`],"├":[`NSE`,`l`],"┤":[`NSW`,`l`],"┬":[`EWS`,`l`],"┴":[`EWN`,`l`],"┼":[`NESW`,`l`],"━":[`EW`,`h`],"┃":[`NS`,`h`],"╋":[`NESW`,`h`]},u={"═":`h 0 -o 1 | h 0 +o 1`,"║":`v 0 -o 1 | v 0 +o 1`,"╔":`h -o -o 1 | h +o +o 1 | v -o -o 1 | v +o +o 1`,"╗":`h 0 -o +o | h 0 +o -o | v -o +o 1 | v +o -o 1`,"╚":`h -o +o 1 | h +o -o 1 | v 0 -o +o | v 0 +o -o`,"╝":`h 0 +o +o | h 0 -o -o | v 0 +o +o | v 0 -o -o`,"╬":`h 0 -o -o | h +o -o 1 | h 0 +o -o | h +o +o 1 | v 0 -o -o | v +o -o 1 | v 0 +o -o | v +o +o 1`};function d(e){let t=(e,t=!1)=>Math.max(t?2:1,Math.round(e*(t?.24:.12)));if(l[e]){let[n,r]=l[e];return(e,i,a,o,s)=>{let c=t(o,r===`h`),l=i+Math.floor((o-c)/2),u=a+Math.floor((s-c)/2);n.includes(`E`)&&e.fillRect(l,u,i+o-l,c),n.includes(`W`)&&e.fillRect(i,u,l-i+c,c),n.includes(`N`)&&e.fillRect(l,a,c,u-a+c),n.includes(`S`)&&e.fillRect(l,u,c,a+s-u)}}if(u[e]){let n=u[e].split(`|`).map(e=>e.trim().split(` `));return(e,r,i,a,o)=>{let s=t(a),c=Math.max(s+1,Math.round(a*.17)),l=r+Math.floor((a-s)/2),u=i+Math.floor((o-s)/2),d=e=>e===`0`?r:e===`1`?r+a:l+(e===`-o`?-c:c),f=e=>e===`0`?i:e===`1`?i+o:u+(e===`-o`?-c:c);for(let[t,r,i,a]of n)if(t===`h`){let t=f(i),n=d(r),o=d(a);e.fillRect(Math.min(n,o),t,Math.abs(o-n)+(a===`1`||r===`1`?0:s),s)}else{let t=d(i),n=f(r),o=f(a);e.fillRect(t,Math.min(n,o),s,Math.abs(o-n)+(a===`1`||r===`1`?0:s))}}}let n={"╌":2,"┄":3,"┈":4};if(n[e]){let r=n[e];return(e,n,i,a,o)=>{let s=t(a),c=i+Math.floor((o-s)/2),l=a/r;for(let t=0;t<r;t++)e.fillRect(Math.round(n+t*l),c,Math.max(1,Math.round(l*.6)),s)}}if(e===`╱`||e===`╲`||e===`╳`)return(n,r,i,a,o)=>{n.lineWidth=t(a)*1.15,n.beginPath(),e!==`╲`&&(n.moveTo(r,i+o),n.lineTo(r+a,i)),e!==`╱`&&(n.moveTo(r,i),n.lineTo(r+a,i+o)),n.stroke()};if(e===`○`||e===`∘`){let n=e===`○`?.33:.2;return(e,r,i,a,o)=>{e.lineWidth=t(a),e.beginPath(),e.arc(r+a/2,i+o/2,a*n,0,Math.PI*2),e.stroke()}}return null}function f(e,t,n,r){let i=o.length,c=document.createElement(`canvas`);c.width=16*e,c.height=i*t;let l=c.getContext(`2d`,{willReadFrequently:!0}),u=document.createElement(`canvas`);u.width=e,u.height=t;let f=u.getContext(`2d`,{willReadFrequently:!0}),p=`400 ${n}px ${a(r)}`;l.font=p;let m=l.measureText(`Hxg`),h=m.fontBoundingBoxAscent??n*.8,g=m.fontBoundingBoxDescent??n*.2,_=Math.round((t-(h+g))/2+h),v=(n,r,i,a)=>{n.fillStyle=`#fff`,n.strokeStyle=`#fff`;let o=d(r);if(o){o(n,i,a,e,t);return}n.font=p,n.textAlign=`left`,n.textBaseline=`alphabetic`;let s=n.measureText(r),c=s.actualBoundingBoxLeft,l=s.actualBoundingBoxRight,u=s.actualBoundingBoxAscent,f=s.actualBoundingBoxDescent;if(l+c<=e*1.04&&u<=_+1&&f<=t-_+1){n.fillText(r,i+(e-s.width)/2,a+_);return}let m=Math.max(1,c+l),h=Math.max(1,u+f),g=e*.92/m,v=t*.86/h,y=Math.min(1,g),b=Math.min(1,v);y<1&&(b=Math.min(b,Math.max(y,Math.min(1,y*1.35)))),n.save(),n.translate(i+e/2,a+t/2),n.scale(y,b),n.fillText(r,(c-l)/2,(u-f)/2),n.restore()},y=n=>{f.clearRect(0,0,e,t),v(f,n,0,0);let r=f.getImageData(0,0,e,t).data,i=0;for(let e=3;e<r.length;e+=4)i+=r[e];return i/(e*t*255)},b=[];return l.clearRect(0,0,c.width,c.height),o.forEach(([n,r],i)=>{let a=[...r];s.has(n)||(a=a.map(e=>({g:e,v:y(e)})).sort((e,t)=>e.v-t.v).map(e=>e.g)),b[i*16]=` `,a.forEach((n,r)=>{b[i*16+r+1]=n,l.save(),l.beginPath(),l.rect((r+1)*e,i*t,e,t),l.clip(),v(l,n,(r+1)*e,i*t),l.restore()})}),{canvas:c,tileW:e,tileH:t,rows:i,chars:b}}var p=`#version 300 es
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,m=`
#define PI 3.14159265
#define TAU 6.28318531
float h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float h13(vec3 p3) { p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 h33(vec3 p3) { p3 = fract(p3 * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yxx) * p3.zyx); }
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3. - 2. * f);
  return mix(mix(h12(i), h12(i + vec2(1, 0)), f.x), mix(h12(i + vec2(0, 1)), h12(i + vec2(1, 1)), f.x), f.y);
}
`,h=`#version 300 es
precision highp float;
precision highp int;
uniform vec2 uGrid;
uniform vec2 uCell;
uniform vec2 uView;
uniform float uTime;
uniform int uSceneA;
uniform int uSceneB;
uniform float uTA;
uniform float uTB;
uniform float uMix;
uniform float uStarsA;
uniform float uStarsB;
uniform vec3 uAnchor;
uniform float uFocal;
uniform int uSteps;
uniform float uOff;
uniform float uRowBase;
uniform vec4 uEye;
uniform vec2 uPupil;
uniform float uIntroT;
uniform int uAncA;
uniform int uAncB;
/* atlas rows the cosmos names glyphs from: digits, ascii, dir, geometry */
uniform ivec4 uRowsA;
out vec4 o;
${m}
#define INTRO_END 5.3
#define MILK .995

float gTime, gT, gPix, gR, gPal;
bool gAnc;
/* an exact glyph: row × 16 + level, in a palette position */
vec4 exact(float I, int row, float level, float pal) { return vec4(I, pal, (float(row) * 16. + level) / 255., 5.); }
vec3 gC;
int gS;

float fbm(vec2 p) {
  float s = 0., a = .5;
  for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = rot(.6) * p * 2.03 + 11.7; a *= .5; }
  return s;
}

float sdBox(vec3 p, vec3 b) { vec3 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.); }
float sdTorus(vec3 p, vec2 t) { vec2 q = vec2(length(p.xz) - t.x, p.y); return length(q) - t.y; }
float sdCapsule(vec3 p, vec3 a, vec3 b, float r) { vec3 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.); return length(pa - ba * h) - r; }
float sdEllipsoid(vec3 p, vec3 r) { float k0 = length(p / r), k1 = length(p / (r * r)); return k0 * (k0 - 1.) / k1; }
/* iq: n-pointed star polygon; m = 2 is the regular polygon, larger m is spikier */
float sdStar(vec2 p, float r, float n, float m) {
  float an = PI / n, en = PI / m;
  vec2 acs = vec2(cos(an), sin(an)), ecs = vec2(cos(en), sin(en));
  float bn = mod(atan(p.x, p.y), 2. * an) - an;
  p = length(p) * vec2(cos(bn), abs(sin(bn)));
  p -= r * acs;
  p += ecs * clamp(-dot(p, ecs), 0., r * acs.y / ecs.y);
  return length(p) * sign(p.x);
}
/* a seven-fold outline, extruded into a thin band */
float sdSeven(vec3 p, float r, float m, float th, float h) {
  float d = abs(sdStar(p.xy, r, 7., m)) - th;
  vec2 w = vec2(d, abs(p.z) - h);
  return min(max(w.x, w.y), 0.) + length(max(w, 0.));
}

vec3 camRay(vec2 uv, vec3 ro, vec3 ta, float roll) {
  vec3 ww = normalize(ta - ro);
  vec3 up = vec3(sin(roll), cos(roll), 0.);
  vec3 uu = normalize(cross(up, ww));
  vec3 vv = cross(ww, uu);
  return normalize(uv.x * uu + uv.y * vv + uFocal * ww);
}

/* ── set pieces: each returns (distance, material). 1 solid · 2 line · 3 accent ── */

/* {7/k} star polygon as seven true segments (k = 1 heptagon, 2 and 3 heptagrams) */
float sdPoly7(vec2 p, float r, float k) {
  float d = 1e3;
  for (int i = 0; i < 7; i++) {
    float a0 = float(i) * TAU / 7., a1 = (float(i) + k) * TAU / 7.;
    vec2 a = r * vec2(sin(a0), cos(a0)), b = r * vec2(sin(a1), cos(a1));
    vec2 pa = p - a, ba = b - a;
    d = min(d, length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0., 1.)));
  }
  return d;
}
float sdPoly7x(vec3 p, float r, float k, float th) {
  return length(vec2(sdPoly7(p.xy, r, k), p.z)) - th;
}

vec2 map0(vec3 p) {                      // ground: the heptagram mandala around the eye
  vec3 q = p - gC;
  vec3 a = q; a.xy *= rot(gTime * .07); a.yz *= rot(.22 * sin(gTime * .21)); a.xz *= rot(.28 * sin(gTime * .17));
  float d1 = sdPoly7x(a, gR * 1.55, 1., gR * .006);
  vec3 b = q; b.xy *= rot(-gTime * .11 + .2); b.yz *= rot(.3 * sin(gTime * .13 + 1.)); b.xz *= rot(.3 * sin(gTime * .19));
  float d2 = sdPoly7x(b, gR * 1.4, 2., gR * .008);
  /* nodes on the heptagram's points */
  float dn = 1e3;
  for (int i = 0; i < 7; i++) {
    float an = float(i) * TAU / 7.;
    dn = min(dn, length(b - vec3(sin(an), cos(an), 0.) * gR * 1.4) - gR * .05);
  }
  vec2 r = vec2(d1, 2.);
  if (d2 < r.x) r = vec2(d2, 2.);
  if (dn < r.x) r = vec2(dn, 3.);
  return r;
}

vec2 map1(vec3 p) {                      // signal: rising pillars
  vec2 id = floor(p.xz / 3.);
  vec2 q = mod(p.xz, 3.) - 1.5;
  vec3 h = h33(vec3(id, 3.));
  float d = h.x > .45 ? length(q - (h.yz - .5) * 1.5) - (.06 + .13 * h.x) : 1.2;
  vec2 e = 1.5 - abs(q);
  d = min(d, min(e.x, e.y) + .05);
  gPal = h.y;
  return vec2(d * .85, 1.);
}

vec2 map2(vec3 p) {                      // lattice: a forest of candles
  vec2 id = floor(p.xz / 2.4);
  vec2 q = mod(p.xz, 2.4) - 1.2;
  vec3 hh = h33(vec3(id, 1.));
  vec2 e = 1.2 - abs(q);
  float bnd = min(e.x, e.y) + .04;
  if (hh.x < .5) return vec2(bnd, 0.);
  float body = .25 + 1.4 * hh.y * (.75 + .25 * sin(gTime * .7 + hh.z * TAU));
  float base = (hh.z - .5) * 1.8 + .25 * sin(gTime * .4 + hh.x * TAU);
  vec3 c = vec3(q.x, p.y - base, q.y);
  float db = sdBox(c, vec3(.2, body * .5, .2));
  float dw = sdBox(c, vec3(.022, body * .5 + .35 + .3 * hh.x, .022));
  gPal = hh.x > .75 ? .82 : .12;         // up candles pink, down candles violet
  vec2 r = db < dw ? vec2(db, 1.) : vec2(dw, 2.);
  r.x = min(r.x, bnd);
  return r;
}

vec3 node3(vec3 id) { return (id + .5) * 4.2 + (h33(id) - .5) * 1.8; }
bool edge3(vec3 id, float axis) { return h13(id + axis * 17.13) > .55; }
vec2 map3(vec3 p) {                      // archive: a transaction graph with pulses
  vec3 id = floor(p / 4.2);
  vec3 a = node3(id);
  vec2 r = vec2(length(p - a) - .2, 1.);
  for (int k = 0; k < 3; k++) {
    vec3 e = vec3(k == 0, k == 1, k == 2);
    float ax = float(k);
    if (edge3(id, ax)) {
      vec3 b = node3(id + e);
      float de = sdCapsule(p, a, b, .018);
      if (de < r.x) r = vec2(de, 2.);
      vec3 P = mix(a, b, fract(gTime * .22 + h13(id + e * 5.1)));
      float dp = length(p - P) - .075;
      if (dp < r.x) r = vec2(dp, 3.);
    }
    if (edge3(id - e, ax)) {
      vec3 c = node3(id - e);
      float de = sdCapsule(p, c, a, .018);
      if (de < r.x) r = vec2(de, 2.);
      vec3 P = mix(c, a, fract(gTime * .22 + h13(id - e + e * 5.1)));
      float dp = length(p - P) - .075;
      if (dp < r.x) r = vec2(dp, 3.);
    }
  }
  r.x *= .8;
  return r;
}

vec2 map4(vec3 p) {                      // ledger: the airship
  vec3 q = p - gC;
  q.xz *= rot(.22 * sin(gTime * .1));
  float body = sdEllipsoid(q, vec3(2.6, .72, .72)) * .8;
  vec3 f = q - vec3(-2.05, 0., 0.);
  float fins = min(sdBox(f, vec3(.38, .62, .025)), sdBox(f, vec3(.38, .025, .62)));
  float gond = sdBox(q - vec3(.25, -.82, 0.), vec3(.55, .11, .14)) - .04;
  float strut = sdBox(q - vec3(.25, -.7, 0.), vec3(.42, .07, .012));
  vec2 r = vec2(body, 1.);
  if (fins < r.x) r = vec2(fins, 2.);
  float g = min(gond, strut);
  if (g < r.x) r = vec2(g, 3.);
  return r;
}

vec2 map5(vec3 p) {                      // orbit: a core and seven rings
  vec2 r = vec2(length(p) - .85, 1.);
  for (int k = 0; k < 7; k++) {
    float fk = float(k);
    vec3 q = p;
    q.yz *= rot(.4 + fk * .37);
    q.xy *= rot(fk * .9 + gTime * .03 * (fk + 1.));
    float R = 1.5 + fk * .42;
    float d = sdTorus(q, vec2(R, .006));
    if (d < r.x) r = vec2(d, 2.);
    float an = gTime * (.25 / (1. + fk * .4)) + fk * 2.1;
    float dp = length(q - vec3(cos(an) * R, 0., sin(an) * R)) - (.09 + .05 * h12(vec2(fk, 3.)));
    if (dp < r.x) r = vec2(dp, 3.);
  }
  return r;
}

vec2 map6(vec3 p) {                      // ascension: a tunnel of sevens
  float k = floor(p.z / 6.);
  vec3 q = vec3(p.xy, mod(p.z, 6.) - 3.);
  q.xy *= rot(k * .45 + gTime * .12 * (mod(k, 2.) * 2. - 1.));
  float m = mod(k, 2.) < .5 ? 2. : 4.2;
  float d = sdSeven(q, 3. + .35 * sin(k * 1.3), m, .035, .05);
  return vec2(d, mod(k, 7.) < .5 ? 3. : 2.);
}

vec2 mapS(vec3 p) {
  if (gS == 0) return map0(p);
  if (gS == 1) return map1(p);
  if (gS == 2) return map2(p);
  if (gS == 3) return map3(p);
  if (gS == 4) return map4(p);
  if (gS == 5) return map5(p);
  if (gS == 6) return map6(p);
  return vec2(1e3, 0.);
}

vec3 normalS(vec3 p, float e) {
  vec2 k = vec2(1, -1);
  return normalize(k.xyy * mapS(p + k.xyy * e).x + k.yyx * mapS(p + k.yyx * e).x +
                   k.yxy * mapS(p + k.yxy * e).x + k.xxx * mapS(p + k.xxx * e).x);
}

/* Cone-traced: a ray "hits" when it passes within one cell's footprint,
   so thin rings and wires never vanish between cells. Lines also leave a
   halo where they were missed narrowly. Returns (t, mat, glow, glowMat). */
vec4 march(vec3 ro, vec3 rd, float tmax) {
  float t = .05, glow = 0., gm = 0.;
  for (int i = 0; i < 128; i++) {
    if (i >= uSteps) break;
    vec2 h = mapS(ro + rd * t);
    float eps = max(.0015, t * gPix);
    if (h.y >= 2.) { float g = 1. - smoothstep(eps, eps * 1.4, h.x); if (g > glow) { glow = g; gm = h.y; } }
    if (h.x < eps) return vec4(t, h.y, glow, gm);
    t += h.x * .9;
    if (t > tmax) break;
  }
  return vec4(-1., 0., glow, gm);
}

/* shade a hit: (intensity, depth, palette, material) */
vec4 shade(vec3 ro, vec3 rd, vec4 h, float tmax, float fog) {
  if (h.x < 0.) return h.z > .35 ? vec4((h.z - .35) * .9, 1., h.w > 2.5 ? .7 : .3, h.w) : vec4(0., 1., .5, 0.);
  vec3 p = ro + rd * h.x;
  gPal = -1.;
  vec2 m = mapS(p);
  float mat = h.y;
  vec3 n = normalS(p, max(.002, h.x * gPix * .5));
  vec3 l = normalize(vec3(-.45, .75, -.5));
  float dif = max(dot(n, l), 0.), rim = pow(1. - max(dot(n, -rd), 0.), 2.5);
  float I = mat > 1.5 ? .95 : .16 + .62 * dif + .55 * rim;
  float pal = mat > 2.5 ? .7 : mat > 1.5 ? .3 : .12 + .18 * n.y + .1 * n.x;
  if (gPal >= 0.) pal = mix(pal, gPal, .7);
  /* per-scene surface detail */
  if (gS == 1) I *= .45 + .55 * step(.42, fract(p.y * .32 - gTime * .7 + gPal * 7.));
  if (gS == 4 && mat < 1.5) I *= .72 + .28 * step(.5, fract((p.x - gC.x) * 2.4));
  I *= exp(-h.x * fog);
  return vec4(I, clamp(h.x / tmax, 0., 1.), pal, mat);
}

float starfield(vec2 c, float dens) {
  float h = h12(c + 13.7);
  if (h > dens * .055) return 0.;
  float tw = .55 + .45 * sin(gTime * (1. + h * 40.) + h * 90.);
  return (.3 + .7 * h12(c + 3.1)) * tw;
}

/* "<a>x<b>": glyph level of character k in the digits family (0 → blank) */
float readout(float k, float a, float b) {
  float na = a >= 100. ? 3. : a >= 10. ? 2. : 1.;
  float nb = b >= 100. ? 3. : b >= 10. ? 2. : 1.;
  if (k < na) return 1. + mod(floor(a / pow(10., na - 1. - k)), 10.);
  if (k < na + 1.) return 14.;
  if (k < na + 1. + nb) return 1. + mod(floor(b / pow(10., nb - 1. - (k - na - 1.))), 10.);
  return 0.;
}

vec2 vert7(float i, float R, float rot0, float sq) {
  float th = i * TAU / 7. + rot0;
  return vec2(sin(th), -cos(th) * sq) * R;
}

float segCells(vec2 p, vec2 a, vec2 b) {
  vec2 pa = (p - a) / uCell, ba = (b - a) / uCell;
  return length(pa - ba * clamp(dot(pa, ba) / max(dot(ba, ba), 1e-4), 0., 1.));
}

/* Seven points flare on a circle of radius R; the heptagon, {7/2} and
   {7/3} then draw edge by edge, counter-rotating, each with two ghosts
   lagging its spin. T is drawing time, spin the rotation, lag how far
   the ghosts trail. The intro uses it; so does the About page. */
vec4 sevens(vec4 res, vec2 d, float T, float spin, float lag, float R, float fade) {
  float sq = .86 + .14 * cos(T * 1.1);
  for (int i = 0; i < 7; i++) {
    float fi = float(i), t0 = .3 + fi * .05;
    if (T < t0) continue;
    if (length(d / uCell - vert7(fi, R, spin, sq) / uCell) < 1.3) {
      float I = (.75 + .25 * (1. - smoothstep(0., .5, T - t0))) * fade;
      if (I > res.x) res = vec4(I, .1, fract(fi * .09 + T * .25), 3.);
    }
  }
  for (int f = 1; f <= 3; f++) {
    float k = float(f), start = .35 + (k - 1.) * .4;
    if (T < start) continue;
    float dir = f == 2 ? -1. : 1.;
    for (int j = 0; j < 3; j++) {
      float fj = float(j);
      float sp = (spin - fj * lag) * dir;
      float gk = j == 0 ? 1. : .42 / fj;
      for (int i = 0; i < 7; i++) {
        float fi = float(i);
        float p = clamp((T - start - fi * .05) / .22, 0., 1.);
        if (p <= 0.) continue;
        vec2 a = vert7(fi, R, sp, sq), b = vert7(fi + k, R, sp, sq);
        if (segCells(d, a, mix(a, b, p)) < .55) {
          float I = (.9 + .1 * k / 3.) * fade * gk;
          if (I > res.x) res = vec4(I, .2, fract(.12 * k + T * .22 + fi * .03 + fj * .14), 2.);
        }
      }
    }
  }
  return res;
}

/* ── page scenes (P5): 2D, drawn in cells around the page's mark ── */

vec4 candleGalaxy(vec2 d, float t) {                     // GRACE: candles on a turning spiral disc
  vec4 r = vec4(0., 1., .5, 0.);
  float R = uAnchor.z * 1.55;
  float spin = gTime * .1 + t * 1.4;
  for (int arm = 0; arm < 3; arm++) {
    for (int k = 0; k < 24; k++) {
      float rk = .1 + float(k) * .039;
      float a = float(arm) * TAU / 3. + spin + 2.3 * log(rk / .1);
      vec2 c = vec2(cos(a), sin(a) * .5) * R * rk;
      vec2 q = d - c;
      if (abs(q.x) > uCell.x * .6) continue;
      vec3 h = h33(vec3(float(arm), float(k), floor(gTime * .25 + float(k) * .07)));
      float scale = .55 + rk;                            // nearer the rim, bigger: a tilted disc
      float body = (1. + 3. * h.x) * uCell.y * .5 * scale, wick = body + (1. + 2. * h.y) * uCell.y * .5;
      float depth = sin(a) < 0. ? .6 : 1.;
      bool up = h.z > .45;
      if (abs(q.y) < body) r = exact(.95 * depth, uRowsA.y, 12. + floor(h.x * 3.99), up ? .82 : .12);
      else if (abs(q.y) < wick && r.x < .5) r = exact(.7 * depth, uRowsA.z, 7., up ? .82 : .12);
    }
  }
  float core = 1. - smoothstep(0., uCell.y * 3., length(d * vec2(.5, 1.)));
  if (core > r.x) r = vec4(core, 0., .55, 3.);
  return r;
}

vec2 graphNode(float i, float R) {                       // Case Base / Partners: a node, drifting
  vec3 h = h33(vec3(i, 11., 3.));
  float a = i * 2.39996 + h.x * .6, rr = .25 + .75 * sqrt(h.y);
  return vec2(cos(a), sin(a) * .62) * R * rr + vec2(sin(gTime * .3 + i), cos(gTime * .27 + i * 1.3)) * uCell.y * .6;
}

vec4 chainGraph(vec2 d) {                                // Case Base: follow the money
  vec4 r = vec4(0., 1., .5, 0.);
  float R = uAnchor.z * 1.35;
  float trace = mod(gTime * .9, 13.);                    // the trace hops node to node
  for (int i = 0; i < 11; i++) {
    float fi = float(i);
    vec2 a = graphNode(fi, R);
    for (int k = 1; k <= 2; k++) {
      if (k == 2 && h12(vec2(fi, 4.)) < .5) continue;
      vec2 b = graphNode(mod(fi + float(k * 3 - 2), 11.), R);
      if (segCells(d, a, b) < .5) {
        bool hot = k == 1 && fi < trace - 1.;
        float I = hot ? .95 : .55;
        if (I > r.x) r = vec4(I, .4, hot ? .5 : .18, hot ? 6. : 2.);
      }
    }
    float dn = length((d - a) / uCell);
    if (dn < 1.6) r = vec4(fi < trace ? 1. : .6, 0., fi == 10. ? .48 : .12, 3.);
    /* a wallet label: 0x and four digits */
    vec2 lc = (d - a) / uCell - vec2(2.5, -.5);
    float lk = floor(lc.x);
    if (abs(lc.y) < .5 && lk >= 0. && lk < 6.) {
      float lv = lk < .5 ? 1. : lk < 1.5 ? 14. : 1. + floor(h12(vec2(fi, lk)) * 9.99);
      r = exact(fi < trace ? .9 : .5, uRowsA.x, lv, fi < trace ? .5 : .18);
    }
  }
  return r;
}

vec4 partnerNet(vec2 d) {                                // Partners: a hub and seven orbiting partners
  vec4 r = vec4(0., 1., .5, 0.);
  float R = uAnchor.z * 1.25;
  vec2 nodes[7];
  for (int i = 0; i < 7; i++) {
    float a = float(i) * TAU / 7. + gTime * .08;
    nodes[i] = vec2(cos(a), sin(a) * .58) * R;
  }
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    vec2 a = nodes[i];
    if (segCells(d, vec2(0.), a) < .5) {
      float u = clamp(dot(d, a) / dot(a, a), 0., 1.);
      float packet = 1. - smoothstep(0., .06, abs(fract(gTime * .35 + fi * .37) - u));
      r = vec4(.4 + .6 * packet, .4, packet > .3 ? .5 : .2, packet > .3 ? 6. : 2.);
    }
    if (segCells(d, a, nodes[(i + 1) % 7]) < .5 && r.x < .3) r = vec4(.28, .5, .12, 2.);
    if (length((d - a) / uCell) < 1.8) r = vec4(.9, 0., .3 + fi * .05, 3.);
  }
  if (length(d / uCell * vec2(1., 1.)) < 3.) r = vec4(1., 0., .55, 3.);
  return r;
}

vec4 shields(vec2 d, float t) {                          // Security: shields that turn against each other
  vec4 r = vec4(0., 1., .5, 0.);
  float R = uAnchor.z * 1.15;
  for (int k = 0; k < 5; k++) {
    float fk = float(k);
    float rk = R * (.3 + fk * .175);
    float rot = (mod(fk, 2.) < .5 ? 1. : -1.) * (gTime * (.07 + fk * .025) + t * 1.2);
    for (int i = 0; i < 7; i++) {
      vec2 a = vert7(float(i), rk, rot, .82), b = vert7(float(i) + 1., rk, rot, .82);
      /* each edge is a plate: trimmed short of the vertices, so the shield reads as armour */
      if (segCells(d, mix(a, b, .14), mix(a, b, .86)) < .55) r = vec4(.95 - fk * .09, .3, .12 + fk * .09, 6.);
    }
  }
  /* the keyhole */
  vec2 kq = d / uCell;
  if (length(kq * vec2(1., 2.) - vec2(0., -2.)) < 3. || (abs(kq.x) < 1.6 - kq.y * .12 && kq.y > -1. && kq.y < 5.)) r = vec4(.95, 0., .5, 1.);
  return r;
}

vec4 render(int s, float t, vec2 uv, vec2 px) {
  gS = s; gT = t;
  vec3 ro, ta, rd;
  vec4 r = vec4(0., 1., .5, 0.);
  vec2 dA = px - uAnchor.xy;
  if (s == 9) return candleGalaxy(dA, t);
  if (s == 10) return chainGraph(dA);
  if (s == 11) return partnerNet(dA);
  if (s == 12) { float Tl = mod(gTime * .7, 9.); return sevens(r, dA, min(Tl, 2.4), gTime * .12, .08, uAnchor.z * 1.2, smoothstep(0., .3, Tl) * (1. - smoothstep(7.6, 8.8, Tl))); }
  if (s == 13) return shields(dA, t);

  if (s == 0) {
    ro = vec3(0., 1.1 + t * 5., 0.);
    ta = ro + vec3(0., -.18 + t * .55, 1.);
    rd = camRay(uv, ro, ta, 0.);
    /* the mandala rides on the hero's mark: placed along the ray through it */
    vec2 ua = (uAnchor.xy - .5 * uView) / uView.y * vec2(1., -1.);
    float D = 7.;
    gC = ro + camRay(ua, ro, ta, 0.) * D;
    gR = (uAnchor.z / uView.y) * D / uFocal;
    float tHit = -1.;
    vec3 oc = ro - gC;
    float b = dot(oc, rd), c = dot(oc, oc) - gR * gR * 2.8;
    if (b * b - c > 0.) {
      vec4 h = march(ro, rd, D + gR * 2.);
      r = shade(ro, rd, h, D + gR * 2., 0.);
      if (r.w > 1.5 && r.w < 2.5) r.z = .14 + .1 * sin(atan(rd.y, rd.x) * 3.);
      tHit = h.x;
    }
    if (rd.y < -.001) {
      float tf = -ro.y / rd.y;
      if (tHit < 0. || tf < tHit) {
        vec3 hp = ro + rd * tf;
        vec2 g = abs(fract(vec2(hp.x, hp.z + gTime * .9) * .5) - .5) * 2.;
        float w = .03 + tf * gPix * 1.4;
        float line = 1. - smoothstep(0., w, min(g.x, g.y));
        float I = line * exp(-tf * .04) * .9;
        if (I > r.x) r = vec4(I * .8, clamp(tf / 60., 0., 1.), MILK, 2.);
      }
    }
    if (uIntroT < INTRO_END) r.x *= smoothstep(4.2, 4.35, uIntroT);
    return r;
  }

  if (s == 1) {
    float a = gTime * .05 + t * 1.5;
    ro = vec3(0., gTime * .6 + t * 26., 0.);
    ta = ro + vec3(sin(a), .45, cos(a));
    rd = camRay(uv, ro, ta, 0.);
    r = shade(ro, rd, march(ro, rd, 40.), 40., .06);
    /* ascending rain: columns of glyphs that fall upward */
    float col = floor(px.x / uCell.x);
    float hc = h12(vec2(col, 7.));
    if (hc > .42) {
      float sp = .5 + h12(vec2(col, 2.)) * 1.2;
      float head = fract(hc * 9.1 + gTime * sp * .12 + t * .8);
      float yb = 1. - px.y / uView.y;
      float d = head - yb, len = .12 + .25 * h12(vec2(col, 4.));
      if (d > 0. && d < len) {
        float I = pow(1. - d / len, 2.) * (d < .012 ? 1.3 : .85);
        if (I > r.x) r = vec4(I, .2, .55 + .3 * hc, 3.);
      }
    }
    return r;
  }

  if (s == 2) {
    ro = vec3(.8, 2.6 - t * .8, gTime * 1.1 + t * 22.);
    ta = ro + vec3(.25 * sin(gTime * .13), -.55, 1.);
    rd = camRay(uv, ro, ta, 0.);
    return shade(ro, rd, march(ro, rd, 26.), 26., .1);
  }

  if (s == 3) {
    ro = vec3(gTime * .3 + 1.6, t * 6. + 1.6, gTime * .6 + t * 10. + 1.6);
    float a = gTime * .03 + t * .9;
    ta = ro + vec3(sin(a), .2 * sin(gTime * .07), cos(a));
    rd = camRay(uv, ro, ta, .1 * sin(gTime * .05));
    return shade(ro, rd, march(ro, rd, 22.), 22., .12);
  }

  if (s == 4) {
    /* three layers of cloud, slower the further away */
    for (int L = 0; L < 3; L++) {
      float fl = float(L);
      vec2 q = uv * (1.6 + fl * .9) + vec2(gTime * .015 * (fl + 1.), t * (.5 + .45 * fl) + fl * 3.7);
      float c = smoothstep(.56, .86, fbm(q * 1.4));
      float I = c * (.28 + .14 * fl);
      if (I > r.x) r = vec4(I, .7 - fl * .2, .35 + .1 * fl, 0.);
    }
    gC = gAnc ? vec3(.8 * sin(gTime * .11), .15 + .15 * sin(gTime * .6), 0.)
               : vec3(mix(-5.2, 5.2, t) + .4 * sin(gTime * .13), 1.5 + .15 * sin(gTime * .6), 0.);
    ro = gAnc ? vec3(0., .5, -6.2) : vec3(0., .6, -8.);
    ta = gAnc ? vec3(0., .15, 0.) : vec3(0., .4, 0.);
    rd = camRay(uv, ro, ta, 0.);
    vec4 sh = shade(ro, rd, march(ro, rd, 16.), 16., 0.);
    if (sh.x > r.x * .6 && sh.w > .5) r = sh;
    return r;
  }

  if (s == 5) {
    float a = gTime * .04 + t * 1.6;
    float rad = 14. - t * 3.5;
    ro = rad * vec3(sin(a), .32 + .25 * t, cos(a));
    ta = vec3(0.);
    rd = camRay(uv, ro, ta, 0.);
    return shade(ro, rd, march(ro, rd, 26.), 26., .045);
  }

  if (s == 6) {
    /* the galaxy behind the gate */
    float rr = length(uv), th = atan(uv.y, uv.x);
    float arms = pow(.5 + .5 * cos(2. * th - 5. * log(rr + .02) + gTime * .25), 3.);
    float gal = (arms * exp(-rr * 2.4) * (.5 + .5 * fbm(uv * 6.)) + exp(-rr * 14.) * .9) * .85;
    r = vec4(gal, 1., .55 + .3 * arms, 0.);
    ro = vec3(0., 0., gTime * 1.6 + t * 36.);
    ta = ro + vec3(0., 0., 1.);
    rd = camRay(uv, ro, ta, gTime * .05);
    vec4 sh = shade(ro, rd, march(ro, rd, 36.), 36., .085);
    if (sh.x > r.x) r = sh;
    return r;
  }

  if (s == 8) {
    /* the membrane: a jump through hyperspace */
    float rr = length(uv), th = atan(uv.y, uv.x);
    float bucket = floor((th + PI) / TAU * 96.);
    float rn = h12(vec2(bucket, 1.));
    if (rn > .3) {
      float f = fract(log(rr + .05) * 1.3 - gTime * (.25 + rn * .6) - t * 2. + rn * 7.);
      float I = smoothstep(.8, 1., f) * smoothstep(.06, .32, rr);
      r = vec4(I, .5, fract(rn * 3.), 2.);
    }
    return r;
  }

  return r;                              // 7: the void is stars alone
}

/* ── the intro: drawn in cells, sized to the window ── */

/* the opening: after the rays meet at the eye, a chamfered slit tears the
   screen open vertically, its chevron ends running off the sides.
   Signed distance in px, positive inside. */
float slit(vec2 d, float T) {
  float k = smoothstep(4.2, 4.95, T);
  float h = k * k * uView.y * .8;
  float xt = uView.x * .5 * (.35 + 2.6 * k);
  return min(h - abs(d.y), (xt - abs(d.x)) * .62 - abs(d.y));
}

vec4 intro(vec4 res, float col, float row, vec2 px) {
  float T = uIntroT;
  vec2 c = uAnchor.xy;
  vec2 d = px - c;
  float R0 = min(uView.x * .45, uView.y * .47);           // the sevens fit the window
  float RG = max(uView.x, uView.y) * .62;                 // the galaxy overflows it
  vec2 cr2 = vec2(uEye.x, uEye.y);

  /* 1. the grid shows itself, a dot every 4 × 2 cells, from the centre out */
  if (mod(col, 4.) < .5 && mod(row, 2.) < .5) {
    float reach = T * 1500.;
    float k = (1. - smoothstep(reach - 220., reach, length(d))) * (1. - smoothstep(2.5, 3.1, T));
    if (k > .01 && res.x < .3 * k) res = vec4(.3 * k, 1., .2, 0.);
  }

  /* 2. a crosshair through the eye, with ticks and live readouts */
  float xf = smoothstep(.08, .3, T) * (1. - smoothstep(3., 3.6, T));
  if (xf > 0.) {
    float cc = cr2.x, cr = cr2.y, reach = T * 150.;
    if (abs(row - cr) < .5 && abs(col - cc) < reach * 2.)
      res = mod(col - cc, 8.) < .5 ? exact(.8 * xf, uRowsA.x, 12., .18) : vec4(.6 * xf, .3, .2, 2.);
    if (abs(col - cc) < .5 && abs(row - cr) < reach)
      res = mod(row - cr, 4.) < .5 ? exact(.8 * xf, uRowsA.x, 12., .18) : vec4(.6 * xf, .3, .2, 2.);
    float k = col - (cc + 3.);
    if (abs(row - (cr - 1.)) < .5 && k >= 0. && T > .45 + k * .045) {
      float lv = readout(k, uGrid.x, uGrid.y - 1.);
      if (lv > 0.) res = exact(.9 * xf, uRowsA.x, lv, .18);
    }
    if (abs(row - (cr + 1.)) < .5 && k >= 0. && k < 5. && T > .6) {
      float ms = floor(min(T, 9.999) * 1000.);
      float lv = k < .5 ? 12. : 1. + mod(floor(ms / pow(10., 4. - k)), 10.);
      res = exact(.75 * xf, uRowsA.x, lv, .18);
    }
  }

  /* 3. seven points flare; the sevens draw edge by edge, spin faster and
        faster with motion trails, and collapse onto the eye */
  float fade = 1. - smoothstep(3.4, 4., T);
  if (fade > 0.) res = sevens(res, d, T, .1 * T * T, .045 * T, mix(R0, uAnchor.z * 1.45, smoothstep(2.75, 3.35, T)), fade);

  /* 4. the galaxy: a vortex larger than the window. Particles in log-polar
        cells, with differential rotation (the inner orbits whip round) and
        rainbow trails drawn back along their orbits */
  float gi = smoothstep(1.2, 1.7, T) * (1. - smoothstep(3.25, 3.65, T));
  if (gi > 0.) {
    vec2 q = d / RG;
    float rr = length(q), th = atan(q.y, q.x);
    float lr = log(rr + .03);
    float omega = 1.5 / (rr + .22);
    float spin = T * T * .32 * omega;
    float kk = mix(1.2, 4., smoothstep(1.2, 3.3, T));
    float rin = mix(1.25, .05, smoothstep(1.2, 3.45, T));
    float band = smoothstep(rin, rin + .12, rr) * (1. - smoothstep(rin + .95, rin + 1.3, rr));
    float best = 0., bpal = 0., head = 0.;
    for (int j = 0; j < 8; j++) {
      float fj = float(j);
      float a = th + spin - fj * .05 * (1. + omega * .35);
      vec2 g = vec2(lr * 8., a * 10. / PI);
      vec2 id = floor(g);
      vec3 h = h33(vec3(id, 5.));
      float arm = pow(.5 + .5 * cos(2. * (id.y + .5) * PI / 10. - kk * (id.x + .5) / 8.), 3.);
      if (h.x > .18 + .7 * arm) continue;
      vec2 f = fract(g) - (.2 + h.yz * .6);
      float I = (1. - smoothstep(.1, .32, length(f))) * (1. - fj / 8.);
      if (I > best) { best = I; bpal = fract(h.x * 2.7 + fj * .07 + T * .2); head = j == 0 ? 1. : 0.; }
    }
    float I = best * band * gi;
    if (I > res.x * .9) res = vec4(I, .5, bpal, head > .5 ? 3. : 0.);
  }

  /* 5. a singularity: everything falls into the centre, and the eye forms there */
  float si = smoothstep(2.5, 2.9, T) * (1. - smoothstep(3.25, 3.5, T));
  if (si > 0.) {
    float rc = mix(8., 1.5, smoothstep(2.6, 3.3, T)) * (1. + .15 * sin(T * 40.));
    float dc = length(d / uCell.y);
    float I = si * (1. - smoothstep(rc * .4, rc, dc));
    if (I > res.x) res = vec4(I, 0., fract(.6 + T * .5), 3.);
  }

  /* 6. two rays race in from the sides along the eye's row and meet at it:
        white heads, pink to purple bodies, orange sparks thrown off */
  float rk = smoothstep(3.92, 4.2, T), rf = 1. - smoothstep(4.3, 4.55, T);
  if (rk > 0. && rf > 0.) {
    float halfW = uView.x * .5;
    float head = halfW * (1. - rk);
    float ry = abs(row - cr2.y);
    float ax = abs(d.x);
    if (ry < 1.5 && ax > head - uCell.x) {
      float tail = clamp((ax - head) / (halfW * .6), 0., 1.);
      bool hot = ax - head < uCell.x * 5.;
      float I = (ry < .5 ? 1. : .62) * (1. - .45 * tail) * rf;
      res = vec4(I, 0., hot ? MILK : mix(.37, .13, tail), 6.);
    } else if (ry < 5. && ax > head && h12(vec2(col, row) + floor(T * 30.)) < .09 * (1. - ry / 5.) * rf) {
      res = vec4(.85, 0., .48, 3.);
    }
  }
  /* the meeting: a white flash at the eye */
  float fl = smoothstep(4.15, 4.22, T) * (1. - smoothstep(4.22, 4.45, T));
  if (fl > 0.) {
    float dc = length(d / uCell.y);
    float rr = mix(2., 18., smoothstep(4.18, 4.45, T));
    float I = fl * (1. - dc / rr);
    if (I > res.x * .5 && dc < rr) res = vec4(I, 0., MILK, 3.);
  }
  /* 7. the slit's edges: a white core, pink and purple bands, orange
        splashes, rows tearing sideways while it opens */
  if (T > 4.2 && T < 4.98) {
    float k = smoothstep(4.2, 4.95, T);
    vec2 dg = d + vec2((h12(vec2(row, floor(T * 30.))) - .5) * uCell.x * 10. * (1. - k), 0.);
    float sd = slit(dg, T) / uCell.y;
    if (sd > -.5 && sd < 3.) {
      float band = sd < 1. ? 0. : sd < 2. ? 1. : 2.;
      float pal = band < .5 ? MILK : band < 1.5 ? .37 : .13;
      if (h12(vec2(col, row) + floor(T * 20.)) < .1) pal = .48;
      res = vec4(band < .5 ? 1. : .8 - band * .15, 0., pal, 6.);
    }
    /* HUD ticks marching along the outside of the edge, scanlines just inside it */
    else if (sd > -2.6 && sd <= -.5 && mod(col + floor(T * 24.), 10.) < 1.) res = vec4(.7, 0., .37, 6.);
    else if (sd >= 3. && sd < 9. && mod(row, 2.) < .5 && res.x < .3) res = vec4(.4 * (1. - (sd - 3.) / 6.), 0., mod(row, 4.) < .5 ? .13 : .37, 6.);
  }
  return res;
}

bool eyeBit(float x, float y) {
  int r = int(y);
  int b = r == 0 || r == 4 ? 28 : r == 2 ? 65 : 34;      // --***--  -*---*-  *-----*
  return ((b >> (6 - int(x))) & 1) == 1;
}

/* the 8-bit eye, in blocks of 2P × P cells, assembled by the intro */
vec4 eye(vec4 res, float col, float row) {
  float P = uEye.z;
  float ex = col - (uEye.x - 7. * P), ey = row - (uEye.y - floor(2.5 * P));
  if (ex < 0. || ex >= 14. * P || ey < 0. || ey >= 5. * P) return res;
  float T = uIntroT;
  if (T < 3.15) return res;
  float ix = floor(ex / (2. * P)), iy = floor(ey / P);
  float b = uEye.w;
  bool on = eyeBit(ix, iy);
  if (abs(iy - 2.) > 2. * (1. - b) + .01) on = false;
  if (b > .8 && iy == 2.) on = true;
  bool pupil = b < .5 && ix == 3. + uPupil.x && iy == 2. + uPupil.y;
  on = on || pupil;
  float ta = 3.2 + h12(vec2(ix, iy) + 4.1) * .45;
  bool here = T >= INTRO_END || T > ta + h12(vec2(col, row)) * .18;
  if (!here) return res;
  if (!on) return vec4(0., 1., .5, 0.);                 // keep the eye clear
  float flash = T < INTRO_END ? 1. - smoothstep(0., .25, T - ta) : 0.;
  float I = .86 + .14 * sin(gTime * 1.7 + (ix + iy) * .8);
  float pal = pupil ? .62 : .04 + .5 * (ix / 6. * .65 + iy / 4. * .35);
  return vec4(I, 0., pal, flash > .3 ? 3. : 4.);
}

void main() {
  vec2 cell = floor(gl_FragCoord.xy);
  float rowT = uGrid.y - 1. - cell.y;                   // grid row, from the top
  float docRow = uRowBase + rowT;
  vec2 px = vec2((cell.x + .5) * uCell.x, (rowT + .5) * uCell.y - uOff);
  vec2 uv = (px - .5 * uView) / uView.y * vec2(1., -1.);
  bool sideB = h12(cell + 7.3) < uMix;
  int s = sideB ? uSceneB : uSceneA;
  float t = sideB ? uTB : uTA;
  /* an anchored scene is framed on the page's mark instead of the window */
  gAnc = (sideB ? uAncB : uAncA) == 1;
  if (gAnc) uv = (uv - (uAnchor.xy - .5 * uView) / uView.y * vec2(1., -1.)) * (.42 / max(uAnchor.z / uView.y, .05));
  gTime = uTime;
  gPix = (uCell.y / uView.y) / uFocal * .5;
  vec4 r = render(s, t, uv, px);
  float st = starfield(vec2(cell.x, docRow), sideB ? uStarsB : uStarsA);
  if (r.x < .06 && st > 0.) r = vec4(st * .8, 1., h12(cell + 1.7) < .7 ? MILK : .6 + .3 * h12(cell), 0.);
  /* while the slit opens, only what is inside it exists */
  if (uIntroT > 4.2 && uIntroT < 4.95 && slit(px - uAnchor.xy, uIntroT) < 0.) r = vec4(0., 1., .5, 0.);
  if (uIntroT < INTRO_END) r = intro(r, cell.x, docRow, px);
  if (uEye.z > 0.) r = eye(r, cell.x, docRow);
  o = vec4(clamp(r.x, 0., 1.), clamp(r.y, 0., 1.), (r.w > 4.5 && r.w < 5.5) || r.z >= MILK ? r.z : fract(r.z), r.w / 6.);
}`,g=`#version 300 es
precision highp float;
precision highp int;
uniform sampler2D uCosmos;
uniform sampler2D uGuard;
uniform sampler2D uLattice;
uniform sampler2D uMsg;
uniform vec2 uGrid;
uniform vec2 uCell;
uniform float uViewH;
uniform float uOff;
uniform ivec4 uFamA;
uniform ivec4 uFamB;
uniform float uMix;
uniform float uWarp;
uniform float uReach;
uniform vec4 uPtr;
uniform vec4 uRing;
uniform int uRingMode;
uniform float uRingSeed;
uniform float uScroll;
uniform float uGuardH;
uniform float uGuardAmt;
uniform float uGamma;
uniform float uEdge;
uniform float uStrength;
uniform float uFloor;
uniform float uTime;
uniform int uDir;
uniform int uLensFam;
uniform int uGeoFam;
uniform int uMarkFam;
uniform int uDigitFam;
uniform int uArcana;
uniform int uOrn;
uniform float uRowBase;
uniform float uMsgRows;
uniform float uRevealAll;
uniform vec4 uBorder;
uniform float uIris;
uniform float uIrisRot;
uniform float uMenu;
uniform vec2 uNodes[7];
uniform int uHot;
out vec4 o;
${m}

float I_at(ivec2 c) { return texelFetch(uCosmos, clamp(c, ivec2(0), ivec2(uGrid) - 1), 0).r; }

/* a direction glyph for a line at angle a (y up). Tiers: 0 ascii, 1 box, 2 heavy */
int dirGlyph(float a, int tier) {
  float k = mod(floor(a / (PI * .25) + .5), 4.);
  int s = k < .5 ? 1 : k < 1.5 ? 4 : k < 2.5 ? 3 : 2;   // dash, slash, bar, backslash
  return uDir * 16 + tier * 4 + s;
}

float segCells(vec2 p, vec2 a, vec2 b) {
  vec2 pa = (p - a) / uCell, ba = (b - a) / uCell;
  return length(pa - ba * clamp(dot(pa, ba) / max(dot(ba, ba), 1e-4), 0., 1.));
}

void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  vec2 cf = vec2(c);
  vec4 s = texelFetch(uCosmos, c, 0);
  int mat = int(s.a * 6. + .5);
  vec2 px = vec2((cf.x + .5) * uCell.x, (uGrid.y - .5 - cf.y) * uCell.y - uOff);
  float docY = uScroll + px.y;
  float docRow = uRowBase + (uGrid.y - 1. - cf.y);
  float gd = texture(uGuard, vec2((cf.x + .5) / uGrid.x, docY / uGuardH)).r;
  int msg = docRow >= 0. && docRow < uMsgRows ? int(texelFetch(uMsg, ivec2(c.x, int(docRow)), 0).r * 255. + .5) : 0;

  /* the lens: where the cursor is, and how far into it this cell sits */
  float lensK = 0., lensD = 9.;
  vec2 ld = vec2(0.);
  if (uPtr.w > .01) {
    ld = (px - uPtr.xy) / uCell.y;
    lensD = length(ld) / uPtr.z;
    lensK = (1. - smoothstep(.72, 1., lensD)) * uPtr.w;
  }

  int idx = 0;
  float lv = 0., pal = s.b, glow = 0.;
  vec4 L = texelFetch(uLattice, c, 0);

  if (L.r > 0.) {
    /* the lattice: circuits drawn by the CPU sim, exact glyphs, never guarded */
    idx = int(L.r * 255. + .5); lv = L.g; pal = L.b; glow = L.a;
  } else if (mat == 4) {
    /* the eye: exact glyphs, no edges, no air, no lens */
    idx = uMarkFam * 16 + 11 + int(h12(cf) * 4.99); lv = s.r; glow = .12;
  } else if (mat == 5) {
    /* an exact glyph, named by the cosmos */
    lv = s.r * (1. - gd * uGuardAmt);
    idx = lv > .02 ? int(s.b * 255. + .5) : 0; pal = s.g;
  } else {
    ivec4 F = h12(cf + 7.3) < uMix ? uFamB : uFamA;
    float tl = I_at(c + ivec2(-1, 1)), tt = I_at(c + ivec2(0, 1)), tr = I_at(c + ivec2(1, 1));
    float ll = I_at(c + ivec2(-1, 0)), rr = I_at(c + ivec2(1, 0));
    float bl = I_at(c + ivec2(-1, -1)), bb = I_at(c + ivec2(0, -1)), br = I_at(c + ivec2(1, -1));
    float gx = (tr + 2. * rr + br) - (tl + 2. * ll + bl);
    float gy = (tl + 2. * tt + tr) - (bl + 2. * bb + br);
    float g = length(vec2(gx, gy)) * .25;
    /* gradient in pixel space (cells are taller than wide); the contour runs across it */
    float ang = atan(gy / uCell.y, gx / uCell.x) + PI * .5;

    lv = pow(clamp((s.r * uStrength - uFloor) / (1. - uFloor), 0., 1.), uGamma);
    glow = mat == 3 ? .55 * lv : 0.;
    if (mat == 6) mat = 7;                              /* beams: decided below, after the edges */
    int level = int(clamp(lv * 15. + (h12(cf) - .5) * .7, 0., 15.));
    int fam = mat == 0 ? F.x : mat == 1 ? F.y : mat == 2 ? F.z : F.w;
    idx = level > 0 ? fam * 16 + level : 0;
    if (mat == 1 && g > uEdge && lv > .1) idx = dirGlyph(ang, 0);
    if (mat == 2 && lv > .06 && (F.z == uDir || g > uEdge * .5)) idx = dirGlyph(ang, lv > .75 ? 2 : 1);
    if (mat == 7) { idx = dirGlyph(g > .05 ? ang : 0., lv > .7 ? 2 : 1); glow = max(glow, .5 * lv); }

    /* warp: fast scrolling stretches the field radially */
    float w = abs(uWarp);
    if (w > .02) {
      vec2 v = (cf + .5 - uGrid * .5) * uCell;
      float rl = length(v);
      vec2 dc = v / max(rl, 1.);
      float reach = uReach * w * (.3 + .7 * rl / (.5 * uGrid.y * uCell.y));
      float st = 0.;
      for (int k = 1; k <= 12; k++) {
        float fk = float(k);
        if (fk > reach) break;
        st = max(st, I_at(ivec2(cf + (-dc * fk * uCell.y * .9) / uCell)) * (1. - fk / (reach + 1.)));
      }
      st *= w;
      if (st > lv * .9 && st > .12) {
        idx = dirGlyph(atan(dc.y, dc.x), w > .6 ? 2 : 1);
        lv = max(lv, st);
        glow = max(glow, st * w);
      }
    }

    /* the lens, filled to its rim. Every glyph inside turns into a
       hieroglyph or an older symbol in place, keeping its level and colour,
       so the animation carries on in another script. The section's hidden
       runes burn through in sparse, fixed patches, to be found; an aperture
       of ancient glyphs turns at the rim. */
    if (lensD < 1.12 && gd < .5) {
      if (lensD < 1.) {
        if (msg > 0 && vnoise(vec2(cf.x * .07, docRow * .15) + 3.7) > .54) {
          idx = msg;
          lv = max(lv * .25, .95 * lensK);
          pal = .5 + .08 * sin(uTime * 2. + cf.x * .3);
          glow = max(glow, .45 * lensK);
        } else if (idx > 0 && lv > .02) {
          idx = (h12(cf + 4.7) < .55 ? uLensFam : uArcana) * 16 + max(2, idx % 16);
        } else if (h12(cf + floor(uTime * 5.)) < .045 * lensK) {
          idx = uArcana * 16 + 1 + int(h12(cf * 1.3 + floor(uTime * 5.)) * 14.99);
          lv = .4 * lensK;
          pal = .68;
        }
      }
      float ring = 1. - abs(lensD - 1.03) / .075;
      if (ring > 0.) {
        float a = atan(ld.y, ld.x * uCell.x / uCell.y);
        idx = uLensFam * 16 + 1 + int(mod(floor((a + PI) / TAU * 42. + uTime * 3.), 15.));
        lv = .75 * ring * uPtr.w;
        pal = fract(.55 + a / TAU);
        glow = max(glow, .5 * ring * uPtr.w);
      }
    }
    /* the palette's easter egg: every hidden message at once */
    if (uRevealAll > .01 && idx == 0 && msg > 0 && gd < .5 && h12(cf + floor(uTime * 9.)) < uRevealAll * 1.2) {
      idx = msg; lv = .5 * uRevealAll; pal = .5 + .1 * sin(docRow * .3 + uTime * 3.); glow = .3 * uRevealAll;
    }

    /* a click. Binary: a jagged, broken ring of 1s and 0s with cracks
       spidering through it. Ring: a clean ring of geometry. */
    if (uRing.w > .01) {
      vec2 rd = (px - uRing.xy) / uCell.y;
      float len = length(rd);
      if (uRingMode == 0) {
        float a = atan(rd.y, rd.x);
        float R = uRing.z;
        float jag = (vnoise(vec2(a * 2.6 + uRingSeed * 17., uRingSeed * 9.)) - .5) * 5. * min(1., R / 10.);
        bool hit = abs(len - R - jag) < .9 && h12(cf + floor(uTime * 12.)) < .78;
        for (int i = 0; i < 9; i++) {
          float fi = float(i);
          float ai = h12(vec2(fi, uRingSeed * 31.)) * TAU;
          float wob = (vnoise(vec2(len * .3, fi * 3.1 + uRingSeed * 7.)) - .5) * .9;
          float da = abs(mod(a - ai - wob + PI, TAU) - PI);
          float reach = R * (.9 + .5 * h12(vec2(fi, uRingSeed + 4.)));
          if (da * len < .65 && len > R * .25 && len < reach) hit = true;
        }
        if (hit) {
          idx = uDigitFam * 16 + (h12(cf + floor(uTime * 9.)) < .5 ? 1 : 2);
          lv = max(lv, uRing.w);
          glow = max(glow, uRing.w * .6);
          pal = fract(.4 + len * .02);
        }
      } else {
        float e = abs(len - uRing.z);
        if (e < 1.3) {
          float k = (1. - e / 1.3) * uRing.w;
          idx = uGeoFam * 16 + 8 + int(k * 7.);
          lv = max(lv, k);
          glow = max(glow, k);
        }
      }
    }

    /* text blocks dim the field beneath them */
    lv *= 1. - gd * uGuardAmt;
    glow *= 1. - gd;
  }

  /* ── the hero border: a thick ornament around stratum 01. It draws itself
        at the end of the intro and dissolves as the page leaves the hero ── */
  if (uBorder.x > .5) {
    float W = floor(uGrid.x), H = floor(uViewH / uCell.y);
    float vx = cf.x, vy = floor(px.y / uCell.y);
    float dt = vy, db = H - 1. - vy, dl = vx, dr = W - 1. - vx;
    float rv = min(dt, db), rh = floor(min(dl, dr) / max(1., uBorder.w));
    float r = min(rv, rh);
    if (r < 3. && vy >= 0. && vy < H) {
      float P = 2. * (W + 2. * H);
      /* position along the perimeter, clockwise from the top-left corner */
      bool horiz = rv <= rh;
      float sp = horiz ? (dt <= db ? vx : W + 2. * H + (W - 1. - vx))
                       : (dl > dr ? W + vy * 2. : 2. * W + 2. * H + (H - 1. - vy) * 2.);
      float h = h12(vec2(vx, vy) + 11.);
      bool drawn = sp / P < uBorder.z;
      float gone = uBorder.y * 1.25 - .1;
      if (drawn && h > gone) {
        float T = uTime;
        int bi = 0;
        bool corner = rv == rh;
        if (r < .5) {                                    /* outer: a double line */
          bool top = dt <= db, left = dl <= dr;
          bi = corner ? (top ? (left ? 3 : 4) : (left ? 5 : 6)) : horiz ? 1 : 2;
          bi += uOrn * 16;
          lv = .9;
        } else if (r < 1.5) {                            /* middle: diamonds marching clockwise */
          float m = mod(sp - T * 7., 6.);
          bi = m < 1. ? uOrn * 16 + 13 : uOrn * 16 + (horiz ? 7 : 8);
          lv = m < 1. ? .95 : .55;
        } else {                                         /* inner: a zigzag running the other way */
          float z = mod(sp + T * 5. + (horiz ? vy : vx), 2.);
          bi = horiz ? (z < 1. ? uDir * 16 + 4 : uDir * 16 + 2) : uOrn * 16 + (z < 1. ? 14 : 15);
          lv = .5;
        }
        /* two glints lap the frame */
        float glint = smoothstep(.96, 1., cos((sp - T * 34.) * TAU * 2. / P));
        float dissolving = smoothstep(gone, gone + .12, h);
        idx = bi;
        if (dissolving < 1.) idx = uMarkFam * 16 + 1 + int(h12(vec2(vx, vy) + floor(T * 18.)) * 14.);
        lv = min(1., (lv + glint * .5) * (1. - uBorder.y * .45));
        pal = fract(sp / P * 1.5 + T * .04 + r * .12);
        glow = glint * .8 + (1. - dissolving) * .4;
      }
    }
  }

  /* ── the menu: the pages sit on a heptagram; the world dims behind it ── */
  if (uMenu > .01) {
    lv *= 1. - .78 * uMenu;
    glow *= 1. - uMenu;
    for (int i = 0; i < 7; i++) {
      for (int k = 1; k <= 2; k++) {                     /* the heptagon and {7/2}; {7/3} would cross the centre */
        int j = (i + k) % 7;
        vec2 a = uNodes[i], b = uNodes[j];
        if (segCells(px, a, b) < .55) {
          bool hot = i == uHot || j == uHot;
          vec2 dd = b - a;
          float t = clamp(dot(px - a, dd) / dot(dd, dd), 0., 1.);
          float pulse = smoothstep(.94, 1., 1. - abs(fract(uTime * .35 + float(i) * .13 + float(k) * .31) - t) * 6.);
          int gi = dirGlyph(atan(-dd.y, dd.x), hot ? 2 : 1);
          float l = (hot ? .95 : .22 + .06 * float(k)) * uMenu + pulse * .45 * uMenu;
          if (l > lv) { idx = gi; lv = l; pal = hot ? .55 : .12 + .1 * float(k); glow = hot ? .6 : pulse * .6; }
        }
      }
    }
  }

  /* ── the iris: seven glyph blades close over everything ── */
  if (uIris < .999) {
    vec2 vc = vec2(uGrid.x * uCell.x, uViewH) * .5;
    vec2 q = (px - vc) * vec2(1., -1.);                 // y up
    float R = length(vc) * 1.12 * uIris;
    float th = atan(q.y, q.x) + uIrisRot;
    float seg = TAU / 7.;
    float k = floor(th / seg);
    float loc = th - (k + .5) * seg;
    float rq = length(q);
    float dn = rq * cos(loc) - R * cos(PI / 7.);         // distance past the blade's edge
    if (dn > -uCell.y * .5) {
      float edgeDir = (k + .5) * seg - uIrisRot + PI * .5;
      float blade = mod(k + 70., 7.);
      if (dn < uCell.y * 1.1) { idx = dirGlyph(edgeDir, 2); lv = 1.; glow = .7; pal = fract(blade / 7. + .5); }
      else if (abs(abs(loc) - seg * .5) * rq < uCell.x * .9) { idx = dirGlyph(atan(q.y, q.x), 1); lv = .7; glow = 0.; pal = fract(blade / 7. + .3); }
      else {
        float hatch = fract(dn / (uCell.y * 1.7) + blade * .37);
        idx = hatch < .5 ? dirGlyph(edgeDir, 0) : (h12(cf + blade) < .25 ? uDir * 16 + 13 : 0);
        lv = .45 + .25 * (1. - hatch);
        glow = 0.;
        pal = fract(blade / 7. + .1);
      }
    }
  }

  if (lv < .02) idx = 0;
  o = vec4(float(idx) / 255., lv, pal, clamp(glow, 0., 1.));
}`,_=`#version 300 es
precision highp float;
precision highp int;
uniform sampler2D uGlyphs;
uniform sampler2D uAtlas;
uniform vec2 uRes;
uniform ivec2 uCellDev;
uniform int uRows;
uniform float uOffDev;
uniform float uDpr;
uniform float uScroll;
uniform float uStopY[24];
uniform vec3 uStopC[24];
uniform int uStopN;
uniform float uHue;
uniform float uOpacity;
uniform float uLightBoost;
uniform float uTime;
uniform float uGrain;
uniform vec4 uMask[8];
uniform int uMaskN;
out vec4 o;
${m}

vec3 paperAt(float y) {
  vec3 c = uStopN > 0 ? uStopC[0] : vec3(.957, .949, .933);
  for (int i = 1; i < 24; i++) {
    if (i >= uStopN) break;
    if (y >= uStopY[i - 1]) c = mix(uStopC[i - 1], uStopC[i], clamp((y - uStopY[i - 1]) / max(1., uStopY[i] - uStopY[i - 1]), 0., 1.));
  }
  return c;
}

/* the neon ramp: violet → magenta → pink → orange → amber, ping-ponged so the
   hue offset never cuts. Light ground gets the deep, text-safe variants. */
vec3 ramp5(float x, vec3 a, vec3 b, vec3 c, vec3 d, vec3 e) {
  x = clamp(x, 0., 1.) * 4.;
  if (x < 1.) return mix(a, b, x);
  if (x < 2.) return mix(b, c, x - 1.);
  if (x < 3.) return mix(c, d, x - 2.);
  return mix(d, e, x - 3.);
}
vec3 neon(float pos, float dark) {
  float x = pow(1. - abs(fract(pos) * 2. - 1.), 1.5) * .88;
  /* on milk the orange end reads brown: light ground stays violet → pink */
  vec3 L = ramp5(x * .55, vec3(.329, .153, .839), vec3(.557, .102, .682), vec3(.690, .071, .478), vec3(.651, .263, .0), vec3(.541, .353, .0));
  vec3 D = ramp5(x, vec3(.545, .361, 1.), vec3(.839, .235, 1.), vec3(1., .239, .682), vec3(1., .478, .102), vec3(1., .69, .125));
  return mix(L, D, dark);
}

float maskAt(vec2 f) {
  float m = 1.;
  for (int k = 0; k < 8; k++) {
    if (k >= uMaskN) break;
    vec4 r = uMask[k];
    float outside = max(max(r.x - f.x, f.x - r.z), max(r.y - f.y, f.y - r.w));
    m *= smoothstep(0., 18. * uDpr, outside);
  }
  return m;
}

void main() {
  vec2 fd = gl_FragCoord.xy;
  vec2 ft = vec2(fd.x, uRes.y - fd.y);                 // device px, y down
  float docY = ft.y / uDpr + uScroll;
  vec3 paper = paperAt(docY);
  float lum = dot(paper, vec3(.2126, .7152, .0722));
  float dark = smoothstep(.72, .22, lum);
  float mk = maskAt(ft);
  vec3 col = paper;

  /* the grid moves with the document: row 0 starts uOffDev above the viewport */
  float yT = ft.y + uOffDev;
  int rr = int(floor(yT / float(uCellDev.y)));
  ivec2 cell = ivec2(int(fd.x) / uCellDev.x, uRows - 1 - rr);
  vec4 g = texelFetch(uGlyphs, cell, 0);
  int idx = int(g.r * 255. + .5);
  if (idx > 0) {
    ivec2 inC = ivec2(int(fd.x) - cell.x * uCellDev.x, int(yT) - rr * uCellDev.y);
    ivec2 tile = ivec2(idx % 16, idx / 16);
    float ink = texelFetch(uAtlas, tile * uCellDev + inC, 0).a;
    vec3 gc = g.b > .985 ? mix(vec3(.30, .29, .33), vec3(.925, .918, .902), dark) : neon(g.b + uHue, dark);
    vec3 hot = mix(vec3(.62, .05, .38), vec3(1., .88, .96), dark);
    gc = mix(gc, hot, g.a * .45);
    float a = ink * g.g * uOpacity * (1. + uLightBoost * (1. - dark)) * mk;
    col = mix(col, gc, clamp(a, 0., 1.));
  }

  col += (h12(fd + fract(uTime * 7.) * 100.) - .5) * uGrain * (.5 + dark);
  o = vec4(col, 1.);
}`;function v(e,t,n,r){let i=e.createShader(t);if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i);throw e.deleteShader(i),Error(`[7s] ${r}: ${t}`)}return i}function y(e,t,n){let r=e.createProgram();if(e.attachShader(r,v(e,e.VERTEX_SHADER,p,`${n}.vert`)),e.attachShader(r,v(e,e.FRAGMENT_SHADER,t,`${n}.frag`)),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(`[7s] ${n}: ${e.getProgramInfoLog(r)}`);let i={},a=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let t=0;t<a;t++){let n=e.getActiveUniform(r,t).name.replace(/\[0\]$/,``);i[n]=e.getUniformLocation(r,n)}return{p:r,u:i}}function b(e){if(new URLSearchParams(location.search).has(`nogl`))return null;let t=e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`});if(!t)return null;let n,r,i;try{n=y(t,h,`cosmos`),r=y(t,g,`glyphize`),i=y(t,_,`compose`)}catch(e){return console.warn(e),null}let a=e=>{let n=t.createTexture();return t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n},o=a(t.NEAREST),s=a(t.NEAREST),c=a(t.NEAREST),l=a(t.LINEAR),u=a(t.NEAREST),d=a(t.NEAREST),f=t.createFramebuffer(),p=t.createFramebuffer(),m=t.createVertexArray();t.bindTexture(t.TEXTURE_2D,l),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.R8,1,1,0,t.RED,t.UNSIGNED_BYTE,new Uint8Array(1)),t.bindTexture(t.TEXTURE_2D,d),t.texImage2D(t.TEXTURE_2D,0,t.R8,1,1,0,t.RED,t.UNSIGNED_BYTE,new Uint8Array(1));let v=1,b={w:1,h:1,cols:1,rows:1,cellDev:[1,1],atlas:document.createElement(`canvas`)},x=(e,n)=>{t.bindTexture(t.TEXTURE_2D,n),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,b.cols,b.rows,0,t.RGBA,t.UNSIGNED_BYTE,null),t.bindFramebuffer(t.FRAMEBUFFER,e),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.bindFramebuffer(t.FRAMEBUFFER,null)},S=(e,n,r)=>{t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,n),t.uniform1i(r??null,e)},C=1;return{kind:`webgl2`,maxTexture:t.getParameter(t.MAX_TEXTURE_SIZE),resize(n){b=n,e.width=n.w,e.height=n.h,x(f,o),x(p,s),t.bindTexture(t.TEXTURE_2D,u),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,n.cols,n.rows,0,t.RGBA,t.UNSIGNED_BYTE,null),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.bindTexture(t.TEXTURE_2D,c),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,t.RGBA,t.UNSIGNED_BYTE,n.atlas)},guard(e,n,r){t.bindTexture(t.TEXTURE_2D,l),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.R8,n,r,0,t.RED,t.UNSIGNED_BYTE,e)},messages(e,n,r){t.bindTexture(t.TEXTURE_2D,d),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texImage2D(t.TEXTURE_2D,0,t.R8,n,r,0,t.RED,t.UNSIGNED_BYTE,e),v=r},lattice(e){t.bindTexture(t.TEXTURE_2D,u),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texSubImage2D(t.TEXTURE_2D,0,0,0,b.cols,b.rows,t.RGBA,t.UNSIGNED_BYTE,e)},draw(e,a,h,g,_){t.bindVertexArray(m);let y=[b.cellDev[0]/h.dpr,b.cellDev[1]/h.dpr];if(C=a.guardH,e){t.bindFramebuffer(t.FRAMEBUFFER,f),t.viewport(0,0,b.cols,b.rows),t.useProgram(n.p);let r=n.u;t.uniform2f(r.uGrid,b.cols,b.rows),t.uniform2f(r.uCell,y[0],y[1]),t.uniform2f(r.uView,e.view[0],e.view[1]),t.uniform1f(r.uTime,e.time),t.uniform1i(r.uSceneA,e.sceneA),t.uniform1i(r.uSceneB,e.sceneB),t.uniform1f(r.uTA,e.tA),t.uniform1f(r.uTB,e.tB),t.uniform1f(r.uMix,e.mix),t.uniform1f(r.uStarsA,e.starsA),t.uniform1f(r.uStarsB,e.starsB),t.uniform3f(r.uAnchor,e.anchor[0],e.anchor[1],e.anchor[2]),t.uniform1f(r.uFocal,e.focal),t.uniform1i(r.uSteps,e.steps),t.uniform1f(r.uOff,e.off),t.uniform1f(r.uRowBase,e.rowBase),t.uniform4f(r.uEye,...e.eye),t.uniform2f(r.uPupil,...e.pupil),t.uniform1f(r.uIntroT,e.introT),t.uniform1i(r.uAncA,e.ancA),t.uniform1i(r.uAncB,e.ancB),t.uniform4i(r.uRowsA,...e.rows),t.drawArrays(t.TRIANGLES,0,3)}t.bindFramebuffer(t.FRAMEBUFFER,p),t.viewport(0,0,b.cols,b.rows),t.useProgram(r.p);let x=r.u;S(0,o,x.uCosmos),S(1,l,x.uGuard),S(2,u,x.uLattice),S(3,d,x.uMsg),t.uniform1f(x.uRowBase,a.rowBase),t.uniform1f(x.uMsgRows,v),t.uniform1i(x.uArcana,a.arcana),t.uniform1i(x.uOrn,a.orn),t.uniform1f(x.uRevealAll,a.revealAll),t.uniform4f(x.uBorder,...a.border),t.uniform1f(x.uIris,a.iris),t.uniform1f(x.uIrisRot,a.irisRot),t.uniform1f(x.uMenu,a.menu),t.uniform2fv(x.uNodes,a.nodes),t.uniform1i(x.uHot,a.hot),t.uniform2f(x.uGrid,b.cols,b.rows),t.uniform2f(x.uCell,y[0],y[1]),t.uniform1f(x.uViewH,b.h/h.dpr),t.uniform1f(x.uOff,a.off),t.uniform4i(x.uFamA,...a.famA),t.uniform4i(x.uFamB,...a.famB),t.uniform1f(x.uMix,_),t.uniform1f(x.uWarp,a.warp),t.uniform1f(x.uReach,a.reach),t.uniform4f(x.uPtr,...a.ptr),t.uniform4f(x.uRing,...a.ring),t.uniform1i(x.uRingMode,a.ringMode),t.uniform1f(x.uRingSeed,a.ringSeed),t.uniform1f(x.uScroll,a.scroll),t.uniform1f(x.uGuardH,C),t.uniform1f(x.uGuardAmt,a.guardAmt),t.uniform1f(x.uGamma,a.gamma),t.uniform1f(x.uEdge,a.edge),t.uniform1f(x.uStrength,a.strength),t.uniform1f(x.uFloor,a.floor),t.uniform1f(x.uTime,g),t.uniform1i(x.uDir,a.dir),t.uniform1i(x.uLensFam,a.lensFam),t.uniform1i(x.uGeoFam,a.geoFam),t.uniform1i(x.uMarkFam,a.markFam),t.uniform1i(x.uDigitFam,a.digitFam),t.drawArrays(t.TRIANGLES,0,3),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,b.w,b.h),t.useProgram(i.p),x=i.u,S(0,s,x.uGlyphs),S(1,c,x.uAtlas),t.uniform2f(x.uRes,b.w,b.h),t.uniform2i(x.uCellDev,b.cellDev[0],b.cellDev[1]),t.uniform1i(x.uRows,b.rows),t.uniform1f(x.uOffDev,h.offDev),t.uniform1f(x.uDpr,h.dpr),t.uniform1f(x.uScroll,a.scroll),t.uniform1fv(x.uStopY,h.stopY),t.uniform3fv(x.uStopC,h.stopC),t.uniform1i(x.uStopN,h.stopN),t.uniform1f(x.uHue,h.hue),t.uniform1f(x.uOpacity,h.opacity),t.uniform1f(x.uLightBoost,h.lightBoost),t.uniform1f(x.uTime,g),t.uniform1f(x.uGrain,h.grain),t.uniform4fv(x.uMask,h.masks),t.uniform1i(x.uMaskN,h.maskN),t.drawArrays(t.TRIANGLES,0,3)},warm(){t.bindVertexArray(m);for(let[e,a,o,s]of[[n,f,b.cols,b.rows],[r,p,b.cols,b.rows],[i,f,b.cols,b.rows]])t.bindFramebuffer(t.FRAMEBUFFER,a),t.viewport(0,0,o,s),t.useProgram(e.p),t.drawArrays(t.TRIANGLES,0,3);t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,b.w,b.h),t.clearColor(.09,.106,.129,1),t.clear(t.COLOR_BUFFER_BIT),t.finish()},destroy(){for(let e of[o,s,c,l,u,d])t.deleteTexture(e);t.deleteFramebuffer(f),t.deleteFramebuffer(p);for(let e of[n,r,i])t.deleteProgram(e.p)}}}var x=`main h1, main h2, main h3, main h4, main p, main li, main blockquote, main pre, main table, main dl, main figure, main summary, main label, main input, main select, main textarea, main .btn, main .btn-bracket, main .chips, footer h2, footer p, footer li, footer .wordmark, footer .btn, [data-ss-guard], [data-ss-frame]`;function S(e,t,n,r){let i=document.documentElement.scrollHeight,a=Math.min(r,Math.max(1,Math.ceil(i/n))),o=i/a,s=new Uint8Array(e*a),c=window.scrollX,l=window.scrollY;for(let n of document.querySelectorAll(x)){if(n.matches(`[data-ss-mark]:not(pre)`)||n.closest(`[aria-hidden="true"]`)&&!n.matches(`pre, .wordmark`))continue;let r=n.getBoundingClientRect();if(r.width<1||r.height<1||getComputedStyle(n).visibility===`hidden`)continue;let i=Math.max(0,Math.floor((r.left+c)/t)),u=Math.min(e-1,Math.floor((r.right+c)/t)),d=Math.max(0,Math.floor((r.top+l)/o)),f=Math.min(a-1,Math.floor((r.bottom+l)/o));for(let t=d;t<=f;t++)s.fill(255,t*e+i,t*e+u+1)}let u=new Uint8Array(s.length);for(let t=0;t<a;t++)for(let n=0;n<e;n++){let r=0,i=0;for(let o=-1;o<=1;o++){let c=t+o;if(!(c<0||c>=a))for(let t=-1;t<=1;t++){let a=n+t;a<0||a>=e||(r+=s[c*e+a],i++)}}let o=t*e+n;u[o]=Math.max(s[o],Math.round(r/i*.85))}let d=new Uint8Array(s.length);for(let e=0;e<s.length;e++)d[e]=+!!s[e];return{data:u,solid:d,cols:e,rows:a,docH:i}}var C=[1,1,0,-1,-1,-1,0,1],w=[0,1,1,1,0,-1,-1,-1],T=1,E=4,D=16,O=64,k={EMPTY:0,FREE:1,FRAME:2,LINK:3,PAD:4},A=255,j=class{cfg;hooks;reduced;cols=0;rows=0;cw=1;ch=1;kind=new Uint8Array;conn=new Uint8Array;pal=new Uint8Array;life=new Float32Array;born=new Float32Array;glow=new Float32Array;blocked=new Uint8Array;glowing=new Set;free=new Set;tips=[];pulses=[];frames=[];links=[];io=null;t=0;seedIn=1;sproutIn=2;reachCool=0;reaches=0;attractCool=new Map;view={top:0,bottom:0};circuit=0;constructor(e,t,n){this.cfg=e,this.hooks=t,this.reduced=n,this.circuit=r(`circuit`)*16}build(e,t,n,r,i){let a=this.cols===e&&this.kind.length?{cells:[...this.free].map(e=>({i:e,k:this.kind[e],c:this.conn[e],p:this.pal[e],l:this.life[e],b:this.born[e]})),tips:this.tips}:null;this.cols=e,this.rows=t,this.cw=n,this.ch=r;let o=e*t;this.kind=new Uint8Array(o),this.conn=new Uint8Array(o),this.pal=new Uint8Array(o),this.life=new Float32Array(o),this.born=new Float32Array(o),this.glow=new Float32Array(o),this.blocked=i&&i.length===o?i:new Uint8Array(o),this.glowing.clear(),this.free.clear(),this.tips=[],this.pulses=[];let s=[...document.querySelectorAll(`[data-ss-frame]`)],c=new Map(this.frames.map(e=>[e.el,e]));this.frames=s.map(e=>{let t=c.get(e),{path:n,corners:r}=this.perimeter(e);return{el:e,path:n,corners:r,g:0,state:t?.state===`closed`?`closed`:`idle`,lit:t?.lit??!1,t0:0}});for(let e of this.frames)(e.state===`closed`||this.reduced)&&this.closeNow(e);if(this.links=[],this.tryLinks(!0),this.observe(),a){for(let{i:e,k:t,c:n,p:r,l:i,b:s}of a.cells)e>=o||this.blocked[e]||this.kind[e]!==k.EMPTY||(this.kind[e]=t,this.conn[e]=n,this.pal[e]=r,this.life[e]=i,this.born[e]=s,this.free.add(e));this.tips=a.tips.filter(n=>n.y<t&&!this.blocked[n.y*e+n.x])}}perimeter(e){let t=e.getBoundingClientRect();if(t.width<1||t.height<1)return{path:[],corners:[]};let n=window.scrollY,r=Math.max(0,Math.floor(t.left/this.cw)-1),i=Math.min(this.cols-1,Math.ceil(t.right/this.cw)),a=Math.max(0,Math.floor((t.top+n)/this.ch)-1),o=Math.min(this.rows-1,Math.ceil((t.bottom+n)/this.ch));if(i-r<2||o-a<2)return{path:[],corners:[]};let s=[],c=(e,t)=>t*this.cols+e;for(let e=r;e<=i;e++)s.push(c(e,a));for(let e=a+1;e<=o;e++)s.push(c(i,e));for(let e=i-1;e>=r;e--)s.push(c(e,o));for(let e=o-1;e>a;e--)s.push(c(r,e));let l=i-r,u=o-a;return{path:s,corners:[0,l,l+u,2*l+u]}}observe(){if(this.io?.disconnect(),!this.reduced){this.io=new IntersectionObserver(e=>{for(let t of e){if(!t.isIntersecting)continue;let e=this.frames.find(e=>e.el===t.target);e&&e.state===`idle`&&(e.state=`growing`,e.g=0,e.t0=this.t)}},{rootMargin:`0px 0px -10% 0px`,threshold:.15});for(let e of this.frames)e.state===`idle`&&this.io.observe(e.el)}}block(e,t,n,r){for(let i=Math.max(0,t);i<=Math.min(this.rows-1,r);i++)for(let t=Math.max(0,e);t<=Math.min(this.cols-1,n);t++){let e=i*this.cols+t;this.blocked[e]=1,this.kind[e]!==k.EMPTY&&this.clear(e)}}dirBetween(e,t){let n=Math.sign(t%this.cols-e%this.cols),r=Math.sign(Math.floor(t/this.cols)-Math.floor(e/this.cols));for(let e=0;e<8;e++)if(C[e]===n&&w[e]===r)return e;return-1}join(e,t){let n=this.dirBetween(e,t);n<0||(this.conn[e]|=1<<n,this.conn[t]|=1<<(n+4)%8)}place(e,t,n=A,r=1){(this.kind[e]===k.EMPTY||t>this.kind[e])&&(this.kind[e]=t),this.life[e]=1,this.born[e]=this.t,this.pal[e]=n,this.light(e,r),t===k.FREE||t===k.PAD?this.free.add(e):this.free.delete(e)}light(e,t){t<=0||(this.glow[e]=Math.max(this.glow[e],t),this.glowing.add(e))}clear(e){let t=this.conn[e];for(let n=0;n<8;n++){if(!(t&1<<n))continue;let r=e%this.cols+C[n],i=Math.floor(e/this.cols)+w[n];r>=0&&r<this.cols&&i>=0&&i<this.rows&&(this.conn[i*this.cols+r]&=~(1<<(n+4)%8))}this.kind[e]=k.EMPTY,this.conn[e]=0,this.glow[e]=0,this.free.delete(e),this.glowing.delete(e)}glyph(e){if(this.kind[e]===k.PAD)return this.circuit+14;let t=this.conn[e],n=t&T,r=t&E,i=t&D,a=t&O,o=this.circuit;if(!(n|r|i|a)){let e=t&136,n=t&34;return e&&n?o+11:e?o+12:n?o+13:o+15}return n&&i&&a&&r?o+11:a&&r&&n&&!i?o+7:a&&r&&i&&!n?o+8:n&&i&&r&&!a?o+9:n&&i&&a&&!r?o+10:n&&r&&!i&&!a?o+3:i&&r&&!n&&!a?o+4:a&&n&&!i&&!r?o+5:a&&i&&!n&&!r?o+6:n||i?o+1:o+2}closeNow(e){for(let t=0;t<e.path.length;t++)this.place(e.path[t],k.FRAME,A,0),t>0&&this.join(e.path[t-1],e.path[t]);e.path.length>1&&this.join(e.path[e.path.length-1],e.path[0]),e.state=`closed`,e.lit||(e.lit=!0,this.hooks.lit(e.el))}growFrame(e,t){let n=e.path.length;if(!n){e.state=`closed`,e.lit||(e.lit=!0,this.hooks.lit(e.el));return}if(this.t-e.t0<.16){for(let t of e.corners)this.place(e.path[t],k.FRAME,210,1);return}let r=Math.floor(e.g);e.g+=t*this.cfg.lattice.frameSpeed;let i=Math.floor(e.g),a=e.corners,o=!0;for(let t=0;t<4;t++){let s=a[t],c=t<3?a[t+1]:n,l=(c-s)/2;for(let t=r;t<=Math.min(i,Math.ceil(l));t++){let r=s+t,i=c-t;r<=s+l&&r<n&&(this.place(e.path[r%n],k.FRAME,A,1),t>0&&this.join(e.path[(r-1)%n],e.path[r%n])),i>=s+l&&i>s&&(this.place(e.path[i%n],k.FRAME,A,1),t>0&&this.join(e.path[(i+1)%n],e.path[i%n]))}i<l&&(o=!1)}if(o){for(let t=0;t<n;t++)this.join(e.path[t],e.path[(t+1)%n]);e.state=`closed`,this.pulses.push({path:e.path,pos:0,speed:this.cfg.lattice.pulseSpeed*2.2,loop:!1,pal:92,end:n}),window.setTimeout(()=>{e.lit||(e.lit=!0,this.hooks.lit(e.el))},260),this.tryLinks(!1)}}tryLinks(e){for(let t of this.frames){let n=t.el.dataset.ssLink;if(n&&t.state===`closed`)for(let r of n.split(`,`)){let n=document.querySelector(r.trim()),i=this.frames.find(e=>e.el===n);if(!i||i.state!==`closed`||this.links.some(e=>e.from===t&&e.to===i))continue;let a=this.route(t,i);if(a.length<2)continue;let o={from:t,to:i,path:a,g:0,done:!1,nextPacket:1+Math.random()*2};this.links.push(o),(e||this.reduced)&&this.finishLink(o)}}}route(e,t){let n=e=>{let t=1e9,n=-1,r=1e9,i=-1;for(let a of e.path){let e=a%this.cols,o=Math.floor(a/this.cols);t=Math.min(t,e),n=Math.max(n,e),r=Math.min(r,o),i=Math.max(i,o)}return{x0:t,x1:n,y0:r,y1:i,cx:t+n>>1,cy:r+i>>1}},r=n(e),i=n(t),a,o,s,c;r.x1<i.x0?(a=r.x1,o=r.cy,s=i.x0,c=i.cy):i.x1<r.x0?(a=r.x0,o=r.cy,s=i.x1,c=i.cy):r.y1<i.y0?(a=r.cx,o=r.y1,s=i.cx,c=i.y0):(a=r.cx,o=r.y0,s=i.cx,c=i.y1);let l=[o*this.cols+a],u=a,d=o;for(let e=0;e<4e3&&(u!==s||d!==c);e++){let e=s-u,t=c-d;Math.abs(e)>Math.abs(t)?u+=Math.sign(e):(Math.abs(t)>Math.abs(e)||(u+=Math.sign(e)),d+=Math.sign(t)),l.push(d*this.cols+u)}return l}finishLink(e){for(let t=0;t<e.path.length;t++)this.kind[e.path[t]]!==k.FRAME&&this.place(e.path[t],k.LINK,A,0),t>0&&this.join(e.path[t-1],e.path[t]);e.g=e.path.length,e.done=!0}spawn(e,t,n,r,i=null,a=128){this.reduced||this.tips.length>220||this.tips.push({x:e,y:t,dir:n,len:0,max:r,acc:0,speed:this.cfg.lattice.traceSpeed*(.8+Math.random()*.5),diag:0,target:i,pal:a,pad:!0})}ok(e,t){return e>=0&&e<this.cols&&t>=0&&t<this.rows&&!this.blocked[t*this.cols+e]}stepTip(e){let t=this.cfg.lattice,n=e.dir;if(e.target){let[t,r]=e.target,i=-1,a=1e9;for(let o of[0,1,-1,2,-2]){let s=(n+o+8)%8,c=e.x+C[s],l=e.y+w[s];if(!this.ok(c,l))continue;let u=Math.abs(t-c),d=Math.abs(r-l),f=Math.max(u,d)+.41*Math.min(u,d)+(o?.05:0);f<a&&(a=f,i=s)}if(i<0)return!1;n=i}else{let r=n%2==1;if(r&&++e.diag>1+Math.floor(Math.random()*3)?(n=(n+(Math.random()<.5?1:7))%8,e.diag=0):!r&&Math.random()<t.turn&&(n=(n+(Math.random()<.25?Math.random()<.5?1:7:Math.random()<.5?2:6))%8),!this.ok(e.x+C[n],e.y+w[n])){let t=[2,6,1,7].map(e=>(n+e)%8).find(t=>this.ok(e.x+C[t],e.y+w[t]));if(t===void 0)return!1;n=t}}let r=e.y*this.cols+e.x,i=e.x+C[n],a=e.y+w[n],o=a*this.cols+i;return this.kind[o]===k.EMPTY?(e.dir=n,e.x=i,e.y=a,this.place(o,k.FREE,A,1),this.pal[o]=e.pal,this.join(r,o),e.len++,e.target&&i===e.target[0]&&a===e.target[1]||e.len>=e.max?!1:(!e.target&&n%2==0&&Math.random()<t.branch&&e.len>2&&this.spawn(i,a,(n+(Math.random()<.5?2:6))%8,Math.max(3,(e.max-e.len)*.6)),!0)):(this.join(r,o),this.light(o,.9),e.pad=!1,!1)}nearest(e,t,n){let r=-1,i=n*n,a=Math.max(this.view.top,t-n),o=Math.min(this.view.bottom,t+n);for(let s=a;s<=o;s++){let a=s*this.cols;for(let o=Math.max(0,e-n);o<=Math.min(this.cols-1,e+n);o++){let n=a+o;if(this.kind[n]===k.EMPTY)continue;let c=(o-e)**2+((s-t)*2)**2;c<i&&(i=c,r=n)}}return r}reach(e,t){if(this.reachCool>0||this.reaches>=3)return;let n=this.nearest(e,t,34);if(n<0)return;this.reachCool=.9,this.reaches++;let r=n%this.cols,i=Math.floor(n/this.cols),a=Math.abs(e-r)>=Math.abs(t-i)?e>r?0:4:t>i?2:6;this.spawn(r,i,a,120,[e,t],150)}rest(){this.reaches=0}send(e,t,n,r){this.ok(e,t)&&(this.place(t*this.cols+e,k.PAD,92,1),this.spawn(e,t,Math.abs(n-e)>Math.abs(r-t)?n>e?0:4:r>t?2:6,600,[n,r],92))}burst(e,t){if(!this.ok(e,t))return;let n=t*this.cols+e;this.place(n,k.PAD,140,1);let r=Math.floor(Math.random()*8);for(let n=0;n<8;n++)n!==r&&this.spawn(e,t,n,6+Math.floor(Math.random()*18),null,60+n*20)}attract(e){let t=this.t;if((this.attractCool.get(e)??-9)>t)return;this.attractCool.set(e,t+.8);let n=e.getBoundingClientRect(),r=window.scrollY,i=Math.round((n.top+n.height/2+r)/this.ch);for(let e of[Math.floor(n.left/this.cw)-2,Math.ceil(n.right/this.cw)+1]){if(!this.ok(e,i))continue;let t=this.nearest(e,i,48);if(t<0)continue;let n=t%this.cols,r=Math.floor(t/this.cols);this.spawn(n,r,e>n?0:4,160,[e,i],200)}}update(e,t,n){this.t+=e,this.view={top:Math.max(0,t),bottom:Math.min(this.rows-1,t+n)},this.reachCool-=e;let r=this.cfg.lattice;for(let t of this.frames)t.state===`growing`&&this.growFrame(t,e);for(let t of this.links)if(!t.done){let n=Math.floor(t.g);t.g=Math.min(t.path.length,t.g+e*r.traceSpeed);for(let e=n;e<Math.floor(t.g);e++)this.kind[t.path[e]]!==k.FRAME&&this.place(t.path[e],k.LINK,A,1),e>0&&this.join(t.path[e-1],t.path[e]);t.g>=t.path.length&&this.finishLink(t)}else if(!this.reduced&&(t.nextPacket-=e)<=0){t.nextPacket=1.4+Math.random()*2.6;let e=Math.random()<.5;this.pulses.push({path:e?t.path:[...t.path].reverse(),pos:0,speed:r.pulseSpeed,loop:!1,pal:40+Math.floor(Math.random()*120),end:t.path.length})}for(let t=this.tips.length-1;t>=0;t--){let n=this.tips[t];n.acc+=e*n.speed;let r=!0;for(;r&&n.acc>=1;)--n.acc,r=this.stepTip(n);if(!r){if(n.pad){let e=n.y*this.cols+n.x;this.kind[e]=k.PAD,this.light(e,1),this.free.add(e)}this.tips.splice(t,1)}}for(let t=this.pulses.length-1;t>=0;t--){let n=this.pulses[t],r=Math.floor(n.pos);n.pos+=e*n.speed;for(let e=r;e<=Math.min(Math.floor(n.pos),n.end-1);e++){let t=n.path[e%n.path.length];this.kind[t]!==k.EMPTY&&(this.pal[t]=n.pal,this.light(t,1))}n.pos>=n.end&&this.pulses.splice(t,1)}if(!this.reduced){let t=this.cols*(this.view.bottom-this.view.top+1);if((this.seedIn-=e)<=0&&(this.seedIn=.9+Math.random()*1.2,this.free.size<t*r.density))for(let e=0;e<12;e++){let e=Math.floor(Math.random()*this.cols),t=this.view.top+Math.floor(Math.random()*(this.view.bottom-this.view.top));if(!this.ok(e,t)||this.kind[t*this.cols+e])continue;this.place(t*this.cols+e,k.PAD,A,.6);let n=Math.floor(Math.random()*4)*2;this.spawn(e,t,n,8+Math.floor(Math.random()*30)),this.spawn(e,t,(n+4)%8,6+Math.floor(Math.random()*20));break}if((this.sproutIn-=e)<=0){this.sproutIn=1.6+Math.random()*2;let e=this.frames.filter(e=>e.state===`closed`&&e.path.length&&this.inView(e.path[0])),t=e[Math.floor(Math.random()*e.length)];if(t){let e=Math.floor(Math.random()*t.path.length),n=t.path[e],r=n%this.cols,i=Math.floor(n/this.cols),a=t.corners,o=e<a[1]?6:e<a[2]?0:e<a[3]?2:4;this.ok(r+C[o],i+w[o])&&this.spawn(r,i,o,5+Math.floor(Math.random()*22))}}}let i=e/Math.max(1,r.life);for(let e of this.free)this.life[e]-=i,this.life[e]<=0&&this.clear(e);let a=Math.exp(-e*2.6);for(let e of this.glowing)this.glow[e]*=a,this.glow[e]<.02&&(this.glow[e]=0,this.glowing.delete(e),(this.kind[e]===k.FRAME||this.kind[e]===k.LINK)&&(this.pal[e]=A))}inView(e){let t=Math.floor(e/this.cols);return t>=this.view.top&&t<=this.view.bottom}compose(e,t,n){let r=this.cols;e.fill(0);for(let i=0;i<n;i++){let a=t+i;if(a<0||a>=this.rows)continue;let o=n-1-i;for(let t=0;t<r;t++){let n=a*r+t,i=this.kind[n];if(i===k.EMPTY)continue;let s=this.glow[n],c=this.t-this.born[n],l=Math.min(1,c/.12),u=i===k.FREE||i===k.PAD?.22+.55*this.life[n]:.62;u=Math.min(1,(u+s*.6)*l);let d=s>.22||this.pal[n]!==A&&i===k.PAD,f=(o*r+t)*4;e[f]=this.glyph(n),e[f+1]=u*255|0,e[f+2]=d?this.pal[n]===A?140:Math.min(250,this.pal[n]):255,e[f+3]=Math.min(1,s)*255|0}}}destroy(){this.io?.disconnect()}},M=class{stiffness;state={x:-9999,y:-9999,presence:0,speed:0,still:0};tx=-9999;ty=-9999;vx=0;vy=0;inside=!1;lastMove=0;clicks=[];ac=new AbortController;constructor(e){this.stiffness=e;let t={signal:this.ac.signal,passive:!0};window.addEventListener(`pointermove`,e=>{e.pointerType!==`touch`&&(this.state.presence<.01&&(this.state.x=e.clientX,this.state.y=e.clientY),this.tx=e.clientX,this.ty=e.clientY,this.inside=!0,this.lastMove=performance.now())},t),document.documentElement.addEventListener(`pointerleave`,()=>{this.inside=!1},t),window.addEventListener(`blur`,()=>{this.inside=!1},t),window.addEventListener(`pointerdown`,e=>{e.target?.closest(`a, button, input, textarea, select, label, summary, .tune, [data-no-seed]`)||e.button===0&&this.clicks.push({x:e.clientX,y:e.clientY})},t)}takeClicks(){let e=this.clicks;return this.clicks=[],e}update(e){let t=this.state,n=this.stiffness(),r=2*Math.sqrt(n);this.vx+=((this.tx-t.x)*n-this.vx*r)*e,this.vy+=((this.ty-t.y)*n-this.vy*r)*e,t.x+=this.vx*e,t.y+=this.vy*e,t.speed+=(Math.hypot(this.vx,this.vy)-t.speed)*Math.min(1,e*8),t.presence+=(+!!this.inside-t.presence)*Math.min(1,e*(this.inside?5:2)),t.still=this.inside?(performance.now()-this.lastMove)/1e3:0}destroy(){this.ac.abort()}},N=24,P={reveal:4.55,end:5.3},F=[{scale:1,half:!1},{scale:.8,half:!1},{scale:.8,half:!0},{scale:.62,half:!0}],I=(e,t,n)=>e+(t-e)*n,L=(e,t,n,r)=>e<=t||e>=r?0:e<n?(e-t)/(n-t):1-(e-n)/(r-n);function R(e){let t=e.trim().match(/^#([0-9a-f]{6})$/i);if(!t)return[.957,.949,.933];let n=parseInt(t[1],16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}var z=class{canvas;cfg;opts;pointer;renderer;atlas;dpr=1;cellDev=[1,1];cols=1;rows=1;w=1;h=1;guardH=1;stopY=new Float32Array(N);stopC=new Float32Array(72);stopN=0;masks=new Float32Array(32);maskN=0;markDoc=null;eyeDoc=null;warp=0;ring={x:0,y:0,t0:-10};frameN=0;quality=0;slow=0;fast=0;dtAvg=1/60;time=0;measureTimer=0;introT=P.end;introStart=-1;introHold=null;introEvents=[];blink=0;nextBlink=4;blinkT=-1;pupil=[0,0];pupilAt=0;lookAt=null;lattice;latticeBand=new Uint8Array;messages=[];wasStill=!1;lensDim=1;border=null;iris={v:1,from:1,to:1,t:0,dur:1,done:null};menu={v:0,to:0,nodes:new Float32Array(14),hot:-1};revealAll=0;ac=new AbortController;stats={fps:60,cols:0,rows:0,quality:0};constructor(e,t,n){this.canvas=e,this.cfg=t,this.opts=n,this.pointer=new M(()=>t.pointer.stiffness),this.lattice=new j(t,{lit:e=>n.onLit?.(e)},n.reduced);for(let e of document.querySelectorAll(`[data-ss-attract]`)){let t=()=>this.lattice.attract(e);e.addEventListener(`pointerenter`,t,{signal:this.ac.signal}),e.addEventListener(`focus`,t,{signal:this.ac.signal})}}async init(){let e=b(this.canvas);return e?(this.renderer=e,await c(this.fontFamily),this.layout(),this.renderer.warm(),!0):!1}get hasEye(){return!!this.eyeDoc}get introPlaying(){return this.introT<P.end}startIntro(e){this.introT=0,this.introStart=-1,this.introEvents=e.map(e=>({...e,done:!1}))}skipIntro(e=P.reveal){this.introT<e&&(this.introT=e,this.introStart=-1)}wink(){this.blinkT<0&&(this.blinkT=0)}metrics(){let e=Math.min(2,window.devicePixelRatio||1),t=Math.max(.75,e*F[this.quality].scale),n=this.cfg.grid,r=[Math.max(3,Math.round(n.fontPx*(i[n.font]??i.iosevka).advance*t)),Math.max(5,Math.round(n.fontPx*n.lineRatio*t))],a=document.documentElement.clientWidth,o=window.innerHeight;return{dpr:t,cellDev:r,w:Math.round(a*t),h:Math.round(o*t)}}layout(){let e=this.metrics(),t=e.dpr!==this.dpr||e.cellDev[0]!==this.cellDev[0]||e.cellDev[1]!==this.cellDev[1]||!this.atlas;this.dpr=e.dpr,this.cellDev=e.cellDev,this.w=e.w,this.h=e.h,this.cols=Math.ceil(e.w/e.cellDev[0]),this.rows=Math.ceil(e.h/e.cellDev[1])+1,t&&(this.atlas=f(e.cellDev[0],e.cellDev[1],this.cfg.grid.fontPx*e.dpr,this.fontFamily)),this.renderer.resize({w:e.w,h:e.h,cols:this.cols,rows:this.rows,cellDev:e.cellDev,atlas:this.atlas.canvas}),this.latticeBand=new Uint8Array(this.cols*this.rows*4),this.stats.cols=this.cols,this.stats.rows=this.rows}get fontFamily(){return(i[this.cfg.grid.font]??i.iosevka).family}async rebuild(){await c(this.fontFamily),this.atlas=void 0,this.layout()}measure(e){let t=this.cellDev[0]/this.dpr,n=this.cellDev[1]/this.dpr,r=S(this.cols,t,n,Math.min(4096,this.renderer.maxTexture));this.renderer.guard(r.data,r.cols,r.rows),this.guardH=r.docH;let i=Math.ceil(r.docH/n);this.lattice.build(this.cols,i,t,n,r.rows===i?r.solid:null);let a=document.querySelector(`[data-ss-border]`)?.getBoundingClientRect();if(this.border=a&&a.height>1?{top:a.top+window.scrollY,h:a.height}:null,this.eyeDoc){let e=this.eyeP(),r=Math.round(this.eyeDoc.x/t),i=Math.round(this.eyeDoc.y/n)-Math.floor(2.5*e);this.lattice.block(r-7*e-2,i-1,r+7*e+1,i+5*e)}this.buildMessages(t,n);let o=0;for(let t of e){if(o>22)break;let e=getComputedStyle(t.el);this.stopY[o]=t.top,this.stopC.set(R(e.getPropertyValue(`--s-top`)),o*3),o++,this.stopY[o]=t.bottom,this.stopC.set(R(e.getPropertyValue(`--s-bot`)),o*3),o++}this.stopN=o,this.measureMasks();let s=document.querySelector(`[data-ss-mark]`),c=s?.getBoundingClientRect(),l=!!c&&c.width>1&&c.height>1;this.eyeDoc=l&&s.dataset.ssMark===`eye`?{x:c.left+c.width/2,y:c.top+c.height/2+window.scrollY,w:c.width}:null,this.markDoc=l&&c.width>40?{x:c.left+c.width/2,y:c.top+c.height/2+window.scrollY,r:Math.max(c.width,c.height)/2}:null}buildMessages(n,r){let i=document.documentElement.scrollHeight,a=Math.min(Math.min(4096,this.renderer.maxTexture),Math.ceil(i/r)),o=this.cols,s=new Uint8Array(o*a),c=window.scrollY;this.messages=[];let l=t(`᛫`);for(let n of document.querySelectorAll(`[data-ss-runes]`)){let i=n.dataset.ssRunes??``,u=n.getBoundingClientRect();if(!i||u.height<1)continue;this.messages.push({top:u.top+c,bottom:u.bottom+c,text:i});let d=[...e(i)].map(t).filter(e=>e>0);if(!d.length)continue;d.push(l,0,0);let f=Math.max(0,Math.floor((u.top+c)/r)),p=Math.min(a,Math.ceil((u.bottom+c)/r));for(let e=f;e<p;e++){if(e%2)continue;let t=e*7%d.length;for(let n=0;n<o;n++)s[e*o+n]=d[(n+t)%d.length]}}this.renderer.messages(s,o,a)}lensMessage(e){let t=this.pointer.state;if(t.presence<.5||this.introT<P.end)return null;let n=t.y+e;return this.messages.find(e=>n>=e.top&&n<e.bottom)?.text??null}measureMasks(){let e=0;for(let t of document.querySelectorAll(`[data-ss-mask]`)){if(e>=8)break;let n=t.getBoundingClientRect(),r=getComputedStyle(t);if(n.width<1||n.height<1||r.display===`none`||r.opacity===`0`)continue;let i=this.dpr;this.masks.set([(n.left-4)*i,(n.top-3)*i,(n.right+4)*i,(n.bottom+3)*i],e*4),e++}this.maskN=e}eyeP(){let e=this.h/this.cellDev[1],t=this.eyeDoc?this.eyeDoc.w/(14*this.cellDev[0]/this.dpr):99;return Math.max(2,Math.floor(Math.min(this.cols*.4/14,e*.36/5,t)))}seed(e,t){this.ring={x:e,y:t,t0:this.time},this.lensDim=-.5,this.wink()}irisTo(e,t,n){this.opts.reduced?(this.iris.v=e,n?.()):this.iris={v:this.iris.v,from:this.iris.v,to:e,t:0,dur:Math.max(.01,t),done:n??null}}irisShut(){this.iris={v:0,from:0,to:0,t:0,dur:1,done:null}}setMenu(e,t=null,n=-1){this.menu.to=+!!e,this.menu.hot=n,t?t.slice(0,7).forEach((e,t)=>{this.menu.nodes[t*2]=e.x,this.menu.nodes[t*2+1]=e.y}):e&&this.menu.nodes.fill(-1e5)}look(e){let t=e?.getBoundingClientRect();this.lookAt=t?{x:t.left+t.width/2,y:t.top+t.height/2}:null}signal(e){let t=e.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2;this.seed(n,r);let i=this.dpr,a=this.cellDev[0]/i,o=this.cellDev[1]/i;this.lattice.burst(Math.floor(n/a),Math.floor((r+window.scrollY)/o))}send(e){let t=e.getBoundingClientRect(),n=this.dpr,r=this.cellDev[0]/n,i=this.cellDev[1]/n,a=window.scrollY,o=Math.floor((t.right+r*2)/r),s=Math.floor((t.top+t.height/2+a)/i);if(this.eyeDoc){let e=this.eyeP(),t=Math.round(this.eyeDoc.x/r),n=Math.round(this.eyeDoc.y/i)+Math.ceil(2.5*e)+1;this.lattice.send(o,s,t,n)}else this.lattice.burst(o,s);window.setTimeout(()=>this.wink(),900)}flashRunes(){this.revealAll=1}frame(e){let t=this.cfg,n=this.opts.reduced;this.frameN++,this.time=n?12:e.time*t.cosmos.speed,this.adapt(e.raw),this.measureTimer+=e.dt,this.measureTimer>.5&&(this.measureTimer=0,this.measureMasks());let{from:i,to:a,m:o}=e.blend,s=t.states[i]??t.states.ground,c=t.states[a]??t.states.ground,l=e=>I(s[e],c[e],o),u=e=>e.families.map(e=>r(e)),d=this.dpr,[f,p]=this.cellDev,m=f/d,h=p/d,g=this.w/d,_=this.h/d,v=e.scrollY*d,y=(v%p+p)%p,b=Math.round((v-y)/p);if(this.introT<P.end){this.introStart<0&&(this.introStart=e.time-this.introT),this.introT=Math.min(P.end,e.time-this.introStart);for(let e of this.introEvents)!e.done&&this.introT>=e.at&&(e.done=!0,e.fn())}this.introHold!==null&&(this.introT=this.introHold);let x=this.introT,S=[0,0,0,0],C;if(this.eyeDoc){let t=this.eyeP(),n=Math.round(this.eyeDoc.x/m),r=Math.round(this.eyeDoc.y/h),i=r-Math.floor(2.5*t);C=[n*m,(i+2.5*t)*h-e.scrollY,7*t*m],this.updateEye(e.dt,x,C),S=[n,r,t,this.blink]}else{let t=this.markDoc;C=t?[t.x,t.y-e.scrollY,t.r]:[g*.84,_*.3-e.scrollY,Math.min(g,_)*.15]}let w=x<P.end?L(x,2,2.8,3.45)*.9:0,T=n?0:Math.max(-1,Math.min(1,e.velocity/t.warp.full)),E=Math.abs(T)>w?T:w,D=Math.abs(E)>Math.abs(this.warp)?10:3/Math.max(.05,t.warp.release);this.warp+=(E-this.warp)*Math.min(1,e.dt*D);let O=this.pointer;O.update(e.dt);let k=O.state;this.lensDim=Math.min(1,this.lensDim+e.dt/1.4);let A=this.iris;if(A.v!==A.to){A.t+=e.raw>.1?.1:e.dt;let t=Math.min(1,A.t/A.dur),n=A.to<A.from?t*t*t:1-(1-t)**3;if(A.v=A.from+(A.to-A.from)*n,t>=1){A.v=A.to;let e=A.done;A.done=null,e?.()}}this.menu.v+=(this.menu.to-this.menu.v)*Math.min(1,e.dt*6),this.revealAll=Math.max(0,this.revealAll-e.dt/3.2);for(let t of O.takeClicks())this.seed(t.x,t.y),this.lattice.burst(Math.floor(t.x/m),Math.floor((t.y+e.scrollY)/h));let j=k.presence>.6&&k.still>t.lattice.dwell&&x>=P.end;j?this.lattice.reach(Math.floor(k.x/m),Math.floor((k.y+e.scrollY)/h)):this.wasStill&&this.lattice.rest(),this.wasStill=j,x>=P.end?(this.lattice.update(e.dt,b,this.rows),this.lattice.compose(this.latticeBand,b,this.rows)):this.latticeBand.fill(0),this.renderer.lattice(this.latticeBand);let M=this.time-this.ring.t0,N=!n&&M<1.4?(1-M/1.4)**2:0,R=F[this.quality].half&&this.frameN%2==1?null:{cell:[m,h],view:[g,_],time:this.time,sceneA:s.scene,sceneB:c.scene,tA:n?.5:e.blend.tFrom,tB:n?.5:e.blend.tTo,mix:o,starsA:s.stars,starsB:c.stars,anchor:C,focal:t.cosmos.focal,steps:Math.round(t.cosmos.steps),off:y/d,rowBase:b,eye:S,pupil:this.pupil,introT:x,ancA:+!!s.anchored,ancB:+!!c.anchored,rows:[r(`digits`),r(`ascii`),r(`dir`),r(`geometry`)]},z={dpr:d,stopY:this.stopY,stopC:this.stopC,stopN:this.stopN,hue:l(`hue`),opacity:t.render.opacity,lightBoost:t.render.lightBoost,grain:t.render.grain,masks:this.masks,maskN:this.maskN,offDev:y};this.renderer.draw(R,{viewH:_,off:y/d,famA:u(s),famB:u(c),warp:this.warp,reach:t.warp.reach,ptr:[k.x,k.y,t.pointer.radius,n||x<P.end||this.menu.v>.05?0:k.presence*Math.max(0,this.lensDim)**2],ring:[this.ring.x,this.ring.y,M*34,N],ringMode:+(t.pointer.clickRing===`ring`),ringSeed:this.ring.t0*.137%1,scroll:e.scrollY,guardH:this.guardH,guardAmt:t.render.guard*(x<P.end?Math.max(0,(x-P.reveal)/(P.end-P.reveal)):1),gamma:t.cosmos.gamma,edge:t.cosmos.edge,strength:l(`strength`),floor:t.cosmos.floor,dir:r(`dir`),lensFam:r(`lens`),geoFam:r(`geometry`),markFam:r(`ascii`),digitFam:r(`digits`),arcana:r(`arcana`),rowBase:b,orn:r(`ornament`),revealAll:this.revealAll,border:this.borderParams(e.scrollY,x),iris:this.iris.v,irisRot:(1-this.iris.v)*1.15,menu:this.menu.v,nodes:this.menu.nodes,hot:this.menu.hot},z,this.time,o)}borderParams(e,t){let n=this.border;if(!n)return[0,0,0,0];let r=Math.min(1,Math.max(0,(e-n.top)/(n.h*.85)));return r>=1?[0,0,0,0]:[1,r,this.opts.reduced||t>=P.end?1:Math.min(1,Math.max(0,(t-4.6)/.7)),this.cols<90?1:2]}updateEye(e,t,n){if(t<P.end){this.blink=t<3.7?0:Math.max(0,1-Math.abs((t-3.84)/.14)),this.pupil=[0,0];return}if(this.opts.reduced){this.blink=0;return}if(this.nextBlink-=e,this.nextBlink<=0&&this.blinkT<0&&(this.blinkT=0,this.nextBlink=6+Math.random()*8),this.blinkT>=0){this.blinkT+=e;let t=this.blinkT/.2;this.blink=t>=1?0:Math.sin(Math.PI*t),t>=1&&(this.blinkT=-1)}if(this.pupilAt-=e,this.pupilAt>0)return;this.pupilAt=.11;let r=this.pointer.state,i=this.lookAt??(r.presence>=.3?r:null);if(!i){this.pupilAt=.5+Math.random()*.9,this.pupil=Math.random()<.3?[0,0]:[Math.floor(Math.random()*3)-1,Math.floor(Math.random()*3)-1];return}let a=i.x-n[0],o=i.y-n[1],s=n[2];this.pupil=[Math.abs(a)>s*.45?Math.sign(a):0,Math.abs(o)>s*.3?Math.sign(o):0]}adapt(e){e<=0||e>.1||(this.dtAvg+=(e-this.dtAvg)*.05,this.stats.fps=1/this.dtAvg,this.dtAvg>1/42?(this.slow+=e,this.fast=0):this.dtAvg<1/57?(this.fast+=e,this.slow=0):this.slow=this.fast=0,this.slow>1.2&&this.quality<F.length-1?(this.quality++,this.slow=0,this.layout()):this.fast>6&&this.quality>0&&(this.quality--,this.fast=0,this.layout()),this.stats.quality=this.quality)}destroy(){this.ac.abort(),this.lattice.destroy(),this.pointer.destroy(),this.renderer.destroy()}};export{z as Field,P as INTRO};