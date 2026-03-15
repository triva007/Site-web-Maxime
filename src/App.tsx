import React from 'react';
import { 
  TrendingUp, 
  ShieldAlert, 
  Zap, 
  Search, 
  BarChart3, 
  Wrench, 
  Camera, 
  MessageSquare,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

// --- Components ---

const CircularProgress = ({ value }: { value: number }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl"></div>
      
      <svg className="transform -rotate-90 w-full h-full relative z-10">
        {/* Background track */}
        <circle 
          cx="112" cy="112" r={radius} 
          stroke="currentColor" strokeWidth="12" fill="transparent" 
          className="text-slate-800/50" 
        />
        {/* Progress track */}
        <circle
          cx="112" cy="112" r={radius}
          stroke="url(#gradient)" strokeWidth="12" fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" /> {/* emerald-500 */}
            <stop offset="100%" stopColor="#34D399" /> {/* emerald-400 */}
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center z-20">
        <span className="text-6xl font-bold text-white tracking-tighter">{value}</span>
        <span className="text-sm text-slate-400 font-medium uppercase tracking-widest mt-1">Score</span>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-slate-900/50 border border-slate-800/50 p-6 rounded-2xl hover:border-yellow-500/30 transition-colors group">
    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-yellow-500/10 transition-colors">
      <Icon className="w-6 h-6 text-yellow-500" />
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

// --- Main Page ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans selection:bg-yellow-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-32">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
          {/* Simulated circuit lines (simplified) */}
          <div className="absolute left-0 top-1/4 w-64 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent transform -rotate-45"></div>
          <div className="absolute right-0 bottom-1/4 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform rotate-12"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="inline-block mb-8">
            <h2 className="text-2xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 uppercase">
              ProfitDrive
            </h2>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            NE DEVINEZ PLUS <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">VOTRE MARGE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
            L’IA qui calcule votre profit avant l’achat. Collez un lien, encaissez la différence.
          </p>

          {/* Search Input */}
          <div className="relative w-full max-w-2xl mx-auto mb-10 group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/40 to-yellow-400/40 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            
            <div className="relative flex items-center bg-[#131825] border border-yellow-500/30 rounded-full p-1.5 shadow-2xl">
              <div className="pl-4 pr-2 text-slate-500">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Collez le lien Leboncoin ou La Centrale ici..."
                className="flex-1 bg-transparent text-white px-2 py-3 md:py-4 outline-none placeholder-slate-500 text-sm md:text-base"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold px-6 md:px-10 py-3 md:py-4 rounded-full hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 flex items-center gap-2">
                ANALYSER
              </button>
            </div>
          </div>

          {/* Key Points */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-yellow-500" /> Score de rareté</span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-blue-400" /> Estimation de marge</span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-red-400" /> Risques cachés</span>
          </div>
        </div>
      </section>

      {/* 2. COMMENT ÇA MARCHE (HOW IT WORKS) - Remplace l'ancienne section image */}
      <section className="py-24 px-4 bg-[#0F1423] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-yellow-500 uppercase mb-3">Processus</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">3 étapes pour sécuriser votre marge</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Plus besoin de passer des heures à comparer. Notre IA fait le travail d'un expert automobile et d'un analyste financier en quelques secondes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-slate-800 via-yellow-500/30 to-slate-800 z-0"></div>

            {[
              {
                step: '01',
                title: 'Collez le lien',
                desc: 'Trouvez une annonce intéressante sur Leboncoin ou La Centrale et collez simplement son URL dans ProfitDrive.',
                icon: <Search className="w-8 h-8 text-blue-400" />
              },
              {
                step: '02',
                title: 'L\'IA analyse',
                desc: 'Notre algorithme croise l\'historique des prix, estime les frais de remise en état et identifie les risques cachés.',
                icon: <Zap className="w-8 h-8 text-yellow-400" />
              },
              {
                step: '03',
                title: 'Encaissez',
                desc: 'Obtenez votre AI Flip Score, le prix d\'achat cible et le profit net estimé. Achetez en toute confiance.',
                icon: <TrendingUp className="w-8 h-8 text-emerald-400" />
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#131825] border border-slate-700 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-yellow-500/50 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-500">
                  {item.icon}
                </div>
                <div className="text-yellow-500/50 font-mono text-sm font-bold mb-2">{item.step}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5. CONTEXT SECTION (Couple Image) */}
      <section className="py-24 px-4 bg-[#0F1423]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">L'analyse en temps réel pour votre flipping.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Prenez des décisions éclairées instantanément. Notre IA décortique les annonces sur plusieurs écrans pour vous livrer la vérité sur votre future marge.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1423] via-transparent to-transparent z-10"></div>
            <img 
              src="https://i.postimg.cc/fLjZDYF9/Gemini-Generated-Image-a8o65ga8o65ga8o6.webp" 
              alt="Couple analysant des données sur plusieurs écrans" 
              className="w-full h-[500px] object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            {/* Overlay UI elements */}
            <div className="absolute bottom-10 left-10 z-20 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-xl max-w-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Analyse en cours</span>
              </div>
              <p className="text-sm text-white">Croisement des données boursières et de l'historique des ventes automobiles...</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI FLIP SCORE SECTION */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-sm font-bold tracking-widest text-yellow-500 uppercase mb-3">Le Cœur du Moteur</h2>
            <h3 className="text-4xl font-bold text-white mb-6">AI FLIP SCORE</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Notre algorithme propriétaire évalue chaque opportunité sur 100. Il combine 4 piliers fondamentaux pour vous donner une vision claire et immédiate de la rentabilité.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Marge', val: '25', color: 'text-emerald-400' },
                { label: 'Vitesse', val: '25', color: 'text-blue-400' },
                { label: 'Risque', val: '25', color: 'text-yellow-400' },
                { label: 'Demande', val: '25', color: 'text-purple-400' }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                  <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                  <div className={`text-xl font-bold ${item.color}`}>{item.val} <span className="text-xs text-slate-600 font-normal">/ 25</span></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <CircularProgress value={82} />
          </div>
        </div>
      </section>

      {/* 4. DEMO CARD SECTION */}
      <section className="py-24 px-4 bg-[#0F1423]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">EXEMPLE D’ANALYSE PROFITDRIVE</h2>
            <p className="text-slate-400 mt-2">BMW M3 2018</p>
          </div>

          <div className="bg-[#131825] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Card Header Image */}
            <div className="h-64 md:h-80 w-full relative">
              <img 
                src="https://i.postimg.cc/VLsssHzb/AOI-d-8u-T9i4d-D0bmpl0lx-SEA4AN9p-WS9kv-HL93BZ-Eu-Q3JDk-Uvu-QM-2RVGing-Yuu-FQLz-ZOu-C4Tyw-Fmklxpz-Ju.webp" 
                alt="BMW M3 2018" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131825] to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4" />
                  TRÈS BONNE OPPORTUNITÉ
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Left Column: Financials */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Prix de l’annonce</span>
                    <span className="text-xl font-semibold text-white">42 000 €</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Valeur estimée marché</span>
                    <span className="text-xl font-semibold text-white">46 800 €</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Coût de préparation estimé</span>
                    <span className="text-lg text-slate-300">1 200 € <span className="text-xs text-slate-500 block">(entretien, nettoyage, contrôle)</span></span>
                  </div>
                  
                  <div className="pt-4">
                    <span className="text-slate-400 block mb-3">Prix de revente conseillé</span>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-slate-900 rounded-lg p-2 border border-slate-800">
                        <div className="text-xs text-slate-500 mb-1">Vente rapide</div>
                        <div className="text-sm font-semibold text-white">45 900 €</div>
                      </div>
                      <div className="bg-blue-900/20 rounded-lg p-2 border border-blue-500/30">
                        <div className="text-xs text-blue-400 mb-1">Prix idéal</div>
                        <div className="text-sm font-semibold text-white">47 200 €</div>
                      </div>
                      <div className="bg-slate-900 rounded-lg p-2 border border-slate-800">
                        <div className="text-xs text-slate-500 mb-1">Prix maximal</div>
                        <div className="text-sm font-semibold text-white">48 500 €</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-r from-blue-900/40 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6 text-center">
                    <span className="block text-blue-400 text-sm font-semibold mb-1 uppercase tracking-wider">Profit potentiel estimé</span>
                    <span className="text-4xl font-bold text-white">≈ 4 000 €</span>
                  </div>
                </div>

                {/* Right Column: Analysis & Alerts */}
                <div className="space-y-8">
                  {/* Score Breakdown */}
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" /> Détail du Score (82/100)
                    </h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Marge', val: 21, color: 'bg-emerald-500' },
                        { label: 'Vitesse', val: 22, color: 'bg-blue-500' },
                        { label: 'Risque', val: 19, color: 'bg-yellow-500' },
                        { label: 'Demande', val: 20, color: 'bg-purple-500' }
                      ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <span className="text-sm text-slate-400 w-16">{stat.label}</span>
                          <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div className={`h-full ${stat.color}`} style={{ width: `${(stat.val / 25) * 100}%` }}></div>
                          </div>
                          <span className="text-sm font-medium text-white w-10 text-right">{stat.val}/25</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Alerts */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500" /> Points de vigilance
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-orange-200/80 bg-orange-500/10 p-2 rounded-lg border border-orange-500/20">
                        <span className="mt-0.5">⚠️</span> kilométrage légèrement élevé
                      </li>
                      <li className="flex items-start gap-2 text-sm text-orange-200/80 bg-orange-500/10 p-2 rounded-lg border border-orange-500/20">
                        <span className="mt-0.5">⚠️</span> peu de photos de l’intérieur
                      </li>
                    </ul>
                  </div>

                  {/* Common Issues */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm text-slate-400">Pannes fréquentes sur ce modèle :</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Coussinets de bielle à surveiller, amortisseurs adaptatifs sensibles, usure du système de freinage possible.
                    </p>
                  </div>

                  {/* Negotiation Script */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 relative">
                    <div className="absolute -top-3 left-4 bg-[#131825] px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Message généré par l'IA
                    </div>
                    <p className="text-sm text-slate-300 italic">
                      "Bonjour, après analyse du marché et des frais de préparation à prévoir, je pourrais proposer 40 800 € pour ce véhicule. Seriez-vous ouvert à une discussion autour de ce prix ?"
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURES SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Et bien plus encore pour identifier les meilleures opportunités.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={BarChart3}
              title="Estimation prix marché"
              description="Analyse en temps réel de milliers de transactions similaires pour déterminer le juste prix."
            />
            <FeatureCard 
              icon={Wrench}
              title="Coût de préparation"
              description="Anticipation des frais de remise en état basée sur le modèle, l'année et le kilométrage."
            />
            <FeatureCard 
              icon={Camera}
              title="Analyse des photos"
              description="Détection automatique des défauts de carrosserie et de l'usure intérieure via vision par ordinateur."
            />
            <FeatureCard 
              icon={MessageSquare}
              title="Négociation automatique"
              description="Génération de scripts d'approche personnalisés pour maximiser vos chances d'obtenir le meilleur prix."
            />
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-24 px-4 bg-[#0F1423]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-yellow-500 uppercase mb-3">Avis Vérifiés</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ils maximisent leurs marges avec ProfitDrive</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Alexandre D.",
                role: "Flippeur indépendant",
                text: "Avant, je passais 45 minutes à analyser une annonce. Maintenant, en 10 secondes, je sais si je dois appeler le vendeur ou passer mon chemin. Mon ROI a explosé.",
                profit: "+4 200 € sur son dernier flip"
              },
              {
                name: "Sarah M.",
                role: "Négociatrice Auto",
                text: "Les scripts de négociation générés par l'IA sont bluffants. Ils utilisent les défauts détectés sur les photos pour justifier la baisse de prix. C'est redoutable.",
                profit: "Achète 15% sous le prix du marché"
              },
              {
                name: "Thomas L.",
                role: "Marchand Automobile",
                text: "L'estimation des coûts de préparation est ce qui m'a convaincu. L'IA a détecté qu'une série 3 nécessitait un changement de chaîne de distribution. Ça m'a sauvé d'un gouffre financier.",
                profit: "Évite 2 à 3 merguez par mois"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#131825] border border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="mt-auto pt-6 border-t border-slate-800/50">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-slate-500 mb-2">{testimonial.role}</div>
                  <div className="text-sm font-medium text-emerald-400 bg-emerald-500/10 inline-block px-3 py-1 rounded-full">
                    {testimonial.profit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Questions Fréquentes</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Sur quels sites ProfitDrive fonctionne-t-il ?",
                a: "Actuellement, notre IA est optimisée pour analyser les annonces de Leboncoin, La Centrale, et Autoscout24. Nous intégrons de nouvelles plateformes régulièrement."
              },
              {
                q: "Comment l'IA estime-t-elle les coûts de préparation ?",
                a: "Nous utilisons une base de données croisant des millions de factures d'entretien, les carnets constructeurs et la reconnaissance visuelle des photos de l'annonce pour anticiper les frais (pneus, carrosserie, révisions majeures)."
              },
              {
                q: "Les données de marché sont-elles en temps réel ?",
                a: "Oui. ProfitDrive scanne le marché en continu pour vous donner la valeur exacte d'un véhicule à l'instant T, en prenant en compte la saisonnalité et la tendance actuelle."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">Q.</span> {faq.q}
                </h4>
                <p className="text-slate-400 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="relative py-32 px-4 border-t border-slate-800">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.minimalstudio.es/wp-content/uploads/2024/06/minimal_studio-the-garage-00002.jpg" 
            alt="Minimalist Garage" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19]/80 to-[#0B0F19]"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ne laissez plus le hasard dicter vos marges.
          </h2>
          
          <button className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold text-lg px-10 py-5 rounded-full hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:scale-105 transition-all duration-300">
            Analyser une annonce maintenant →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800/50 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} ProfitDrive. Tous droits réservés.</p>
      </footer>

    </div>
  );
}
