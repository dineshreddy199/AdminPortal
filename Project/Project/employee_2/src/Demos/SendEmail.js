// import React from 'react';
// import axios from 'axios';

// const SendEmail = () => {
//     const sendEmail = () => {
//         const url = "https://api.zeptomail.in/v1.1/email";
//         const token = "Zoho-enczapikey PHtE6r0EFLjr3jMsp0QAt/+wE8TyN40tr+hmKFMVsIgUXqMFTk0Bqdl6wDPiqU8jXPJHR/ObzN5ttLOe5+ONdGrtZG1NXmqyqK3sx/VYSPOZsbq6x00etFUdcE3aUIbvetFq0ifQvdbcNA==";
        
//         const data = {
//             "from": {
//                 "address": "noreply@qtnext.com",
//                 "name": "noreply"
//             },
//             "to": [
//                 {
//                     "email_address": {
//                         "address": "welcome@qtnext.com",
//                         "name": "QTNEXT"
//                     }
//                 }
//             ],
//             "subject": "Test Email",
//             "htmlbody": "<div><b> Test email sent successfully.</b></div>"
//         };
        
//         axios.post(url, data, {
//             headers: {
//                 'Authorization': `Zoho-enczapikey ${token}`,
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {
//             console.log("success", response);
//             alert('Sucessfull');
//         })
//         .catch(error => {
//             console.log("error", error);
//             alert('Failed');
//         });
//     };

//     return (
//         <>
//         <div>
//             <button onClick={sendEmail}>Send Test Email</button>
//         </div>
//         </>
//     );
// };

// export default SendEmail;
