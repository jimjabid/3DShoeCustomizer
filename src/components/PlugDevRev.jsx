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
      session_token: "eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvL0xyMjVRcXM3OnN2Y2FjYy84IiwiZXhwIjoxNzAxNDM5NzE1LCJodHRwOi8vZGV2cmV2LmFpL2FjY2lkIjoiQUNDLVpTOW00MVRtIiwiaHR0cDovL2RldnJldi5haS9jbGllbnRpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9McjI1UXFzNzpzdmNhY2MvOCIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2b19kb24iOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vTHIyNVFxczciLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9pZCI6IkRFVi1McjI1UXFzNyIsImh0dHA6Ly9kZXZyZXYuYWkvZGlzcGxheW5hbWUiOiJTaG9lIEN1c3RvbWl6ZXIgVXNlciIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiJ1c2VyYXRoZW50aWNhdGVkQGdtYWlsLmNvbSIsImh0dHA6Ly9kZXZyZXYuYWkvZnVsbG5hbWUiOiJKaG9uIE1heCBEb3dcdTAwM2UiLCJodHRwOi8vZGV2cmV2LmFpL2lzX3ZlcmlmaWVkIjp0cnVlLCJodHRwOi8vZGV2cmV2LmFpL3BhcmVudF9qdGkiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vTHIyNVFxczc6dG9rZW4vMUgzWFhKQzRrIiwiaHR0cDovL2RldnJldi5haS9yZXZvaWQiOiJSRVYtak94dnJOVTMiLCJodHRwOi8vZGV2cmV2LmFpL3JldnVpZCI6IlJFVlUtMTZYZFpsSDVqIiwiaHR0cDovL2RldnJldi5haS9zZXNzaW9uX3Rva2VudHlwZSI6InVybjpkZXZyZXY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6c2Vzc2lvbjpyZXYiLCJodHRwOi8vZGV2cmV2LmFpL3Rva2VudHlwZSI6InVybjpkZXZyZXY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6c2Vzc2lvbiIsImlhdCI6MTY5OTAyMDUxNSwiaXNzIjoiaHR0cHM6Ly9hdXRoLXRva2VuLmRldnJldi5haS8iLCJqdGkiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vTHIyNVFxczc6dG9rZW4vaElWVG82WHd8MDAxIiwic3ViIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvL0xyMjVRcXM3OnJldnUvMTZYZFpsSDVqIn0.adk7h6lS65mfuSgtOcRgnw5JEKT7WhqgbRGhpZxFn0opu3h0FDZk58JR7U6neZ5m30zAvq-D2lP1XRXogfothLruz6Erh4tb0BPF9ipu34bclssLhSvsvnsWPKmK9PMQ2pJ9RAtLn4_oLkXtZqVGoI6kgzah663-LbvYfYoSB3K2z1WCOtnPn23xTsIjAOyXlC_HZ29GKWGqwt0RTgzUzUzxV10NV2mbYlwgzZWxbF-GdEUJeA1UfxQ0VD3VakekPxuBOllO5b-mOs3L5oYlkzWgPSLhJZB0mPJhJRLRE1eckBTa9AjlpfjtRbWy7W0eARTDl7kpQa3dOSbk_edGMQ",

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
