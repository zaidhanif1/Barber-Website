document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("tDhHIC_nIJktkKSyH");
  
    // Define your business hours
    const businessHours = { start: 9, end: 17 };
  
    // Function to update time slots based on selected date
    function updateTimeSlots() {
      const selectedDate = new Date(document.getElementById("date").value);
      const currentTime = new Date();
      const timeSelect = document.getElementById("time");
      timeSelect.innerHTML = ""; // Clear existing options
  
      // Check if selected date is today
      if (selectedDate.toDateString() === currentTime.toDateString()) {
        const currentHour = currentTime.getHours();
        // Populate time slots starting from next available hour
        for (let i = Math.ceil(currentHour / 0.5) * 0.5; i <= businessHours.end; i += 0.5) {
          const option = document.createElement("option");
          const hour = (i % 12) || 12; // Convert to regular time
          const minutes = (i % 1) ? "30" : "00";
          const period = i < 12 ? 'AM' : 'PM';
          option.text = `${hour}:${minutes} ${period}`;
          option.value = `${hour}:${minutes} ${period}`;
          timeSelect.add(option);
        }
      } else {
        for (let i = businessHours.start; i <= businessHours.end; i++) {
          for (let j = 0; j < 2; j++) {
            const option = document.createElement("option");
            const hour = (i % 12) || 12; // Convert to regular time
            const minutes = (j === 0) ? "00" : "30"; // 
            const period = i < 12 ? 'AM' : 'PM';
            option.text = `${hour}:${minutes} ${period}`;
            option.value = `${hour}:${minutes} ${period}`;
            timeSelect.add(option);
          }
        }
      }
    }
  
    // Initial call to populate time slots
    updateTimeSlots();
  
    // Expose function to global scope
    window.updateTimeSlots = updateTimeSlots;
  
    window.sendMail = function() {
      const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        category: document.getElementById("category").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value
      };
  
      const serviceID = "service_2ckei6k";
      const templateID = "template_6j6c08k";
  
      emailjs.send(serviceID, templateID, params)
       
  
      const paramsForUser = {
        userName: params.name,
        userEmail: params.email,
        myEmail: "zc.utzzzz1@gmail.com",
        businessPhone: "(304) 449-7012",
      };
  
      const userTemplateID = "template_z2f0uto";
  
      emailjs.send(serviceID, userTemplateID, paramsForUser)
       
    }
  });
  

let popup = document.getElementById("popup")

function openPopup()
{
  popup.classList.add('open-popup')
}
function closePopup()
  {
    popup.classList.remove('open-popup')
  }
