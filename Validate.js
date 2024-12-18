function get_info() {
    // Get form values
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const fathername = document.getElementById("fathername").value;
    const mothername = document.getElementById("mothername").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("pno").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const qualification = document.getElementById("quali").value;

    // Validation checks
    if (!firstname || !lastname || !fathername || !mothername || !email || !phone || !dob || !gender || !qualification) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Display entered information
    alert('Registration Successful!\n\n');
    alert(`Registration Successful!\n\nFirst Name: ${firstname}\nLast Name: ${lastname}\nFather's Name: ${fathername}\nMother's Name: ${mothername}\nEmail: ${email}\nPhone: ${phone}\nDate of Birth: ${dob}\nGender: ${gender ? gender.value : 'Not selected'}\nQualification: ${qualification}`);
}
