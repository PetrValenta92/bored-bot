
document.getElementById("activity-btn").addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("activity").textContent = data.activity;
            document.getElementById("title").textContent = "🦾 ActiveBot 🐱‍🏍";
            document.getElementById("bot").classList.replace("bored-bg", "active-bg");
        });
    
    

});

