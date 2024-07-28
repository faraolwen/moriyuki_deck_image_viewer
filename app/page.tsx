'use client';

import { useState } from 'react';

const images = [
  { id: 1, url: '/images/cat.jpg', tags: ['cat', 'animal'] },
  { id: 2, url: '/images/dog.jpg', tags: ['dog', 'animal'] },
  { id: 3, url: '/images/flower.jpg', tags: ['flower', 'nature'] },
  // 他の画像を追加
];

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);

  const handleSearch = () => {
    const results = images.filter(image => 
      image.tags.includes(searchText.toLowerCase())
    );
    setFilteredImages(results);
  };

  return (
    <div>
      <h1>画像検索アプリ</h1>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>検索</button>
      <div>
        {filteredImages.length > 0 ? (
          filteredImages.map(image => (
            <div key={image.id}>
              <img src={image.url} alt="" style={{ width: '200px' }} />
            </div>
          ))
        ) : (
          <p>一致する画像がありません。</p>
        )}
      </div>
    </div>
  );
}