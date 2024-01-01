import { useState } from "react";
import "./Newsitem.css";

function Newsitem({
  sourceName,
  imageUrl,
  title,
  description,
  author,
  publishDate,
  url,
}) {
  const [showFullText, setShowFullText] = useState(false);

  function toggleText() {
    setShowFullText(!showFullText);
  }

  const descString = JSON.stringify(description);

  const truncatedDesc =
    descString.length > 140
      ? showFullText
        ? descString
        : `${descString.slice(0, 140)}...`
      : descString;

  return (
    <article className="news-item">
      <span className="news-badge">{sourceName}</span>
      <div className="img-container">
        <img
          src={imageUrl || "/news.jpg"} // Assuming the image is in the public folder
          className="news-img"
          alt="News Poster"
        />
      </div>
      <span className="news-title">{title}</span>
      {descString !== "null" && (
        <p className="news-description">
          {truncatedDesc}
          {descString.length > 140 && (
            <button className="read-more" onClick={toggleText}>
              {showFullText ? "Show Less" : "Show More"}
            </button>
          )}
        </p>
      )}
      <span className="news-footer">
        {author || ""}{" "}
        {publishDate ? new Date(publishDate).toLocaleDateString() : " date"}
      </span>
      <a href={url} className="read-more-btn">
        Read the source
      </a>
    </article>
  );
}

export default Newsitem;
