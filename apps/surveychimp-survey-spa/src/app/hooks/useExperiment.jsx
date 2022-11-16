import { useState, useEffect } from 'react';
const useExperiment = (experimentId) => {
    const [variant, setVariant] = useState();
    useEffect(() => {
      (async () => {
        if (window.dataLayer) {
          await window.dataLayer.push({ event: 'optimize.activate' })
        }
        const intervalId = setInterval(() => {
          if (window.google_optimize !== undefined) {
            // Set the variant to the state.
            setVariant(
              window.google_optimize.get(experimentId)
            );
            clearInterval(intervalId);
          }
        }, 100);
      })();
    })
    return variant;
  }

  export default useExperiment;