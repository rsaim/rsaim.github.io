// Maps the string keys used in data/profile.json (synced into this
// directory as profile.json by scripts/ensure-local-config.js — see there)
// to the actual bundled image modules. JSON can't `import` a webpack asset,
// so this is the bridge between pure data and the binary assets checked
// into src/Assets/. This file carries no personal content — only wiring —
// so it stays tracked even though profile.json (the real data) does not.
import avatarImg from "../Assets/saim-avatar.png";

import drdoLogo from "../Assets/logos/drdo.png";
import liverampLogo from "../Assets/logos/liveramp.webp";
import skilletLogo from "../Assets/logos/skillet.png";

import bddAiLogo from "../Assets/Projects/bdd-ai.png";
import treAiLogo from "../Assets/Projects/tre-ai.jpg";
import voxAiLogo from "../Assets/Projects/vox-ai.jpg";
import liverampBlog from "../Assets/Projects/liveramp-blog.jpg";
import liverampCtv from "../Assets/Projects/liveramp-ctv.png";
import pickleImg from "../Assets/Projects/pickle.jpg";
import profileImg from "../Assets/Projects/profile.jpg";
import py2to3Img from "../Assets/Projects/py2to3.jpg";
import pyflybyImg from "../Assets/Projects/pyflyby.png";
import citiImg from "../Assets/Projects/citi.jpg";
import drdoCvImg from "../Assets/Projects/drdo-cv.gif";
import proxyImg from "../Assets/Projects/proxy.jpg";
import pyconImg from "../Assets/Projects/pycon.jpg";
import instasanityImg from "../Assets/Projects/instasanity.png";
import chromeExtImg from "../Assets/Projects/chrome-ext.png";
import dnsImg from "../Assets/Projects/dns.jpg";
import jeevanstambhImg from "../Assets/Projects/jeevanstambh.jpg";

const assetMap = {
  avatar: avatarImg,
  logos: {
    drdo: drdoLogo,
    liveramp: liverampLogo,
    skillet: skilletLogo,
  },
  projects: {
    "bdd-ai": bddAiLogo,
    "tre-ai": treAiLogo,
    "vox-ai": voxAiLogo,
    "liveramp-blog": liverampBlog,
    "liveramp-ctv": liverampCtv,
    pickle: pickleImg,
    profile: profileImg,
    py2to3: py2to3Img,
    pyflyby: pyflybyImg,
    citi: citiImg,
    "drdo-cv": drdoCvImg,
    proxy: proxyImg,
    pycon: pyconImg,
    instasanity: instasanityImg,
    "chrome-ext": chromeExtImg,
    dns: dnsImg,
    jeevanstambh: jeevanstambhImg,
  },
};

/** Resolve an asset key from a profile.json entry to its bundled image, or undefined if absent/unknown. */
export function resolveAsset(map, key) {
  if (!key) return undefined;
  return map[key];
}

export default assetMap;
