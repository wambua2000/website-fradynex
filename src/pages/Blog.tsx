import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, TrendingUp, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState<any>(null);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1920" alt="Tech Blog" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#002147]/85" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                            Insights & <span className="text-[#00d1ff]">Updates</span>
                        </h1>
                        <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                            AI Innovation Insights — Explore Our Knowledge Hub
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {BLOG_POSTS.map((post, idx) => (
                            <motion.article 
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col"
                            >
                                <div className="relative overflow-hidden h-72">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-6 left-6 bg-[#0056b3] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-10 space-y-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={12} className="text-[#0056b3]" /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <User size={12} className="text-[#0056b3]" /> Fradynex Expert
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0056b3] group-hover:text-[#004494] transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-black text-sm leading-relaxed line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <button 
                                        onClick={() => setSelectedPost(post)}
                                        className="flex items-center gap-2 text-[#0056b3] font-bold text-xs group-hover:gap-4 transition-all w-max"
                                    >
                                        Read Full Article <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Post Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#002147]/90 backdrop-blur-sm"
                            onClick={() => setSelectedPost(null)}
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[40px] shadow-2xl relative z-10 overflow-hidden flex flex-col"
                        >
                            <button 
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-8 right-8 p-3 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-500 transition-all z-20"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative h-64 sm:h-80 shrink-0">
                                <img src={selectedPost.image} alt={selectedPost.title} className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                            </div>

                            <div className="p-10 md:p-14 overflow-y-auto">
                                <div className="flex items-center gap-6 mb-8 text-[9px] text-gray-400 font-bold uppercase tracking-widest pb-6 border-b border-gray-100">
                                    <span className="flex items-center gap-2">
                                        <Calendar size={14} className="text-[#0056b3]" /> {selectedPost.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock size={14} className="text-[#0056b3]" /> 5 Min Read
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-[#0056b3] mb-8">{selectedPost.title}</h2>
                                <div className="prose prose-sm max-w-none text-black leading-relaxed text-base space-y-6">
                                    <p className="text-lg text-[#0056b3] italic mb-6">{selectedPost.excerpt}</p>
                                    <p>{selectedPost.content}</p>
                                    <p>Our commitment at Fradynex is to ensure that your business stays at the forefront of digital innovation. We leverage modern frameworks and strategic consultancy to ensure scalable growth.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Newsletter Section */}
            <section className="py-24 bg-gradient-to-r from-[#003d82] to-[#0056b3] text-center text-white relative overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center"
                >
                    <div className="mb-8">
                        <TrendingUp size={48} className="text-[#00d1ff] opacity-80" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Stay Updated</h2>
                    <p className="text-base text-blue-100/80 mb-12 max-w-2xl mx-auto font-light">Subscribe to our newsletter for the latest insights and industry updates.</p>
                    <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="flex-grow bg-white text-black px-8 py-3 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-400/30 text-sm shadow-xl" 
                        />
                        <button className="bg-white text-[#0056b3] px-10 py-3 rounded-2xl font-black text-xs tracking-widest hover:bg-blue-50 transition-all shadow-xl">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Blog;
