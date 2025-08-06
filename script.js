const counter = document.getElementById("counter");

async function updateCount() {
  try {
    const res = await fetch("http://localhost:3000/count");
    const data = await res.json();
    counter.textContent = data.count;
  } catch (err) {
    console.error("Error fetching count:", err);
  }
}

async function manualHit() {
  try {
    await fetch("http://localhost:3000/hit");
    updateCount();
  } catch (err) {
    console.error("Error hitting endpoint:", err);
  }
}

// 🔁 Reset count
async function resetCount() {
  try {
    const res = await fetch("http://localhost:3000/reset", {
      method: "POST"
    });
    const data = await res.json();
    console.log(data.message);
    updateCount();
  } catch (err) {
    console.error("Error resetting count:", err);
  }
}

setInterval(updateCount, 500); // Update every 500ms
updateCount(); // Initial load
