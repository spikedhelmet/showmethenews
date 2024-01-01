import Newsitem from "./Newsitem";
import React, { useEffect, useState } from "react";
import "./News.css";

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const apiKey = "0933136b7bfa46bcb1ea76156736a4a9";

export default function News({ category, country }) {
  document.title = capitalize(category) + " - showmethenews";

  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(20);
  const pageSize = 12;

  async function getData() {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=12`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      const { articles, totalResults } = data;

      setTotalResults(totalResults);
      setArticle(articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
    document.title = capitalize(category) + " - showmethenews";
  }, [page, category]);

  const handlePrevClick = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(pageSize);
  };

  return (
    <div className="container text-center">
      <div className="grid-3">
        {article.map((element) => (
          <Newsitem
            key={element.title}
            url={element.url}
            title={element.title}
            description={element.description}
            imageUrl={element.urlToImage}
            author={element.author}
            publishDate={element.publishedAt}
            sourceName={element.source.name}
          />
        ))}
      </div>

      <div className="btn-cont">
        <button
          disabled={page < 2}
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>

        <button
          disabled={page >= Math.ceil(totalResults / pageSize)}
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
