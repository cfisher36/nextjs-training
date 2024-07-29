"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { ContactMeSchema } from "@/utils/contactMeSchema";
import "./styles.css";

type ContactMeInputs = z.infer<typeof ContactMeSchema>;

const ContactMeForm: React.FC = () => {
    
    const [message, setMessage] = useState("");

    const form = useForm<ContactMeInputs>({
        resolver: zodResolver(ContactMeSchema),
    });

    const sendFormData = async (formData : ContactMeInputs) => {
        try {
            const response : Response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch message');
            }

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error('Error fetching message:', error);
        }
    };

    const processForm: SubmitHandler<ContactMeInputs> = async (data) => {
        try {
            sendFormData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const resetForm = () => {
        form.reset();
        setMessage("");
    }

    return (
        <form onSubmit={form.handleSubmit(processForm)} className="w-full">
            <div className="font-bold">Contact Me</div>
            <div>
                <label htmlFor="name" className="block">Name:</label>
                <input
                    type="text"
                    id="name"
                    {...form.register("name")}
                    className="base-input responsive-text"
                />
                {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="email" className="block">Email:</label>
                <input
                    type="email"
                    id="email"
                    {...form.register("email")}
                    className="base-input responsive-text"
                />
                {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="message" className="block">Message:</label>
                <textarea
                    id="message"
                    {...form.register("message")}
                    className="w-full rounded-sm border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    rows={3}
                />
                {form.formState.errors.message && (
                    <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
                )}
            </div>
            <div>{message}</div>
            <div className="py-1">
            <button type="submit" className="bg-green-500 hover:bg-green-300 text-white font-bold py-1 px-4 rounded mr-2">Save</button>
            <button type="button" onClick={resetForm} className="bg-red-600 hover:bg-red-300 text-white font-bold py-1 px-4 rounded">Reset</button>
            </div>
        </form>
    )
}

export default ContactMeForm;