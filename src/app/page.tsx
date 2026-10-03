"use client";

import dynamic from 'next/dynamic';
import { useState, useMemo, useEffect } from 'react';
import { BIVACCHI_DATA, Bivacco } from '@/data/bivacchi';
import { Search, Map as MapIcon, List, Moon, Sun, Droplets, Users, Mountain, Bed, X, Navigation } from 'lucide-react';
import clsx from 'clsx';

// Dynamic import for Leaflet (must run client-side only)
const MapComponent = dynamic(() => import('@/components/Map'), { ssr: false, loading: () => <div className="w-full h-full bg-slate-100 dark:bg-slate-900 animate-pulse flex items-center justify-center"><MapIcon className="w-8 h-8 text-slate-300" /></div> });

export default function Home() {
    const [search, setSearch] = useState('');
    const [activeId, setActiveId] = useState<number | null>(null);
    const [modalOpenId, setModalOpenId] = useState<number | null>(null);
    
    // Filters
    const [region, setRegion] = useState('');
    const [group, setGroup] = useState('');
    const [diffFilters, setDiffFilters] = useState<Set<string>>(new Set());
    const [reqWater, setReqWater] = useState(false);
    const [reqBeds, setReqBeds] = useState(false);

    // Mobile tabs
    const [mobileTab, setMobileTab] = useState<'list' | 'map'>('list');
    
    // Dark mode simple toggle
    const [isDark, setIsDark] = useState(false);
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setIsDark(isDarkMode);
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        if (!isDark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    };

    // Filter Logic
    const filteredBivacchi = useMemo(() => {
        return BIVACCHI_DATA.filter(b => {
            if (search && !b.nome.toLowerCase().includes(search.toLowerCase()) && !b.gruppo_montuoso.toLowerCase().includes(search.toLowerCase())) return false;
            if (region && b.regione !== region) return false;
            if (group && b.gruppo_montuoso !== group) return false;
            if (diffFilters.size > 0 && !diffFilters.has(b.difficolta_accesso)) return false;
            if (reqWater && b.stato_acqua.toLowerCase().includes('assente')) return false;
            if (reqBeds && b.posti_letto.numero < 6) return false;
            return true;
        });
    }, [search, region, group, diffFilters, reqWater, reqBeds]);

    const regions = Array.from(new Set(BIVACCHI_DATA.map(b => b.regione))).sort();
    const groups = Array.from(new Set(BIVACCHI_DATA.map(b => b.gruppo_montuoso))).sort();

    const toggleDiff = (d: string) => {
        const newSet = new Set(diffFilters);
        if (newSet.has(d)) newSet.delete(d);
        else newSet.add(d);
        setDiffFilters(newSet);
    };

    const modalBivacco = modalOpenId ? BIVACCHI_DATA.find(b => b.id === modalOpenId) : null;

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
            {/* NAVBAR */}
            <nav className="flex-shrink-0 z-[1000] bg-emerald-50/90 dark:bg-emerald-950/90 backdrop-blur-xl border-b border-emerald-100/60 dark:border-emerald-900/60 shadow-sm relative">
                <div className="flex items-center justify-between px-4 lg:px-6 h-16">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25">
                            <Mountain className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="text-base lg:text-lg font-bold text-slate-900 dark:text-white leading-tight">BivouMaps</h1>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block leading-none">Bivacchi italiani</p>
                        </div>
                    </div>

                    <div className="flex-1 max-w-md mx-4 hidden sm:block">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input type="text" placeholder="Cerca bivacco o gruppo montuoso..."
                                value={search} onChange={e => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                            <span>{filteredBivacchi.length} bivacchi</span>
                        </div>
                        <button onClick={toggleDarkMode} className="p-2 rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE TABS */}
            <div className="md:hidden flex flex-shrink-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm relative">
                <button onClick={() => setMobileTab('list')} className={clsx("flex-1 py-3 text-sm font-semibold border-b-2 transition-all flex items-center justify-center gap-2", mobileTab === 'list' ? "text-emerald-600 border-emerald-500" : "text-slate-500 border-transparent")}>
                    <List className="w-4 h-4" /> Lista
                </button>
                <button onClick={() => setMobileTab('map')} className={clsx("flex-1 py-3 text-sm font-semibold border-b-2 transition-all flex items-center justify-center gap-2", mobileTab === 'map' ? "text-emerald-600 border-emerald-500" : "text-slate-500 border-transparent")}>
                    <MapIcon className="w-4 h-4" /> Mappa
                </button>
            </div>

            {/* MAIN CONTENT */}
            <main className="flex flex-1 overflow-hidden relative">
                
                {/* SIDEBAR */}
                <aside className={clsx("w-full md:w-[460px] lg:w-[480px] flex-shrink-0 flex flex-col bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-10 transition-transform shadow-[4px_0_24px_rgba(0,0,0,0.02)]", mobileTab === 'map' ? 'max-md:hidden' : 'flex')}>
                    <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-900/95 sticky top-0 z-10 flex flex-col gap-3">
                        {/* Mobile Search */}
                        <div className="sm:hidden relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input type="text" placeholder="Cerca bivacco..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
                        </div>

                        {/* Filters */}
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">Regione</label>
                                <select value={region} onChange={e => setRegion(e.target.value)} className="w-full px-3 py-2.5 text-sm rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 outline-none focus:ring-2 focus:ring-emerald-500/30">
                                    <option value="">Tutte le regioni</option>
                                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 ml-1">Gruppo Montuoso</label>
                                <select value={group} onChange={e => setGroup(e.target.value)} className="w-full px-3 py-2.5 text-sm rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 outline-none focus:ring-2 focus:ring-emerald-500/30">
                                    <option value="">Tutti i gruppi</option>
                                    {groups.map(g => <option key={g} value={g}>{g}</option>)}
                                </select>
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            {['E', 'EE', 'EEA'].map(d => {
                                const isSelected = diffFilters.has(d);
                                let baseClass = "flex-1 py-2 text-sm font-bold rounded-lg border-2 transition-all shadow-sm ";
                                if (d === 'E') {
                                    baseClass += isSelected ? "bg-emerald-500 text-white border-emerald-600 shadow-emerald-500/30" : "bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:border-emerald-700 dark:text-emerald-400";
                                } else if (d === 'EE') {
                                    baseClass += isSelected ? "bg-amber-500 text-white border-amber-600 shadow-amber-500/30" : "bg-amber-50 border-amber-300 text-amber-700 hover:bg-amber-100 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-400";
                                } else if (d === 'EEA') {
                                    baseClass += isSelected ? "bg-rose-500 text-white border-rose-600 shadow-rose-500/30" : "bg-rose-50 border-rose-300 text-rose-700 hover:bg-rose-100 dark:bg-rose-900/30 dark:border-rose-700 dark:text-rose-400";
                                }
                                return (
                                    <button key={d} onClick={() => toggleDiff(d)} className={baseClass}>
                                        {d}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-1">
                            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-600 dark:text-slate-300">
                                <input type="checkbox" checked={reqWater} onChange={e => setReqWater(e.target.checked)} className="w-4 h-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500/30 accent-emerald-500" />
                                <Droplets className="w-4 h-4 text-emerald-500" /> Con acqua
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-600 dark:text-slate-300">
                                <input type="checkbox" checked={reqBeds} onChange={e => setReqBeds(e.target.checked)} className="w-4 h-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500/30 accent-emerald-500" />
                                <Users className="w-4 h-4 text-blue-500" /> Posti &gt; 6
                            </label>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-24 custom-scrollbar">
                        {filteredBivacchi.map(b => (
                            <div key={b.id} 
                                onClick={() => { setActiveId(b.id); if(window.innerWidth < 768) setMobileTab('map'); }}
                                className={clsx("group p-4 rounded-xl border-2 transition-all cursor-pointer", activeId === b.id ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/20 shadow-md shadow-emerald-500/10 scale-[1.02]" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:border-emerald-400 hover:shadow-lg hover:-translate-y-0.5")}>
                                
                                <div className="flex justify-between items-start mb-1.5">
                                    <h3 className="font-bold text-slate-900 dark:text-white leading-tight">{b.nome}</h3>
                                    <span className={clsx("px-2 py-0.5 rounded text-[10px] font-bold flex-shrink-0", b.difficolta_accesso === 'E' ? 'bg-emerald-100 text-emerald-800' : b.difficolta_accesso === 'EE' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800')}>{b.difficolta_accesso}</span>
                                </div>
                                <p className="text-xs text-slate-500 mb-3">{b.gruppo_montuoso}</p>
                                
                                <div className="flex gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
                                    <span className="flex items-center gap-1 bg-slate-50 border-2 border-slate-200 dark:bg-slate-700/50 dark:border-slate-600 px-2 py-1 rounded-md shadow-sm"><Mountain className="w-3.5 h-3.5 text-emerald-500" /> {b.quota_m} m</span>
                                    <span className="flex items-center gap-1 bg-slate-50 border-2 border-slate-200 dark:bg-slate-700/50 dark:border-slate-600 px-2 py-1 rounded-md shadow-sm"><Bed className="w-3.5 h-3.5 text-blue-500" /> {b.posti_letto.numero} posti letto</span>
                                </div>
                                <div className="mt-3">
                                    <button onClick={(e) => { e.stopPropagation(); setModalOpenId(b.id); }} className="w-full py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-emerald-500 hover:text-white rounded-lg transition-colors">
                                        Vedi Dettagli &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                        {filteredBivacchi.length === 0 && (
                            <div className="text-center p-8">
                                <MapIcon className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3" />
                                <p className="text-slate-500 font-medium">Nessun bivacco trovato</p>
                                <p className="text-xs text-slate-400 mt-1">Prova a rimuovere qualche filtro</p>
                            </div>
                        )}
                    </div>
                </aside>

                {/* MAP AREA */}
                <div className={clsx("flex-1 h-full z-0 relative", mobileTab === 'list' ? 'max-md:hidden' : 'block')}>
                    <MapComponent bivacchi={filteredBivacchi} activeId={activeId} onMarkerClick={setActiveId} onOpenModal={setModalOpenId} />
                </div>
            </main>

            {/* MODAL */}
            {modalBivacco && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm" onClick={() => setModalOpenId(null)}>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                        <div className="p-5 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-800 dark:to-teal-900 text-white sticky top-0 flex justify-between items-start z-10">
                            <div>
                                <h2 className="text-xl font-bold">{modalBivacco.nome}</h2>
                                <p className="text-emerald-200 text-sm mt-0.5">{modalBivacco.gruppo_montuoso}</p>
                            </div>
                            <button onClick={() => setModalOpenId(null)} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"><X className="w-5 h-5"/></button>
                        </div>
                        <div className="p-5 space-y-6">
                            
                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Bed className="w-3.5 h-3.5 text-indigo-500" />
                                        <p className="text-[11px] text-indigo-600 uppercase font-semibold">Posti Letto</p>
                                    </div>
                                    <p className="font-medium text-sm text-indigo-900 dark:text-indigo-100">{modalBivacco.posti_letto.numero} ({modalBivacco.posti_letto.tipologia})</p>
                                </div>
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Droplets className="w-3.5 h-3.5 text-blue-500" />
                                        <p className="text-[11px] text-blue-600 uppercase font-semibold">Acqua</p>
                                    </div>
                                    <p className="font-medium text-sm text-blue-900 dark:text-blue-100">{modalBivacco.stato_acqua}</p>
                                </div>
                            </div>

                            {/* Dotazioni */}
                            <div>
                                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Dotazioni Presenti</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(modalBivacco.dotazioni).map(([key, value]) => value && (
                                        <span key={key} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                                            {key.replace('_', ' ').charAt(0).toUpperCase() + key.replace('_', ' ').slice(1)}
                                        </span>
                                    ))}
                                    {Object.values(modalBivacco.dotazioni).every(v => !v) && (
                                        <span className="text-sm text-slate-500">Nessuna dotazione segnalata.</span>
                                    )}
                                </div>
                            </div>
                            
                            {/* Itinerari */}
                            <div>
                                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Itinerari di Accesso</h3>
                                <div className="space-y-3">
                                    {modalBivacco.itinerari.map((it, i) => (
                                        <div key={i} className="p-4 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                            <p className="font-bold text-sm text-slate-900 dark:text-white">Da: {it.partenza}</p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 mb-3">
                                                <span className="bg-white dark:bg-slate-700 px-2 py-1 rounded shadow-sm border border-slate-100 dark:border-slate-600">Dislivello: <span className="text-emerald-600 dark:text-emerald-400">{it.dislivello}</span></span>
                                                <span className="bg-white dark:bg-slate-700 px-2 py-1 rounded shadow-sm border border-slate-100 dark:border-slate-600">Tempo: <span className="text-slate-700 dark:text-slate-200">{it.tempo}</span></span>
                                                <span className="bg-white dark:bg-slate-700 px-2 py-1 rounded shadow-sm border border-slate-100 dark:border-slate-600">Segnavia: <span className="text-slate-700 dark:text-slate-200">{it.segnavia}</span></span>
                                            </div>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700">{it.descrizione}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Azioni */}
                            <div className="pt-2">
                                <a 
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${modalBivacco.coordinate.lat},${modalBivacco.coordinate.lng}`} 
                                    target="_blank" rel="noopener noreferrer" 
                                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
                                >
                                    <Navigation className="w-5 h-5" /> 
                                    Apri in Google Maps
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
