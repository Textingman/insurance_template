import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.3) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-cyan-700 mb-6"
            style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Free Consultation · No Commissions · We Work For You
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">
            Stop Overpaying
            <br /><span className="gradient-text-blue">for Car Insurance.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Talk to a real insurance consultant who reviews your coverage, compares your options, and helps you find the right policy — without the sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="px-10 py-5 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}>
              Get a Free Consultation →
            </Link>
            <Link href="/insurance"
              className="px-10 py-5 text-base font-semibold text-gray-700 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all">
              How It Works
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">No commitment. No commissions. Just honest advice.</p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why work with a consultant?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Online quote tools show you prices. They don&apos;t tell you if you&apos;re actually covered — or if you&apos;re paying for coverage you don&apos;t need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🚫',
                title: 'We don\'t earn commissions',
                desc: 'Insurance agents earn commissions from the policies they sell. We charge a flat fee and work only for you — so our advice is never influenced by what pays us more.',
              },
              {
                icon: '🔎',
                title: 'We read the fine print',
                desc: 'Two policies can look identical in price but be very different in what they actually cover. We read the fine print so you don\'t find out the hard way.',
              },
              {
                icon: '🗣️',
                title: 'Real conversations, not forms',
                desc: 'Your situation is unique. A real consultant listens to your needs and gives you advice that actually fits — not generic recommendations from an algorithm.',
              },
            ].map(item => (
              <div key={item.title} className="glass-card p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we help with */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What we help you figure out</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: 'Am I overpaying for my current policy?', a: 'We compare your current rate against the market and identify where you\'re leaving money on the table.' },
              { q: 'How much coverage do I actually need?', a: 'We look at your assets, vehicle value, and risk profile to recommend coverage that actually protects you.' },
              { q: 'What do all these coverage types mean?', a: 'Liability, collision, comprehensive, uninsured motorist — we explain each one in plain English.' },
              { q: 'What discounts am I missing?', a: 'Safe driver, multi-policy, low mileage — we identify every discount you might qualify for.' },
              { q: 'Should I raise or lower my deductible?', a: 'We run the math based on your financial situation and help you find the right balance.' },
              { q: 'What happens if I get in an accident?', a: 'We walk you through exactly what your coverage means in real-world scenarios.' },
            ].map(item => (
              <div key={item.q} className="glass-card p-5">
                <p className="font-bold text-gray-900 mb-2 text-sm">❓ {item.q}</p>
                <p className="text-xs text-gray-500 leading-relaxed">✅ {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-14">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '1', title: 'Book a free consultation', desc: 'Fill out our short form and a consultant will reach out within 1 business day.' },
              { num: '2', title: 'We review your situation', desc: 'Your consultant talks through your current coverage, driving habits, and what you\'re hoping to achieve.' },
              { num: '3', title: 'You get clear recommendations', desc: 'We present our findings in plain English and help you choose the right coverage with confidence.' },
            ].map(step => (
              <div key={step.num} className="glass-card p-6 text-left">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-4"
                  style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}>
                  {step.num}
                </div>
                <p className="font-bold text-gray-900 mb-2">{step.title}</p>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center glass-card p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to stop overpaying?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Book a free consultation and talk to a real person who will review your coverage and help you find the right policy.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}>
            Get My Free Consultation →
          </Link>
          <p className="text-sm text-gray-400 mt-4">$300 one-time fee · No commissions · No hidden costs</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
