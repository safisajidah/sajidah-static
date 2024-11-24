function setCookie(name, value, days = 30) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    const cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].trim().split("=");
        if (cookiePair[0] === name) {
            return cookiePair[1];
        }
    }
    return null;
}

function updateVisitorCount() {
    let visitorCount = localStorage.getItem("visitorCount");

    if (!getCookie("visited")) {
        // First-time visitor
        visitorCount = visitorCount ? parseInt(visitorCount) + 1 : 1; // Increment or set to 1
        localStorage.setItem("visitorCount", visitorCount);
        document.getElementById("visitor-count").innerText = visitorCount;

        setCookie("visited", "true", 30); // Set a cookie for 30 days
    } else {
        // Returning visitor
        visitorCount = visitorCount || 1; // If localStorage is missing, default to 1
        document.getElementById("visitor-count").innerText = visitorCount;
    }
}

// Call the function to update the visitor count
updateVisitorCount();