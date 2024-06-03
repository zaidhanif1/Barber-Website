function sendMail() 
{
    var params = 
    {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        
    }


const serviceID = "service_2ckei6k";
const templateID = "template_6j6c08k";

emailjs.send(serviceID, templateID, params)
.then(
    res => 
    {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            console.log(res);
            alert("Your message was successfully sent bra.")
    }

)
.catch(err=>console.log(err));
}





