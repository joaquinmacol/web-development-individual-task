function validateForm() {
    var name = document.getElementById('name').value.trim();
    var age = document.getElementById('age').value.trim();
    var address = document.getElementById('address').value.trim();
    var email = document.getElementById('email').value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var contactNumber = document.getElementById('contactnumber').value.trim();
    var driverLicenseNumber = document.getElementById('driverlicensenumber').value.trim();
    var registrationDate = document.getElementById('registrationdate').value.trim();
    var motorcycleNumber = document.getElementById('motorcyclenumber').value.trim();
    var color = document.getElementById('color').value.trim();
    var fuelType = document.getElementById('fueltype').value;
    var inspectionStatus = document.getElementById('inspectionstatus').checked;

    if (!name || !age || !address || !email || !gender || !contactNumber || !driverLicenseNumber || !registrationDate || !motorcycleNumber || !color || !fuelType || !inspectionStatus) {
        alert('Please fill out all fields.');
        return false;
    }

    if (isNaN(age) || age <= 0) {
        alert('Age must be a valid positive number.');
        return false;
    }

    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    var contactRegex = /^\d{11}$/;
    if (!contactRegex.test(contactNumber)) {
        alert('Please enter a valid 11-digit contact number.');
        return false;
    }

    var currentDate = new Date().toISOString().slice(0, 10);
    if (registrationDate > currentDate) {
        alert('Registration Date cannot be in the future.');
        return false;
    }

    return true;
}

function submitForm() {
    if (validateForm()) {
        document.getElementById('Form').submit();
    }
}
