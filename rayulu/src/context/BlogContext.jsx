import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem('blogs');
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: '1',
            title: 'Welcome to Rayulu’s Blog',
            author: 'Admin',
            description: 'This is the first blog post description.',
            excerpt: 'This is the first blog post description.', 
            image: '/zoro-smile.jpg', 
            contentBlocks: [
              { type: 'paragraph', text: 'This is a detailed introduction to the blog system.' },
              { type: 'image', src: '/zoro-smile.jpg', caption: 'Tech insights' },
              { type: 'paragraph', text: 'More engaging content follows here...' },
              { type: 'banner', text: '🔥 Stay tuned for more! 🔥' },
              { type: 'paragraph', text: 'End of first post content.' }
            ],
            date: new Date().toISOString(),
          },
          {
            id: '2',
            title: 'Second Post: SubbiReddy Innovations Ahead in this Customized Blog',
            author: 'Admin',
            description: 'A sneak peek into future tech and innovations.',
            excerpt: 'A sneak peek into future tech and innovations.', 
            image: '/squid-game.avif',
            contentBlocks: [
              { type: 'paragraph', text: 'Exploring AI, robotics, and the future.' },
              { type: 'image', src: '/squid-game.avif', caption: 'AI powering the world' },
              { type: 'paragraph', text: 'How AI is reshaping industries globally.' },
              { type: 'banner', text: '🚀 Innovation is the key! 🚀' },
              { type: 'paragraph', text: 'More to come soon...' }
            ],
            date: new Date().toISOString(),
          }
        ];
  });

  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem('isAdmin', isAdmin);
  }, [isAdmin]);

  const login = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setIsAdmin(true);
      setShowLoginModal(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  const addBlog = (newBlog) => {
    const blogWithId = {
      ...newBlog,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      excerpt: newBlog.excerpt || newBlog.description?.slice(0, 120) + '...', 
      image:
        newBlog.image ||
        newBlog.contentBlocks?.find((b) => b.type === 'image')?.src || 
        'https://picsum.photos/400/200?random=' + Math.random(),
    };
    setBlogs([blogWithId, ...blogs]);
  };

  const getBlogById = (id) => blogs.find((blog) => blog.id === id);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        isAdmin,
        showLoginModal,
        setShowLoginModal,
        login,
        logout,
        addBlog,
        getBlogById,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlogContext() {
  const context = useContext(BlogContext);
  if (!context) throw new Error('useBlogContext must be used within BlogProvider');
  return context;
}

export { BlogProvider, useBlogContext };
