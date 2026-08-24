// ===============================
// EDIT PROFILE
// ===============================

const editBtn = document.querySelector(".edit-profile-btn");
const inputs = document.querySelectorAll(".profile-info input");

editBtn.addEventListener("click", function () {

    if (editBtn.innerText === "Edit Profile") {

        inputs.forEach(input => {
            input.disabled = false;
        });

        editBtn.innerText = "Save Changes";

    } else {

        inputs.forEach(input => {
            input.disabled = true;
        });

        editBtn.innerText = "Edit Profile";

        alert("Profile updated successfully!");
    }
});


// ===============================
// SCAN AGAIN
// ===============================

const scanButtons = document.querySelectorAll(".scan-btn");

scanButtons.forEach(button => {

    button.addEventListener("click", function () {

        button.innerText = "Scanning...";

        setTimeout(() => {

            button.innerText = "Scan Complete";

        }, 2000);

    });

});


// ===============================
// REMOVE REPOSITORY
// ===============================

const removeButtons =
    document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {

    button.addEventListener("click", function () {

        const repository =
            button.closest(".repository-card");

        repository.remove();

    });

});