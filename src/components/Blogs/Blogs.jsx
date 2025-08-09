import React from 'react';
import './Blogs.css';

const blogPosts = [
  { title: 'How to Analyze Real Estate Deals (Step-by-Step)', source: 'BiggerPockets', url: 'https://www.biggerpockets.com/blog/analyze-rental-property', image: 'https://placehold.co/600x400/2D3748/E2E8F0?text=Deal+Analysis' },
  { title: 'Cap Rate Explained', source: 'Investopedia', url: 'https://www.investopedia.com/terms/c/caprate.asp', image: 'https://placehold.co/600x400/2D3748/E2E8F0?text=Cap+Rate' },
  { title: 'Housing Market Trends', source: 'Redfin News', url: 'https://www.redfin.com/news/data-center/', image: 'https://placehold.co/600x400/2D3748/E2E8F0?text=Market+Trends' },
  { title: 'Commercial Real Estate Outlook', source: 'CBRE Research', url: 'https://www.cbre.com/insights', image: 'https://placehold.co/600x400/2D3748/E2E8F0?text=CRE+Outlook' },
  { title: 'Rental Market Reports', source: 'Zillow Research', url: 'https://www.zillow.com/research/data/', image: 'https://placehold.co/600x400/2D3748/E2E8F0?text=Rental+Reports' },
  { title: 'NAR Research & Statistics', source: 'NAR', url: 'https://www.nar.realtor/research-and-statistics', image: 'https://placehold.co/600x400/2D3748/E2E8F0?text=NAR+Research' },
];

const Blogs = () => (
  <section id="blog" className="blogs">
    <div className="container">
      <h2 className="section-title">Latest Insights & Articles</h2>
      <p className="section-subtitle">Curated external resources to stay up-to-date on real estate investment.</p>

      <div className="blogs-grid">
        {blogPosts.map((post, idx) => (
          <a key={idx} href={post.url} target="_blank" rel="noopener noreferrer" className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="source">{post.source}</p>
              <span className="read-more">Read Article →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Blogs;


