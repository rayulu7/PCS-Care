import React, { useState, useEffect } from 'react'; // Corrected import
import { Plus, LogOut, Settings, Trash2, UserCog } from 'lucide-react';

import BlogHero from './BlogHero';
import BlogCard from './BlogCard';
import BlogArchive from './BlogArchive';
import BlogPagination from './BlogPagination';
import BlogStats from './BlogStats';

import LoginModal from './LoginModal';
import CreateBlog from './CreateBlog';
import EditBlog from './EditBlog';
import Blogpost from './Blogpost.jsx';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateBlog, setShowCreateBlog] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    // Get admin-created blogs from localStorage
    const adminBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setAllPosts(adminBlogs);
    
    // Check if user is already logged in
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleLogin = (success) => {
    if (success) {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  const handleSaveBlog = (blogData) => {
    const newBlog = {
      ...blogData,
      id: Date.now().toString(),
      image: blogData.bannerImage || blogData.image,
      date: blogData.date || new Date().toISOString().split('T')[0]
    };

    const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const updatedBlogs = [newBlog, ...existingBlogs];
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    
    setAllPosts([newBlog, ...allPosts]);
    setShowCreateBlog(false);
  };

  const handleDeleteBlog = (blogId) => {
    // Only delete from admin blogs (localStorage)
    const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const updatedBlogs = existingBlogs.filter(blog => blog.id !== blogId);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    // Remove from UI
    setAllPosts(allPosts.filter(post => post.id !== blogId));
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  if (showCreateBlog) {
    return (
      <CreateBlog 
        onBack={() => setShowCreateBlog(false)}
        onSave={handleSaveBlog}
      />
    );
  }

  if (editingBlog) {
    return (
      <EditBlog
        blog={editingBlog}
        onBack={() => setEditingBlog(null)}
        onSave={updatedBlog => {
          // Update blog in localStorage and UI
          const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
          const updatedBlogs = existingBlogs.map(b => b.id === updatedBlog.id ? updatedBlog : b);
          localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
          setAllPosts(updatedBlogs);
          setEditingBlog(null);
        }}
      />
    );
  }

  if (selectedPost) {
    return <Blogpost post={selectedPost} onBack={handleBackToBlog} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <BlogHero />
      
      {/* Floating Admin Login Button (icon only, left side) */}
      {!isAdmin && (
        <button
          onClick={() => setShowLoginModal(true)}
          className="fixed top-1/2 left-4 z-50 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors flex items-center"
          style={{ transform: 'translateY(-50%)' }}
          aria-label="Admin Login"
        >
          <UserCog className="h-6 w-6" />
        </button>
      )}
      {/* Admin Controls */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-end items-center space-x-4">
          {isAdmin ? (
            <>
              <button
                onClick={() => setShowCreateBlog(true)}
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Blog
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </>
          ) : null}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {allPosts.map((post) => (
                <div key={post.id} className="relative group">
                  <BlogCard post={post} onReadMore={handleReadMore} />
                  {/* Show delete and edit buttons for admin-created blogs only (id length > 10) */}
                  {isAdmin && post.id.length > 10 && (
                    <div className="absolute top-2 right-2 z-10 flex gap-2">
                      <button
                        onClick={() => handleDeleteBlog(post.id)}
                        className="p-2 bg-white rounded-full shadow hover:bg-red-100"
                        title="Delete Blog"
                      >
                        <Trash2 className="h-5 w-5 text-red-500" />
                      </button>
                      <button
                        onClick={() => setEditingBlog(post)}
                        className="p-2 bg-white rounded-full shadow hover:bg-blue-100"
                        title="Edit Blog"
                      >
                        ✏️
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <BlogPagination />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-80">
            <BlogArchive />
          </div>
        </div>
        
        {/* Stats Section */}
        <BlogStats />
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Blog;
