document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const receiptDetails = document.getElementById('receipt-details');
    const receiptSection = document.getElementById('form-receipt');
    const confirmationMessage = document.getElementById('confirmation-message');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Retrieve form data
        const formData = new FormData(bookingForm);
        const destination = formData.get('destination');
        const checkinDate = formData.get('checkin-date');
        const checkoutDate = formData.get('checkout-date');
        const guests = formData.get('guests');
        const name = formData.get('name');
        const email = formData.get('email');

        // Construct receipt HTML
        const receiptHTML = `
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Check-in Date:</strong> ${checkinDate}</p>
            <p><strong>Check-out Date:</strong> ${checkoutDate}</p>
            <p><strong>Number of Guests:</strong> ${guests}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        // Update receipt details section with the receipt HTML
        receiptDetails.innerHTML = receiptHTML;

        // Show the receipt section
        receiptSection.style.display = 'block';

        // Generate confirmation message
        const confirmationMsg = `Thank you, ${name}! Your booking for ${destination} from ${checkinDate} to ${checkoutDate} for ${guests} guests is confirmed. An email has been sent to ${email} with further details.`;

        // Display confirmation message
        confirmationMessage.textContent = confirmationMsg;

        // Clear form fields
        bookingForm.reset();
    });
});
