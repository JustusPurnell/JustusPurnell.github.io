document.addEventListener("DOMContentLoaded", () => {
    console.log("survey.js is loaded and running");

    const form = document.getElementById("byo-form");
    const courseContainer = document.getElementById("course-container");
    const addCourseButton = document.getElementById("add-course");


    addCourseButton.addEventListener("click", () => {
        const courseEntry = document.createElement("div");
        courseEntry.classList.add("course-entry");

        const input = document.createElement("input");
        input.type = "text";
        input.name = "course";
        input.placeholder = "Enter course name";
        input.required = true;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.classList.add("delete-course");
        deleteButton.textContent = "Delete";

        courseEntry.appendChild(input);
        courseEntry.appendChild(deleteButton);
        courseContainer.appendChild(courseEntry);
    });


    courseContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-course")) {
            e.target.parentElement.remove();
        }
    });


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const imageFile = formData.get("image");
        const imageURL = imageFile ? URL.createObjectURL(imageFile) : "";

        const main = document.querySelector("main");
        main.innerHTML = `
            <header style="text-align: center; padding: 20px;">
                <h1>${formData.get("name")} || ${formData.get("mascot")}</h1>
                ${imageURL ? `<img src="${imageURL}" alt="User Image" style="max-width: 200px; height: auto; border-radius: 10px; margin: 10px auto;">` : ""}
            </header>
            <main style="text-align: center; max-width: 800px; margin: 0 auto; padding: 20px;">
                <section style="margin-bottom: 20px;">
                    <h2>Personal Background</h2>
                    <p>${formData.get("image-caption")}</p>
                    <p>${formData.get("personal-background")}</p>
                </section>
                <section style="margin-bottom: 20px;">
                    <h2>Professional Background</h2>
                    <p>${formData.get("professional-background")}</p>
                </section>
                <section style="margin-bottom: 20px;">
                    <h2>Academic Background</h2>
                    <p>${formData.get("academic-background")}</p>
                </section>
                <section style="margin-bottom: 20px;">
                    <h2>Background in Web Development</h2>
                    <p>${formData.get("web-background")}</p>
                </section>
                <section style="margin-bottom: 20px;">
                    <h2>Primary Computer Platform</h2>
                    <p>${formData.get("platform")}</p>
                </section>
                <section style="margin-bottom: 20px;">
                    <h2>Courses I'm Taking</h2>
                    <ul style="list-style-type: none; padding: 0;">
                        ${Array.from(courseContainer.querySelectorAll("input")).map((input) => `<li>${input.value}</li>`).join("")}
                    </ul>
                </section>
                <section style="margin-bottom: 20px;">
                    <h2>Funny/Interesting Item</h2>
                    <p>${formData.get("funny-thing")}</p>
                </section>
                <section style="margin-bottom: 20px;">
                    <h2>Additional Info</h2>
                    <p>${formData.get("anything-else")}</p>
                </section>
            </main>
        `;
    });
});
