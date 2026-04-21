
const analyzeBtn = document.getElementById("analyzeBtn");

const inputText = document.getElementById("inputText");

const modeSelect = document.getElementById("modeSelect");

const outputSection = document.getElementById("outputSection");

const summaryOutput = document.getElementById("summaryOutput");

const keyPointsOutput = document.getElementById("keyPointsOutput");

const actionsOutput = document.getElementById("actionsOutput");

const toneOutput = document.getElementById("toneOutput");

const risksOutput = document.getElementById("risksOutput");

const quickShareOutput = document.getElementById("quickShareOutput");

analyzeBtn.addEventListener("click", () => {

  const text = inputText.value.trim();

  const mode = modeSelect.value;

  if (!text) {

    alert("Please paste some text first.");

    return;

  }

  let summary =

    "This text appears to contain formal or complex information. ClarityLens AI simplifies it so the user can understand it quickly.";

  let keyPoints = [

    "The message contains important information.",

    "The content should be read carefully.",

    "The user may need to take action based on the message."

  ];

  let actions = [

    "Read the simplified summary first.",

    "Check if there is any deadline or response required.",

    "Confirm any unclear details with the sender."

  ];

  let tone = "Formal and informative";

  let risks = [

    "Possible missing details",

    "User should verify deadlines",

    "Some instructions may be unclear"

  ];

  let quickShare =

    "This message is important. Please read the summary and check if any action or deadline is mentioned.";

  if (mode === "student") {

    tone = "Formal, academic";

    quickShare =

      "This looks like an important academic message. Please check the key points and actions.";

  }

  keyPointsOutput.innerHTML = "";

  actionsOutput.innerHTML = "";

  risksOutput.innerHTML = "";

  summaryOutput.textContent = summary;

  toneOutput.textContent = tone;

  quickShareOutput.textContent = quickShare;

  keyPoints.forEach(point => {

    const li = document.createElement("li");

    li.textContent = point;

    keyPointsOutput.appendChild(li);

  });

  actions.forEach(action => {

    const li = document.createElement("li");

    li.textContent = action;

    actionsOutput.appendChild(li);

  });

  risks.forEach(risk => {

    const li = document.createElement("li");

    li.textContent = risk;

    risksOutput.appendChild(li);

  });

  outputSection.classList.remove("hidden");

});

