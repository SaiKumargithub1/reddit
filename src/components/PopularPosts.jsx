import React, { useState, useEffect } from "react";
import axios from "axios";

const PopularPosts = ({ subreddit = "popular", sort = "hot", limit = 10 }) => {
  const [posts, setPosts] = useState([]);
  const [after, setAfter] = useState(null);
  const [before, setBefore] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async (pageAfter = null, pageBefore = null) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.reddit.com/r/${subreddit}/${sort}.json`,
        {
          params: {
            limit,
            after: pageAfter,
            before: pageBefore,
          },
        }
      );

      const data = response.data.data;
      setPosts(data.children);
      setAfter(data.after);
      setBefore(data.before);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch posts. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [subreddit, sort]);

  const handleNextPage = () => {
    if (after) {
      setCurrentPage((prev) => prev + 1);
      fetchPosts(after, null);
    }
  };

  const handlePreviousPage = () => {
    if (before) {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
      fetchPosts(null, before);
    }
  };

  return (
    <div className="popular-posts">
      <h2>Popular</h2>

      <div className="sort-buttons">
        {["Hot", "New", "Controversial", "Top"].map((sortOption) => (
          <button
            key={sortOption}
            onClick={() => fetchPosts(null, null)}
            className={sort === sortOption.toLowerCase() ? "active" : ""}
          >
            {sortOption}
          </button>
        ))}
      </div>

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {!loading &&
        posts.map((post) => (
          <div key={post.data.id} className="post">
            <img src={post.data.thumbnail} alt="Post Thumbnail" />
            <div>
              <h3>{post.data.title}</h3>
              <p>
                Posted by {post.data.author} | {post.data.num_comments} Comments
              </p>
              <p>Upvotes: {post.data.ups}</p>
            </div>
          </div>
        ))}

      <div className="pagination-controls">
        <button
          onClick={handlePreviousPage}
          disabled={!before}
          className="prev-button"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={!after}
          className="next-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PopularPosts;
