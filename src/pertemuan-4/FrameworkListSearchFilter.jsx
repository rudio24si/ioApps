import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
    /* 1. Inisialisasi DataForm sebagai objek */
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    /* 2. Destructuring agar variabel searchTerm dan selectedTag bisa langsung dipakai */
    const { searchTerm, selectedTag } = dataForm;

    /* 3. Handle perubahan nilai input form */
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    /* 4. Logika Filter (Menggunakan variabel dari destructuring) */
    const _searchTerm = searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name.toLowerCase().includes(_searchTerm) ||
            framework.description.toLowerCase().includes(_searchTerm) ||
            framework.details.releaseYear.toString().toLowerCase().includes(_searchTerm) ||
            framework.details.developer.toLowerCase().includes(_searchTerm);

        const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;

        return matchesSearch && matchesTag;
    });

    const allTags = [...new Set(frameworkData.flatMap((framework) => framework.tags))];

    return (
        <div className="min-h-screen bg-[#020d08] p-6 md:p-12 text-slate-200">
            {/* --- SECTION FILTER --- */}
            <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-emerald-500/50 group-focus-within:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="searchTerm" // Pastikan name sama dengan key di state
                        placeholder="Search by name, developer, or year..."
                        value={searchTerm}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#051610]/80 border border-emerald-900/50 rounded-xl text-emerald-100 placeholder-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all duration-300 backdrop-blur-sm shadow-inner"
                    />
                </div>

                <div className="relative md:w-64">
                    <select
                        name="selectedTag" // Pastikan name sama dengan key di state
                        value={selectedTag}
                        onChange={handleChange}
                        className="w-full appearance-none px-4 py-3 bg-[#051610]/80 border border-emerald-900/50 rounded-xl text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-inner"
                    >
                        <option value="" className="bg-[#020d08]">All Tags</option>
                        {allTags.map((tag, index) => (
                            <option key={index} value={tag} className="bg-[#020d08]">{tag}</option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* --- SECTION GRID KARTU --- */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFrameworks.length > 0 ? (
                    filteredFrameworks.map((item) => (
                        <div key={item.id} className="relative group p-[1.5px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                            <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#064e3b_0%,#10b981_50%,#064e3b_100%)]" />

                            <div className="relative h-full w-full bg-[#051610]/95 backdrop-blur-3xl p-7 rounded-[15px] flex flex-col justify-between border border-white/5">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                                            <div className="w-5 h-5 rounded-sm bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase">Released</span>
                                            <span className="text-sm font-bold text-white tracking-tighter">{item.details.releaseYear}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.name}</h2>
                                    <p className="text-emerald-100/60 text-sm leading-relaxed mb-6 font-light">{item.description}</p>
                                    <div className="text-xs text-emerald-400/80 mb-8 italic flex items-center gap-2">
                                        <span className="h-[1px] w-4 bg-emerald-800"></span>
                                        by {item.details.developer}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {item.tags.map((tag, index) => (
                                            <span key={index} className="bg-emerald-950/50 border border-emerald-800/30 text-emerald-300 px-3 py-1 text-[10px] rounded-md backdrop-blur-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a href={item.details.officialWebsite} target="_blank" rel="noopener noreferrer" className="group/btn relative inline-flex items-center justify-center w-full py-3 px-4 rounded-xl overflow-hidden font-semibold transition-all duration-300">
                                        <div className="absolute inset-0 bg-emerald-600 group-hover/btn:bg-emerald-500 transition-colors duration-300"></div>
                                        <span className="relative text-white text-sm flex items-center gap-2">
                                            View Documentation
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <p className="text-emerald-500/50 italic">No frameworks found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}