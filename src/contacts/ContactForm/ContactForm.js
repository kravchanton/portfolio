import React from 'react';
import {useForm, ValidationError} from '@formspree/react';
import styles from './ContactForm.module.scss'

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("meqnalzg");
    if (state.succeeded) {
        return  <div className={styles.wrapper}>
            <p>Message sent successfully!</p>
        </div>
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button type="submit" disabled={state.submitting}>
                        Send
                    </button>
                </div>
            </form>
        </div>

    );
}
