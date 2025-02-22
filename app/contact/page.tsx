import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <div className="pt-24">
        <ContactForm />
      </div>
    </main>
  );
}
