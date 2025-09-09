import React from 'react'
import { FiClock, FiTrendingUp, FiCheckCircle, FiDollarSign, FiBriefcase, FiGift } from 'react-icons/fi'
import ValueCard from './ValueCard'
import ChecklistSichernCTA from './ChecklistSichernCTA'
const Value = () => {
  return (
    <section className='px-4 py-10 bg-[#0B0B0B] w-full'>
        <h1 className='text-white/95 text-2xl font-black text-center mt-10'>Darum lohnt sich die Website-Checkliste für dich</h1>
        <div className='flex flex-col gap-6 mt-15'>
                <ValueCard
    heading="Schnelle Klarheit"
    body="In wenigen Minuten erkennst du, ob deine Website wirklich auf Gewinn optimiert ist."
    icon={<FiClock size={28} />}
/>
<ValueCard
    heading="Die entscheidenden Conversion-Hebel"
    body="Erfahre, welche Elemente jede verkaufsstarke Website braucht, um Besucher zuverlässig zu Kunden zu machen."
    icon={<FiTrendingUp size={28} />}
/>
<ValueCard
    heading="Konkrete To-Do’s"
    body="Keine vagen Tipps mehr – du bekommst klare Handlungsschritte, die du sofort umsetzen kannst."
    icon={<FiCheckCircle size={28} />}
/>
<ValueCard
    heading="Geld-Verbrennung vermeiden"
    body="Finde heraus, warum du aktuell Traffic verlierst und wie du diesen sofort in echte Ergebnisse verwandelst."
    icon={<FiDollarSign size={28} />}
/>
<ValueCard
    heading="Für jedes Business geeignet"
    body="Egal ob Coach, Dienstleister oder Online-Shop – die Checkliste zeigt dir die universellen Erfolgsfaktoren."
    icon={<FiBriefcase size={28} />}
/>
<ValueCard
    heading="100 % kostenlos & sofort verfügbar"
    body="Starte sofort ohne Risiko oder versteckte Kosten – dein Website-Check ist sofort einsatzbereit."
    icon={<FiGift size={28} />}
/>

<div className='w-full mt-10 items-center justify-center flex'>
    <ChecklistSichernCTA />
    </div>

        </div>
    </section>

  )
}

export default Value

