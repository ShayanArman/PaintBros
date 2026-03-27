export const crispShadow1px = "0 2px 5px 0 rgba(50,50,93,.1),0 1px 1px 0 rgba(0,0,0,.07)";
export const wideShadow2px = '0 1px 1px 0 rgba(50,50,93,.3),0 1px 5px 0 rgba(0,0,0,.2)';
export const buttonShadow = "0 2px 5px 0 rgba(50,50,93,.1),0 5px 5px 0 rgba(0,0,0,.07)";

export const containerStyle = {
  borderRadius: "15px",
  boxShadow: crispShadow1px
};

// export const pulseAnimation = keyframes({
//   '0%': { boxShadow: '0 0 0 0 rgba(0, 123, 255, 0.4)' },
//   '70%': { boxShadow: '0 0 0 20px rgba(0, 123, 255, 0)' },
//   '100%': { boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)' }
// });

// export const pulseWithBorderAnimation = keyframes({
//   '0%': { boxShadow: '0 2px 5px 0 rgba(50,50,93,.1),0 1px 1px 0 rgba(0,0,0,.07)' },
//   '70%': { boxShadow: '0 2px 15px 0 rgba(50,50,93,.3),0 1px 5px 0 rgba(0,0,0,.2)' },
//   '100%': { boxShadow: '0 2px 5px 0 rgba(50,50,93,.1),0 1px 1px 0 rgba(0,0,0,.07)' }
// });

export const superSlowPulse = {
  '0%': { opacity: 0.3 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.3 }
};

export const superSlowBorderPulse = {
  '0%': { borderRadius: "8px" },
  '50%': { borderRadius: "20px"},
  '100%': { borderRadius: "8px" }
};

export const pinkTitleContainerStyle = {
  borderRadius: "15px",
  boxShadow: "0 2px 5px 0 #e64980,0 1px 1px 0 #e64980"
};

/* ————————————————————————————————————————————
 * Shared animation constants (timing principle)
 * ———————————————————————————————————————————— */
export const motionEaseInOut = "cubic-bezier(0.45, 0.05, 0.55, 0.95)";
export const motionEaseOut = "cubic-bezier(0.16, 1, 0.3, 1)";

// export const stageInAnimation = keyframes({
//   "0%": { opacity: 0, transform: "translateY(16px) scale(0.985)" },
//   "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
// });

// export const attentionPulseAnimation = keyframes({
//   "0%": { boxShadow: "0 0 0 0 rgba(201, 42, 42, 0.24)" },
//   "70%": { boxShadow: "0 0 0 12px rgba(201, 42, 42, 0)" },
//   "100%": { boxShadow: "0 0 0 0 rgba(201, 42, 42, 0)" },
// });

// export const pulseDotWaveAnimation = keyframes({
//   "0%": { opacity: 0.4, transform: "scale(1)" },
//   "75%": { opacity: 0, transform: "scale(1.9)" },
//   "100%": { opacity: 0, transform: "scale(1.9)" },
// });

/* ————————————————————————————————————————————
 * Shared card styles — frosted glass (solid drawing: depth & volume)
 * ———————————————————————————————————————————— */
export const glassCard: React.CSSProperties = {
  border: "1px solid rgba(0,0,0,0.05)",
  borderRadius: 18,
  padding: 22,
  marginBottom: 16,
  background: "rgba(255,255,255,0.72)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow:
    "0 1px 3px rgba(0,0,0,0.03), 0 6px 24px rgba(0,0,0,0.045), inset 0 1px 0 rgba(255,255,255,0.6)",
};