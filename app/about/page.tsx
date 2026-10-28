import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-cyan-700 mb-6"
            style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)' }}>
            🛡️ About Us
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            We work for you —<br />not the insurance companies.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-8">
            Insurance Consultancy was founded on a simple belief: people deserve honest, unbiased advice about their auto insurance coverage. Not a sales pitch. Not a commission-driven recommendation. Just real guidance from someone who actually understands the fine print.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why we exist</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Most people have no idea if they&apos;re properly covered until something goes wrong. And by then, it&apos;s too late. Insurance agents earn commissions from the policies they sell — which means their advice is never truly neutral.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                We charge a flat fee and work exclusively for our clients. That means we can tell you honestly when you&apos;re overpaying, when you&apos;re underinsured, and what you actually need — without any financial incentive to steer you toward a particular policy.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our consultants have deep experience with auto insurance markets, coverage types, and carrier practices. We read the fine print so you don&apos;t have to.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: '🚫', title: 'No commissions, ever', desc: 'We never earn money from insurance companies. Our only incentive is to give you the best advice.' },
                { icon: '🔎', title: 'Deep policy expertise', desc: 'We understand coverage types, exclusions, and carrier practices that most consumers never see.' },
                { icon: '🗣️', title: 'Real people, real conversations', desc: 'You talk to a consultant — not a chatbot, not a form, not an algorithm.' },
                { icon: '✅', title: 'You make the final call', desc: 'We inform and advise. The decision is always yours.' },
              ].map(item => (
                <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center glass-card p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get honest advice?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Book a free consultation and talk to a real consultant who will review your coverage and help you find the right policy.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}>
            Get a Free Consultation →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
