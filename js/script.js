function openSurprise() {
    window.location.href = "video.html";
}

function nextPage() {
    window.location.href = "cake.html";
}
function goCake() {
    document.getElementById("questionBox").style.display = "none";
    document.getElementById("cakeSection").style.display = "block";
    document.getElementById("cakeImage").style.display = "block";
    document.getElementById("cakeMessage").innerText =
        "Here is your birthday cake, made just for you 🎂";
    document.getElementById("cakeControls").style.display = "block";
    document.getElementById("blowBtn").style.display = "inline-block";
    document.getElementById("wishText").innerText = "";
}

function noCake() {
    document.getElementById("questionBox").style.display = "none";
    document.getElementById("cakeSection").style.display = "block";
    document.getElementById("cakeImage").style.display = "none";
    document.getElementById("cakeMessage").innerText =
        "Oh no! You don't have a cake right now.";
    document.getElementById("cakeControls").style.display = "block";
    document.getElementById("blowBtn").style.display = "none";
    document.getElementById("wishText").innerText =
        "No cake yet.";
    document.getElementById("memoriesButton").style.display = "none";
}

function nextMemories() {
    window.location.href = "memories.html";
}