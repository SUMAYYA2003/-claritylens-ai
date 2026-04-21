document.addEventListener("DOMContentLoaded", function () {
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

  analyzeBtn.addEventListener("click", function () {
    const text = inputText.value.trim();
    const mode = modeSelect.value;

    if (!text) {
      alert("Please paste some text first.");
      return;
    }

    let summary = "";
    let keyPoints = [];
    let actions = [];
    let tone = "";
    let risks = [];
    let quickShare = "";

    if (text.toLowerCase().includes("payment")) {
      summary = "This message says that your payment is not yet confirmed and you may need to send a document soon.";
      keyPoints = [
        "Payment has not been confirmed yet.",
        "A required document must be sent.",
        "The document should be sent within 24 hours."
      ];
      actions = [
        "Check whether you already submitted the document.",
        "Send the required document if it is missing.",
        "Act within 24 hours to avoid delay."
      ];
      tone = "Formal support notice";
      risks = [
        "Payment issue detected",
        "24-hour deadline mentioned",
        "Possible processing delay"
      ];
      quickShare = "Payment is not confirmed yet. A required document may need to be sent within 24 hours.";
    } else if (text.toLowerCase().includes("deadline")) {
      summary = "This looks like an important notice about a deadline and required submission details.";
      keyPoints = [
        "There is a submission deadline.",
        "Late submission may cause a penalty.",
        "Required links or files must be included."
      ];
      actions = [
        "Check the deadline carefully.",
        "Submit before the deadline.",
        "Make sure all required files or links are included."
      ];
      tone = "Formal academic notice";
      risks = [
        "Deadline detected",
        "Penalty risk",
        "Missing file risk"
      ];
      quickShare = "Important notice: there is a deadline and all required submission items must be included.";
    } else {
      summary = "This text appears to contain important formal information. ClarityLens AI simplifies it so the user can understand it quickly.";
      keyPoints = [
        "The message contains important information.",
        "The content should be read carefully.",
        "The user may need to take action based on the message."
      ];
      actions = [
        "Read the simplified summary first.",
        "Check if there is any deadline or response required.",
        "Confirm any unclear details with the sender."
      ];
      tone = mode === "student" ? "Formal academic" : "Formal and informative";
      risks = [
        "Possible missing details",
        "User should verify deadlines",
        "Some instructions may be unclear"
      ];
      quickShare = "This message is important. Please read the summary and check if any action or deadline is mentioned.";
    }

    summaryOutput.textContent = summary;
    toneOutput.textContent = tone;
    quickShareOutput.textContent = quickShare;

    keyPointsOutput.innerHTML = "";
    actionsOutput.innerHTML = "";
    risksOutput.innerHTML = "";

    keyPoints.forEach(function (point) {
      const li = document.createElement("li");
      li.textContent = point;
      keyPointsOutput.appendChild(li);
    });

    actions.forEach(function (action) {
      const li = document.createElement("li");
      li.textContent = action;
      actionsOutput.appendChild(li);
    });

    risks.forEach(function (risk) {
      const li = document.createElement("li");
      li.textContent = risk;
      risksOutput.appendChild(li);
    });

    outputSection.classList.remove("hidden");
    outputSection.scrollIntoView({ behavior: "smooth" });
  });
});
