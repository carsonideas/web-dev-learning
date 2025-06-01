import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Highlight, themes } from 'prism-react-renderer';

interface TopicPageProps {}

const TopicPage: React.FC<TopicPageProps> = () => {
  const { technology, topicId } = useParams<{ technology: string; topicId: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        // For now, we'll simulate loading the markdown content
        const response = await fetch(`/content/${technology}/${topicId}.md`);
        
        if (!response.ok) {
          throw new Error('Content not found');
        }
        
        const text = await response.text();
        setContent(text);
        setLoading(false);
      } catch (err) {
        setError('Failed to load content. Please try again later.');
        setLoading(false);
      }
    };

    fetchContent();
  }, [technology, topicId]);

  // Custom renderer for code blocks to add syntax highlighting
  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <Highlight
          theme={themes.nightOwl}
          code={String(children).replace(/\n$/, '')}
          language={match[1]}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="code-block" style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-center">
          <p>{error}</p>
        </div>
      ) : (
        <div className="markdown-content">
          <ReactMarkdown components={components}>{content}</ReactMarkdown>
          
          <div className="mt-8 pt-6 border-t border-dark-accent">
            <div className="flex justify-between">
              <button className="btn-secondary">
                Previous Topic
              </button>
              <button className="btn-primary">
                Next Topic
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicPage;
