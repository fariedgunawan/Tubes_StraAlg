import React, { useEffect, useState } from "react";

const Result = ({ data }) => {
  const [greedyResult, setGreedyResult] = useState(null);
  const [bruteForceResult, setBruteForceResult] = useState(null);
  const [greedyExecutionTime, setGreedyExecutionTime] = useState(null);
  const [bruteForceExecutionTime, setBruteForceExecutionTime] = useState(null);

  // Algoritma greedy untuk menemukan hasil optimal
  function greedyOptimalRun(runs) {
    let bestRun = runs[0];
    let bestRatio = runs[0].distance / runs[0].duration;

    for (let i = 1; i < runs.length; i++) {
      let currentRatio = runs[i].distance / runs[i].duration;
      if (currentRatio > bestRatio) {
        bestRun = runs[i];
        bestRatio = currentRatio;
      }
    }

    return bestRun;
  }

  // Algoritma brute force untuk menemukan hasil optimal
  function bruteForceOptimalRun(runs) {
    let bestRun = runs[0];
    let bestRatio = runs[0].distance / runs[0].duration;

    for (let run of runs) {
      let currentRatio = run.distance / run.duration;
      if (currentRatio > bestRatio) {
        bestRun = run;
        bestRatio = currentRatio;
      }
    }

    return bestRun;
  }

  useEffect(() => {
    if (data.length > 0) {
      const startTimeGreedy = performance.now();
      const greedyResult = greedyOptimalRun(data);
      const endTimeGreedy = performance.now();
      setGreedyResult(greedyResult);
      const greedyTime = endTimeGreedy - startTimeGreedy;
      setGreedyExecutionTime(greedyTime.toFixed(6));
      console.log(`Greedy Execution Time: ${greedyTime.toFixed(6)} ms`);

      setTimeout(() => {
        const startTimeBruteForce = performance.now();
        const bruteForceResult = bruteForceOptimalRun(data);
        const endTimeBruteForce = performance.now();
        setBruteForceResult(bruteForceResult);
        const bruteForceTime = endTimeBruteForce - startTimeBruteForce;
        setBruteForceExecutionTime(bruteForceTime.toFixed(6));
        console.log(`Brute Force Execution Time: ${bruteForceTime.toFixed(6)} ms`);
      }, 0); // Set timeout to ensure they don't run at exactly the same time
    }
  }, [data]);

  return (
    <div className="body-input px-[35px]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[30px] md:text-[40px]">Hasil Kalkulasi</h2>
          <div className="mt-[20px] md:mt-[40px] flex flex-col gap-[20px] md:gap-[40px] md:flex-row text-center">
            <div className="flex flex-col items-center backdrop-blur-md backdrop-filter px-[30px] py-[20px] md:px-[60px] md:py-[40px] rounded-xl">
              <h2 className="font-bold text-[20px] md:text-[30px]">Algoritma Greedy</h2>
              <h2 className="md:text-[20px]">Hasil Terbaik</h2>
              {greedyResult && (
                <>
                  <h2 className="mt-[40px] md:text-[20px] text-sky-300">{greedyResult.time}</h2>
                  <h2 className="md:text-[20px] text-sky-300">Jarak : {greedyResult.distance}Km</h2>
                  <h2 className="md:text-[20px] text-sky-300">Waktu : {greedyResult.duration} Menit</h2>
                  <h2 className="mt-[20px] md:mt-[40px] md:text-[20px] text-red-700">Execution Time : {greedyExecutionTime} ms</h2>
                </>
              )}
            </div>
            <div className="flex flex-col items-center backdrop-blur-md backdrop-filter px-[30px] py-[20px] md:px-[60px] md:py-[40px] rounded-xl">
              <h2 className="font-bold text-[20px] md:text-[30px]">Algoritma Brute Force</h2>
              <h2 className="md:text-[20px]">Hasil Terbaik</h2>
              {bruteForceResult && (
                <>
                  <h2 className="mt-[40px] md:text-[20px] text-sky-300">{bruteForceResult.time}</h2>
                  <h2 className="md:text-[20px] text-sky-300">Jarak : {bruteForceResult.distance}Km</h2>
                  <h2 className="md:text-[20px] text-sky-300">Waktu : {bruteForceResult.duration} Menit</h2>
                  <h2 className="mt-[20px] md:mt-[40px] md:text-[20px] text-red-700">Execution Time : {bruteForceExecutionTime} ms</h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
