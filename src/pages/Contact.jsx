// import React, { useState } from 'react';
// import emailjs from 'emailjs-com'
// function Contact() {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [emailSent, setEmailSent] = useState(false);

//     const submit = () => {
//         if (name && email && message) {
//             const serviceId = 'service_dnb2wv4';
//             const templateId = 'template_okf6vwu';
//             const userId = 'XToFv5sg1a2bOqZoQ';
//             const templateParams = {
//                 name,
//                 email,
//                 message
//             };

//             emailjs.send(serviceId, templateId, templateParams, userId)
//                 .then(response => console.log(response))
//                 .then(error => console.log(error));

//             setName('');
//             setEmail('');
//             setMessage('');
//             setEmailSent(true);
//         } else {
//             alert('Please fill in all fields.');
//         }
//     }

//     return (
//         <form onSubmit={sendEmail} className="bg-white">
//             <label>Name</label>
//             <input type="text" name="user_name" />
//             <label>Email</label>
//             <input type="email" name="user_email" />
//             <label>Message</label>
//             <textarea name="message" />
//             <input type="submit" value="Send" disabled={isSubmitting} />
//             {stateMessage && <p>{stateMessage}</p>}
//         </form>
//     );
// }

// export default Contact;


import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if (name && email && message) {
            const serviceId = ''; 
            const templateId = ''; 
            const userId = ''; 
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => {
                    console.log('Email sent:', response);
                    setEmailSent(true);
                })
                .catch(error => {
                    console.error('Email failed to send:', error);
                    setEmailSent(false);
                });

            setName('');
            setEmail('');
            setMessage('');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <form onSubmit={sendEmail} className="bg-white">
            <label>Name</label>
            <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Email</label>
            <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Message</label>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <input type="submit" value="Send" disabled={emailSent} />
            {emailSent && <p>Email sent successfully!</p>}
        </form>
    );
}

export default Contact;
