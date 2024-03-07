"use server";
import { Resend } from 'resend';

const resend = new Resend('e_UebAf2gq_Q88SnNogdGxkSRk7bbZFum6u');

export default async function sendEmail() {
    
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ouwaiszlaigi@gmail.com',
      subject: 'Hello world',
      text:"Hello from Resend!"
    });
    
  } catch (error) {
    console.log("error", error);
    
  }
}
