import React, { useEffect } from "react";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const finish = () => {
      // small delay so animation is visible
      setTimeout(() => onFinish && onFinish(), 2500);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => window.removeEventListener("load", finish);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-2xl animate-pulse animate-spin-slow">
          MT
        </div>
        <div className="text-white/80">Loading App ...</div>
      </div>
    </div>
  );
}


// import React, { useEffect } from "react";

// export default function LoadingScreen({ onFinish }) {
//   useEffect(() => {
//     const finish = () => {
//       // small delay so animation is visible
//       setTimeout(() => onFinish && onFinish(), 2500);
//     };

//     if (document.readyState === "complete") {
//       finish();
//     } else {
//       window.addEventListener("load", finish);
//     }

//     return () => window.removeEventListener("load", finish);
//   }, [onFinish]);

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950">
//       <div className="flex flex-col items-center gap-6">
//         <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-2xl animate-pulse">
//           MT
//         </div>
//         <div className="text-white/80">Loading App ...</div>
//       </div>
//     </div>
//   );
// }