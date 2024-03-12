import React from 'react'

const LoadingSingleCountry = () => {
  return (
    <div className="country-section">
    <div className="country_flag">
      <div className='img_loading'></div>
    </div>
    <div className="country_name_info_borders">
      <div className="country_name_info">
        <div className="loading" id='country_name'></div>
        <div className="country_info_text">
          <div className="left-text-section">
            <div className="single_line_info_text">
            <strong>Population:</strong>
            <div className='loading'></div>
            </div>
            <div className="single_line_info_text">
                
            <strong>Region:</strong>
            <div className='loading'></div>
            </div>
            <div className="single_line_info_text">
            <strong>Capital:</strong>
            <div className='loading'></div>
            </div>
            <div className="single_line_info_text">
            <strong>Native name:</strong>
            <div className='loading'></div>
            </div>
          </div>
          <div className="right-text-section">
            <div className="single_line_info_text">
            <strong>Top domain:</strong>
            <div className='loading'></div>
            </div>
            <div className="single_line_info_text">
            <strong>Currency:</strong>
            <div className='loading'></div>
            </div>
            <div className="single_line_info_text">
            <strong>Language:</strong>
            <div className='loading'></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-countries">
        <h4>Border Countries</h4>
        <div className="snippets">
          <div className='snippet_loading'></div>
          <div className='snippet_loading'></div>
          <div className='snippet_loading'></div>
          <div className='snippet_loading'></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoadingSingleCountry