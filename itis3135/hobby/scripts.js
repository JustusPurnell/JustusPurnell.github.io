// Define the showSection function first
function showSection(sectionId) {
    document.querySelectorAll("section").forEach((section) => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("linkhome").addEventListener("click", function (e) {
        e.preventDefault();
        showSection("what");
    });
    
    document.getElementById("linkabout").addEventListener("click", function (e) {
        e.preventDefault();
        showSection("who");
    });
    
    document.getElementById("linkcontent").addEventListener("click", function (e) {
        e.preventDefault();
        showSection("when");
    });
    
    document.getElementById("linksetup").addEventListener("click", function (e) {
        e.preventDefault();
        showSection("where");
    });
    
    document.getElementById("linktips").addEventListener("click", function (e) {
        e.preventDefault();
        showSection("how");
    });
    
    document.getElementById("linkwhy").addEventListener("click", function (e) {
        e.preventDefault();
        showSection("why");
    });
    
    document.getElementById("linkai").addEventListener("click", function (e) {
        e.preventDefault();
        showSection("ai-prompts");
    });
});

