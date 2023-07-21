let authenticated = false;

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulate API authentication. Replace this with actual API call and validation.
  if (username === "Prudhvi" && password === "Prudhvi123") {
    authenticated = true;
    showContent();
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

function showContent() {
  const loginSection = document.querySelector(".login");
  const contentSection = document.getElementById("content");

  loginSection.style.display = "none";
  contentSection.style.display = "block";
}

function showMarkAttendance() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
    <h2>Mark Attendance</h2>
    <label for="studentId">Student ID:</label>
    <input type="text" id="studentId">
    <label for="status">Status:</label>
    <select id="status">
      <option value="present">Present</option>
      <option value="absent">Absent</option>
      <option value="late">Late</option>
    </select>
    <button onclick="markAttendance()">Submit</button>
  `;
}

function markAttendance() {
  const studentId = document.getElementById("studentId").value;
  const status = document.getElementById("status").value;
  console.log("Marking attendance - Student ID:", studentId, "Status:", status);
  alert("Attendance marked successfully!");
}

function showAttendanceRecords() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = `
    <h2>Attendance Records</h2>
    <div class="record">2023-07-19: prudhviraj - Present</div>
    <div class="record">2023-07-18: sreelekha - Absent</div>
    <div class="record">2023-07-19: raj - Present</div>
    <div class="record">2023-07-18: sree  - Absent</div>
    <div class="record">2023-07-19: prud  - Present</div>
    <div class="record">2023-07-18: lekha - late</div>
  `;
}

function logout() {
  authenticated = false;
  const loginSection = document.querySelector(".login");
  const contentSection = document.getElementById("content");

  loginSection.style.display = "flex";
  contentSection.style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
