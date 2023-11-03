import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import "../index.css";

export default function PlugDevRev() {
  const [buttonState, setState] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isWidgetReady, setIsWidgetReady] = useState(false);
  const [loading, setLoading] = useState(true);

  const onClick = () => {
    setIsAnimating(!isAnimating);
    setState(!buttonState);
  };

  useEffect(() => {
    window.plugSDK.init({
      // app_id: "don:core:dvrv-us-1:devo/10exEYkD3:plug_setting/1",
      app_id: "don:core:dvrv-us-1:devo/Lr25Qqs7:plug_setting/1",

      // the below should be set as false if you want to use a custom launcher
      enable_default_launcher: false,

      // pass the selector of the element you want to use as a custom launcher
      custom_launcher_selector: ".custom-launcher-selector",

      // the alighment of the widget when it is opened, it is relative to the custom launcher
      widget_alignment: "right",
      spacing: {
        bottom: "20px",
        side: "20px"
      }
    });

    window.plugSDK.onEvent((payload) => {
      if (payload.type === "ON_PLUG_WIDGET_READY") {
        setIsWidgetReady(true);
        setLoading(false);
      }
    });

    isWidgetReady && window.plugSDK.toggleWidget(buttonState);
  }, [buttonState, isWidgetReady]);

  return (
    <div className="spacing-container-styles">
      {loading ? (
        <div className="loading-text-styles">
          <span>Loading</span>
          <span className="typing-dots-styles">...</span>
        </div>
      ) : (
        <motion.div
          onClick={onClick}
          className="custom-launcher-selector"
          whileTap={{ scale: 2 }}
          animate={{
            rotate: isAnimating ? [0, 0, 180, 180, 0] : 0,
            borderRadius: isAnimating
              ? ["50%", "30%", "20%", "25%", "50%"]
              : "50%"
          }}
          transition={
            isAnimating
              ? {
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: { Infinity },
                  repeatDelay: 1
                }
              : {}
          }
        >
          <motion.div
            onClick={onClick}
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            whileTap={{ scale: 0.8 }}
            animate={{
              rotate: isAnimating ? [0, 0, -180, -180, 0] : 0,
              borderRadius: isAnimating
                ? ["50%", "30%", "15%", "15%", "50%"]
                : "50%"
            }}
            transition={
              isAnimating
                ? {
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: { Infinity },
                    repeatDelay: 1
                  }
                : {}
            }
          >
            <div className="waving-palm">
              <span role="img" aria-label="Hi">
                {" "}
                &#x270B;&#x1F3FE;
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
