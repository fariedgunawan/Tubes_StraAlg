function generateRandomDate() {
  const start = new Date(2024, 0, 1); // Jan 1, 2024
  const end = new Date(); // Current date
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateMockData() {
  const mockData = [];
  const timesOfDay = ["Pagi", "Sore"];
  for (let i = 0; i < 1000; i++) {
    const randomDate = generateRandomDate();
    const date = `${randomDate.getFullYear()}-${(randomDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${randomDate.getDate().toString().padStart(2, "0")}`;
    const time = timesOfDay[Math.floor(Math.random() * timesOfDay.length)]; // Randomly select "Pagi" or "Sore"
    const distance = Math.floor(Math.random() * 100) + 1; // Random distance between 1 and 100
    const duration = Math.floor(Math.random() * 300) + 30; // Random duration between 30 and 330 minutes
    mockData.push({ date, time, distance, duration });
  }
  return mockData;
}

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

// Fungsi untuk mengukur waktu eksekusi
function measureExecutionTime(func, data) {
  const startTime = performance.now();
  func(data);
  const endTime = performance.now();
  return endTime - startTime;
}

// Menghasilkan data acak
const mockData = generateMockData();

// Mengukur waktu eksekusi untuk algoritma greedy
const greedyExecutionTime = measureExecutionTime(greedyOptimalRun, mockData);
console.log(`Greedy Execution Time: ${greedyExecutionTime.toFixed(6)} ms`);

// Mengukur waktu eksekusi untuk algoritma brute force
const bruteForceExecutionTime = measureExecutionTime(bruteForceOptimalRun, mockData);
console.log(`Brute Force Execution Time: ${bruteForceExecutionTime.toFixed(6)} ms`);
// Menghasilkan hasil optimal menggunakan algoritma greedy
const greedyResult = greedyOptimalRun(mockData);
console.log("Greedy Result:", greedyResult);

// Menghasilkan hasil optimal menggunakan algoritma brute force
const bruteForceResult = bruteForceOptimalRun(mockData);
console.log("Brute Force Result:", bruteForceResult);
