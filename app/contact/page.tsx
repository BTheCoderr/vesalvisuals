import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <ContactForm />
      </div>
    </main>
  );
}
