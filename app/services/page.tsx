import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-cyan-700 mb-6"
            style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)' }}>
            🛡️ Our Services
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Everything we do is about
            <br /><span className="gradient-text-blue">finding you the right coverage.</span>
          </h1>
          <p className="text-xl text-gray-500">
            We offer one service: expert, unbiased auto insurance consultancy. No car buying. No maintenance. Just insurance — done right.
          </p>
        </div>
      </section>

      {/* Main service */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-10 mb-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-700 mb-4"
                  style={{ background: 'rgba(8,145,178,0.1)' }}>
                  🛡️ Insurance Finder · $300 one-time
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Auto Insurance Consultancy</h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  A real consultant reviews your current coverage (or helps you find your first policy), compares options from multiple providers, and gives you clear, honest recommendations — in plain English.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
                  style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}>
                  Book a Free Consultation →
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '📞', title: 'We start with a conversation', desc: 'Your consultant talks with you about your vehicle, driving habits, financial situation, and what matters most to you.' },
                  { icon: '🔍', title: 'We review your current policy', desc: 'We go through your existing coverage line by line — identifying what\'s working, what\'s missing, and what you might be overpaying for.' },
                  { icon: '📊', title: 'We compare real options', desc: 'We look at multiple providers and coverage levels — not just the ones that pay the highest commissions.' },
                  { icon: '💡', title: 'We explain it in plain English', desc: 'No jargon. We tell you exactly what each coverage type means and whether you actually need it.' },
                  { icon: '✅', title: 'You choose with confidence', desc: 'You make the final decision. We\'re here to inform, not to sell you anything.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Coverage types we help you understand</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🚗', title: 'Liability Coverage', desc: 'Covers damage you cause to others. We help you understand state minimums vs. what you actually need to protect your assets.' },
              { icon: '💥', title: 'Collision Coverage', desc: 'Covers damage to your car from accidents. We help you decide if it\'s worth it based on your vehicle\'s value and your deductible.' },
              { icon: '🌪️', title: 'Comprehensive Coverage', desc: 'Covers non-collision damage — theft, weather, animals. We explain when it makes sense and when it doesn\'t.' },
              { icon: '🚑', title: 'Uninsured Motorist', desc: 'Protects you when the other driver has no insurance. We explain why this matters more than most people realize.' },
              { icon: '🏥', title: 'Medical Payments', desc: 'Covers medical expenses after an accident regardless of fault. We help you understand how it interacts with your health insurance.' },
              { icon: '🔧', title: 'Roadside & Rental', desc: 'Add-on coverages that may or may not be worth it. We help you decide based on your situation.' },
            ].map(item => (
              <div key={item.title} className="glass-card p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why not just use a comparison site */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why not just use a comparison website?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: 'Comparison sites', items: ['Show you prices, not coverage quality', 'Can\'t explain what\'s actually covered', 'Earn referral fees from insurers', 'Give generic recommendations', 'Can\'t read your specific policy'] },
                { label: 'Our consultants', items: ['Review your actual coverage needs', 'Explain every line of your policy', 'Earn a flat fee from you only', 'Give advice tailored to your situation', 'Identify gaps and overpayments'] },
              ].map(col => (
                <div key={col.label}>
                  <p className="font-bold text-gray-900 mb-3">{col.label}</p>
                  <ul className="space-y-2">
                    {col.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="mt-0.5">{col.label === 'Our consultants' ? '✅' : '❌'}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to find the right coverage?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Book a free consultation and talk to a real person who will review your coverage and help you find the right policy.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}>
            Get a Free Consultation →
          </Link>
          <p className="text-sm text-gray-400 mt-4">$300 one-time fee · No commissions · No hidden costs</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
