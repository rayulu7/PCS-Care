import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
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
            contentBlocks: [
              { type: 'paragraph', text: 'This is a detailed introduction to the blog system.' },
              { type: 'image', src: 'https://source.unsplash.com/random/800x400/?technology', caption: 'Tech insights' },
              { type: 'paragraph', text: 'More engaging content follows here...' },
              { type: 'banner', text: '🔥 Stay tuned for more! 🔥' },
              { type: 'paragraph', text: 'End of first post content.' }
            ],
            date: new Date().toISOString(),
          },
          {
            id: '2',
            title: 'Second Post: Rayulu Innovations Ahead in this Customized Blog',
            author: 'Admin',
            description: 'A sneak peek into future tech and innovations.',
            contentBlocks: [
              { type: 'paragraph', text: 'Exploring AI, robotics, and the future.' },
              { type: 'image', src: 'https://source.unsplash.com/random/800x400/?ai', caption: 'AI powering the world' },
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
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error('useBlogContext must be used within BlogProvider');
  return context;
};
