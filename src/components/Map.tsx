import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Bivacco } from '@/data/bivacchi';
import { Map as MapIcon, Bed, Droplets, Mountain } from 'lucide-react';

const { BaseLayer, Overlay } = LayersControl;

const createMarkerIcon = (difficulty: string, isActive: boolean) => {
    const colors: Record<string, { bg: string, ring: string }> = {
        'E':   { bg: '#10b981', ring: '#d1fae5' },
        'EE':  { bg: '#f59e0b', ring: '#fef3c7' },
        'EEA': { bg: '#f43f5e', ring: '#ffe4e6' }
    };
    const c = colors[difficulty] || colors['E'];
    const size = isActive ? 36 : 28;
    const dotSize = isActive ? 18 : 12;
    const ringWidth = isActive ? 3 : 2;

    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="width:${size}px;height:${size}px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:${c.ring};border:${ringWidth}px solid ${c.bg};box-shadow: 0 0 6px rgba(0,0,0,0.5);${isActive ? 'animation:markerPulse 1.5s infinite;' : ''}transition:all 0.3s ease;">
            <div style="width:${dotSize}px;height:${dotSize}px;border-radius:50%;background:${c.bg};box-shadow: 0 1px 2px rgba(0,0,0,0.4);"></div>
        </div>`,
        iconSize: [size, size],
        iconAnchor: [size/2, size/2],
        popupAnchor: [0, -(size/2 + 4)]
    });
};

function MapController({ activeId, bivacchi }: { activeId: number | null, bivacchi: Bivacco[] }) {
    const map = useMap();
    
    useEffect(() => {
        if (activeId) {
            const b = bivacchi.find(x => x.id === activeId);
            if (b) {
                map.flyTo([b.coordinate.lat, b.coordinate.lng], 14, { duration: 1.2 });
            }
        }
    }, [activeId, map, bivacchi]);

    return null;
}

function MapResizer() {
    const map = useMap();
    
    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            map.invalidateSize();
        });
        
        resizeObserver.observe(map.getContainer());
        
        return () => resizeObserver.disconnect();
    }, [map]);

    return null;
}

interface MapProps {
    bivacchi: Bivacco[];
    activeId: number | null;
    onMarkerClick: (id: number) => void;
    onOpenModal: (id: number) => void;
}

export default function Map({ bivacchi, activeId, onMarkerClick, onOpenModal }: MapProps) {
    return (
        <MapContainer center={[45.80, 11.00]} zoom={8} className="w-full h-full z-0" zoomControl={false}>
            <LayersControl position="topright">
                <BaseLayer checked name="🛰️ Satellite">
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution='&copy; <a href="https://www.esri.com">Esri</a> &middot; Imagery'
                        maxZoom={18}
                    />
                </BaseLayer>
                <BaseLayer name="🏔️ Topografica">
                    <TileLayer
                        url="https://tile.opentopomap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a> &middot; &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        maxZoom={17}
                    />
                </BaseLayer>
                {/* Labels overlay */}
                <Overlay checked name="🏷️ Etichette (Solo Satellite)">
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                        attribution='&copy; <a href="https://www.esri.com">Esri</a> &middot; Labels'
                        maxZoom={18}
                    />
                </Overlay>
            </LayersControl>

            <MapController activeId={activeId} bivacchi={bivacchi} />
            <MapResizer />

            {bivacchi.map(b => (
                <Marker 
                    key={b.id} 
                    position={[b.coordinate.lat, b.coordinate.lng]}
                    icon={createMarkerIcon(b.difficolta_accesso, b.id === activeId)}
                    eventHandlers={{
                        click: () => onMarkerClick(b.id)
                    }}
                >
                    <Popup maxWidth={280} closeButton={false}>
                        <div className="p-4 font-sans bg-white dark:bg-slate-800 rounded-xl">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-bold text-base text-slate-900 dark:text-white leading-tight">{b.nome}</h3>
                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ml-2 flex-shrink-0 ${b.difficolta_accesso === 'E' ? 'bg-emerald-100 text-emerald-800' : b.difficolta_accesso === 'EE' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`}>{b.difficolta_accesso}</span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{b.gruppo_montuoso}</p>
                            
                            <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 mb-3">
                                <span className="flex items-center gap-1">
                                    <Mountain className="w-3.5 h-3.5 text-emerald-500" />
                                    {b.quota_m} m
                                </span>
                                <span className="flex items-center gap-1">
                                    <Bed className="w-3.5 h-3.5 text-blue-500" />
                                    {b.posti_letto.numero}
                                </span>
                            </div>
                            
                            <button 
                                onClick={() => onOpenModal(b.id)}
                                className="w-full py-2 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                            >
                                Dettagli &amp; Itinerari &rarr;
                            </button>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
