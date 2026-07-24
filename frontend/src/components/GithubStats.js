import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, ArrowUpRight } from "lucide-react";
import { fetchGithubProfile } from "../lib/api";
import { SOCIALS, GITHUB_USERNAME } from "../data/content";

export const GithubStats = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchGithubProfile()
      .then((res) => setData(res.data))
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" className="relative py-20 md:py-28 px-6 md:px-12" data-testid="github-section">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl tracking-tight mb-3 flex items-center gap-3"
        >
          <Github className="text-accentblue" size={32} /> On GitHub
        </motion.h2>
        <p className="text-white/50 mb-10">Live activity, pulled directly from the GitHub API.</p>

        {error && (
          <p className="text-white/40 text-sm" data-testid="github-error">GitHub stats are temporarily unavailable.</p>
        )}

        {data && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Public Repos", value: data.public_repos },
                { label: "Followers", value: data.followers },
                { label: "Following", value: data.following },
                { label: "Languages", value: Object.keys(data.languages || {}).length },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5 text-center" data-testid={`github-stat-${s.label.replace(/\s/g, "-").toLowerCase()}`}>
                  <div className="font-mono-stat text-2xl text-accentsky">{s.value}</div>
                  <div className="text-xs text-white/45 mt-1 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden glass p-4 mb-10">
              <img
                src={`https://ghchart.rshah.org/3B82F6/${GITHUB_USERNAME}`}
                alt="GitHub contribution graph"
                className="w-full"
                data-testid="github-contribution-graph"
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(data.top_repos || []).map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`github-repo-${repo.name}`}
                  className="glass glass-hover rounded-2xl p-5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-white text-base truncate">{repo.name}</h3>
                      <ArrowUpRight size={15} className="text-white/40 group-hover:text-accentsky transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-white/50 text-sm mt-2 line-clamp-2">{repo.description || "No description provided."}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-xs text-white/45 font-mono-stat">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks}</span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noreferrer"
          data-testid="github-view-profile-btn"
          className="inline-flex items-center gap-2 mt-10 text-accentsky hover:underline text-sm"
        >
          <Users size={15} /> View full GitHub profile <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
};
