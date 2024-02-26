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
        <form onSubmit={sendEmail} className="block rounded-md xl:w-2/3 w-11/12 mx-auto p-6 mt-20 mb-20">
            <div className="mb-4">
                <label className="block text-[#ff5277] text-xl font-bold mb-2" htmlFor="user_name">
                    Name
                </label>
                <input
                    className="appearance-none border border-[#ADA7AD] rounded-md bg-inherit w-full py-2 px-3 leading-tight"
                    id="user_name"
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-[#ff5277] font-bold mb-2 text-xl" htmlFor="user_email">
                    Email
                </label>
                <input
                    className="appearance-none border border-[#ADA7AD] bg-inherit rounded-md w-full py-2 px-3 leading-tight"
                    id="user_email"
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-4">
                <label className="block text-[#ff5277] font-bold mb-2 text-xl" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="appearance-none border border-[#ADA7AD] bg-inherit rounded-md w-full py-2 px-3 text-gray-700 leading-tight"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    placeholder="Enter your message"
                ></textarea>
            </div>
            <button
                className="flex mx-auto w-1/2 md:w-1/5 justify-center text-[#ADA7AD] border border-[#ADA7AD] hover:text-[#ff5277] hover:border-[#ff5277] transition duration-300 hover:scale-110 font-bold py-2 px-4 rounded"
                type="submit"
                disabled={emailSent}
            >
                Send
            </button>
            {emailSent && <p className="text-green-500">Email sent successfully!</p>}
        </form>
    );
}

export default Contact;
