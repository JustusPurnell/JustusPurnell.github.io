document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const result = document.getElementById("result");
    const coursesContainer = document.getElementById("coursesContainer");
    const addCourseButton = document.getElementById("addCourse");

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const mascot = document.getElementById("mascot").value;
        const image = document.getElementById("image").files[0];
        const imageCaption = document.getElementById("imageCaption").value;
        const personalBackground = document.getElementById("personalBackground").value;
        const professionalBackground = document.getElementById("professionalBackground").value;
        const academicBackground = document.getElementById("academicBackground").value;
        const webDevelopmentBackground = document.getElementById("webDevelopmentBackground").value;
        const primaryPlatform = document.getElementById("primaryPlatform").value;
        const courses = Array.from(coursesContainer.querySelectorAll("input[name='courses']")).map(input => input.value);
        const funnyThing = document.getElementById("funnyThing").value;
        const anythingElse = document.getElementById("anythingElse").value;

       
        result.innerHTML = `
            <h2>${name}'s Introduction</h2>
            <img src="${URL.createObjectURL(image)}" alt="${imageCaption}" width="300"><br>
            <p><strong>Image Caption:</strong> ${imageCaption}</p>
            <p><strong>Mascot:</strong> ${mascot}</p>
            <p><strong>Personal Background:</strong> ${personalBackground}</p>
            <p><strong>Professional Background:</strong> ${professionalBackground}</p>
            <p><strong>Academic Background:</strong> ${academicBackground}</p>
            <p><strong>Web Development Background:</strong> ${webDevelopmentBackground}</p>
            <p><strong>Primary Platform:</strong> ${primaryPlatform}</p>
            <p><strong>Courses:</strong> ${courses.join(", ")}</p>
            <p><strong>Funny Thing:</strong> ${funnyThing}</p>
            <p><strong>Anything Else:</strong> ${anythingElse}</p>
        `;
        form.style.display = "none";
        result.style.display = "block";
    });

   
    form.addEventListener("reset", () => {
        result.style.display = "none";
        form.style.display = "block";
    });

   
    addCourseButton.addEventListener("click", () => {
        const newInput = document.createElement("div");
        newInput.innerHTML = `
            <input type="text" name="courses" placeholder="Enter a course">
            <button type="button" class="deleteCourse">Delete</button>
        `;
        coursesContainer.appendChild(newInput);

      
        newInput.querySelector(".deleteCourse").addEventListener("click", () => {
            coursesContainer.removeChild(newInput);
        });
    });
});
