function startChat() {
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (phoneNumber.trim() !== '') {
        alert(`Starting chat for phone number: ${phoneNumber}`);
    }
}
