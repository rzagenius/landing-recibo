// src/pages/LandingPage.jsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Moon, Sun } from "lucide-react";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function LandingPage() {
    const [theme, setTheme] = useState("light");
    const [email, setEmail] = useState("");
    const form = useRef();

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Gracias por registrarte, ${email}`);
            setEmail("");
        }
    };

    const benefits = [
        "📥 Sube tus recibos en segundos",
        "🔍 Búsqueda inteligente por fecha, monto o proveedor",
        "📊 Reportes listos para tu contador",
        "🔒 Seguridad de nivel bancario",
    ];

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0g5s1ia', 'template_g6zfjyb', form.current, 'irYpGEi4ahij5houb')
            .then(
                (result) => {
                    alert('¡Solicitud enviada con éxito! 📬');
                    form.current.reset();
                },
                (error) => {
                    alert('Ups... hubo un error. 😓 Intenta más tarde.');
                    console.error(error.text);
                }
            );
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
            {/* Header fijo con fondo y sombra */}
            <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
                <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Logo RecibotiA"
                            className="h-10 w-auto sm:h-12 md:h-14"
                        />
                    </div>

                    {/* Toggle de modo oscuro */}
                    <div>
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
                        >
                            {theme === "dark" ? <Sun /> : <Moon />}
                        </button>
                    </div>
                </div>
            </div>
            <section className="text-center py-20 px-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white dark:from-blue-700 dark:to-purple-700">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Adiós al caos de recibos 📄✨
                </motion.h1>
                <p className="text-lg md:text-xl mb-6">
                    Tu app RecibotiA para escanear, organizar y olvidarte del desorden.
                </p>
                <a
                    href="#demo"
                    className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-blue-100 transition"
                >
                    Ver demo
                </a>
            </section>

            {/* Demo */}
            <section id="demo" className="py-16 px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Mira cómo funciona</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                    Tan fácil como tomar una foto.
                </p>
                <video
                    className="rounded-xl mx-auto shadow-xl max-w-full"
                    src="/demo.mp4"
                    controls
                    autoPlay
                    muted
                    loop
                />
            </section>

            {/* Beneficios */}
            <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">¿Por qué usarla?</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 text-lg"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <CheckCircle className="text-green-500" />
                            <span>{benefit}</span>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* imagen */}
            <section className="py-10 px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Interacción en WhatsApp</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                    Así es como tu recibo cobra vida con nuestra inteligencia artificial 🤖📷
                </p>

                <motion.img
                    src="/recibotia-demo.png"
                    alt="Demo RecibotiA en WhatsApp"
                    className="rounded-xl shadow-lg mx-auto w-full md:w-2/3 lg:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </section>

            {/* Testimonios */}
            <section className="py-16 px-4 max-w-3xl mx-auto text-center">
                <blockquote className="italic text-xl text-gray-700 dark:text-gray-300 mb-4">
                    “Antes perdía recibos por todos lados. Ahora tengo TODO bajo control. ¡Gracias, app mágica!”
                </blockquote>
                <cite className="text-sm text-gray-500 dark:text-gray-400">— Laura, freelancer feliz</cite>
            </section>

            {/* Solicita tu demo */}
            <section className="py-16 px-4 bg-indigo-600 dark:bg-indigo-700 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Solicita tu demo personalizada</h2>
                <p className="mb-6">Descubre cómo nuestra app puede transformar tu gestión de recibos 💼✨</p>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-4 items-center max-w-xl mx-auto"
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Tu nombre"
                        className="px-4 py-2 rounded-lg bg-white text-gray-800 w-full"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Tu email"
                        className="px-4 py-2 rounded-lg bg-white text-gray-800 w-full"
                        required
                    />
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="¿En qué te gustaría que te ayudemos?"
                        className="px-4 py-2 rounded-lg bg-white text-gray-800 w-full"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-100"
                    >
                        Enviar solicitud
                    </button>
                </form>
            </section>


            {/* Footer */}
            <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
                © {new Date().getFullYear()} RecibotiA. Todos los derechos reservados.
            </footer>
        </div>
    );
}