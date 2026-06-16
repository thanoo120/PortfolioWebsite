import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiBookOpen, FiCalendar, FiClock } from 'react-icons/fi';
import { MEDIUM_ARTICLES_FALLBACK, MEDIUM_USERNAME, mediumProfileUrl } from '../../config/medium';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';

const RSS_API = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

const stripHtml = (html) => html?.replace(/<[^>]*>/g, '') ?? '';

const extractImage = (article) => {
  if (article.thumbnail) return article.thumbnail;
  const match = (article.content || article.description || '').match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
};

const readingTime = (content) => {
  const words = stripHtml(content).split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const ArticleCard = ({ article, index }) => {
  const image = extractImage(article);
  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.07 }}
      className="group flex flex-col rounded-2xl border border-cyan-300/20 bg-slate-900/60 overflow-hidden backdrop-blur-xl transition hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
    >
      <div className="h-44 shrink-0 overflow-hidden bg-slate-800/60">
        {image ? (
          <img
            src={image}
            alt={article.title}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-600">
            <FiBookOpen size={32} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {(article.categories ?? []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-purple-300/30 bg-slate-800/70 px-2.5 py-0.5 text-xs text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="flex-1 text-base font-semibold leading-snug text-white transition-colors group-hover:text-cyan-300">
          {article.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-slate-400">
          {stripHtml(article.description).slice(0, 150)}…
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <FiCalendar size={12} />
            {formatDate(article.pubDate)}
          </span>
          <span className="flex items-center gap-1">
            <FiClock size={12} />
            {readingTime(article.content || article.description)}
          </span>
          <span className="flex items-center gap-1 text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
            Read <FiArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

const MediumSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(RSS_API)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === 'ok' && data.items?.length) {
          setArticles(data.items.slice(0, 6));
        } else {
          throw new Error('No articles');
        }
      })
      .catch(() => {
        if (MEDIUM_ARTICLES_FALLBACK.length) {
          setArticles(MEDIUM_ARTICLES_FALLBACK.slice(0, 6));
        } else {
          setError(true);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <SectionWrapper id="articles">
      <SectionHeading
        badge="Medium Articles"
        title="Writing about what I build and learn"
        subtitle="Thoughts on full-stack engineering, software architecture, and developer tools — straight from the trenches."
      />

      {loading && (
        <div className="flex justify-center py-16">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
        </div>
      )}

      {!loading && error && (
        <div className="flex flex-col items-center gap-4 py-16 text-slate-400">
          <FiBookOpen size={32} />
          <p>Could not load articles right now.</p>
          <a
            href={mediumProfileUrl()}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-cyan-300 hover:underline"
          >
            Read on Medium →
          </a>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <ArticleCard key={article.guid ?? article.link} article={article} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <a
              href={mediumProfileUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/35 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-300/60"
            >
              <FiBookOpen size={16} /> View all articles on Medium
            </a>
          </motion.div>
        </>
      )}
    </SectionWrapper>
  );
};

export default MediumSection;
