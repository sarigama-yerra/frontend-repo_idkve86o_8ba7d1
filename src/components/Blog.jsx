import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Blog(){
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blog`);
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (e) {
        setPosts([]);
      } finally { setLoading(false); }
    })();
  }, []);

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">From the blog</h2>
          <p className="text-slate-600 mt-2">Fresh updates and product tips.</p>
        </div>
        {loading ? (
          <p className="text-center text-slate-500">Loading…</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-slate-500">No posts yet.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.id} className="p-5 rounded-2xl bg-white ring-1 ring-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-violet-200 to-violet-100 mb-3" />
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{p.excerpt || '—'}</p>
                <p className="text-slate-500 text-xs mt-3">By {p.author}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
